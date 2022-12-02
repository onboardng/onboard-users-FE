import React, { ChangeEvent, useEffect, useState } from 'react'
import { FiChevronRight, FiPlus, FiSearch } from 'react-icons/fi'
import { HiMapPin, HiXCircle } from 'react-icons/hi2'
import { useSelector } from 'react-redux'
import { Link, useSearchParams } from 'react-router-dom'

import { useHttpRequest } from '../../hooks/useHttpRequest'
import { Course, PaginationProps, UniversityResponse } from '../../interfaces'
import PageLoader from "../../components/Loader/PageLoader";
import { RootState } from '../../redux/store'
import AddRating from './AddRatings'
import Pagination from '../Pagination/Pagination'

// const baseUrl = process.env.REACT_APP_BACKEND_API
const baseUrl = "https://app.onboard.com.ng/onboard/v1"

const ViewSchool:React.FC<{id: string}> = ({id}) => {
  const [universityData, setUniversityData] = useState<UniversityResponse | null>(null)
  const [courses, setCourses] = useState<Array<Course | null>>([])
  const {loading, sendRequest} = useHttpRequest()
  const [query, setQuery] = useState<string>('')
  const [page, setPage] = useState<number>(1)
  const [isAddingReview, setIsAddingReview] = useState<boolean>(false)
  const { authorization: { access_token }} = useSelector((store: RootState) => store.authStore)

  const [paginationEl, setPaginationEl] = useState<PaginationProps | null>(null)
  const [searchParams, setSearchParams] = useSearchParams();
  
  const getUniversityInfo = async(id: string) => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`
    }
    try {
      const data = await sendRequest(`${baseUrl}/university/view/${id}`, 'GET', null, headers)
      const courseData = await sendRequest(`${baseUrl}/course/by-sch/${id}/?limit=10&page=${page}`, 'GET', null, headers)

      const [result, courseResult] = await Promise.all([data, courseData])
      if(result === undefined || courseResult === undefined) return
      setUniversityData(result?.data)
      setPaginationEl(courseResult?.data?.allCourses)
      setCourses(courseResult?.data?.allCourses?.data)
    } catch (error) {}
  }

  // pagination
  useEffect(() => {
    setPage(parseInt(searchParams?.get('page') || "1"));
  }, [searchParams])

  const onPageChange = (page: number) => {
    setSearchParams({page: page.toString()})
    getUniversityInfo(id)
  }

  const handlePagination = () => {
    if(paginationEl) {
      return <Pagination onPageChange={onPageChange} pageSize={paginationEl?.perPage} currentPage={page} totalCount={paginationEl?.totalDocs} />
    } else {
      return <></>
    }
  }

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)

  useEffect(() => {
    getUniversityInfo(id)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  if(loading) return <PageLoader />

  return (
    <>
    {isAddingReview && <AddRating onClose={() => setIsAddingReview(false)} />}
    {universityData && (
      <div className='w-full flex flex-row gap-[32px] px-5'>
        <div className='flex flex-col items-center'>
          <div className='w-[571px] h-[400px] rounded-[8px] border-[1px] border-gray-200 mb-4'>
            <img src={universityData?.university?.pictures[0]} alt={universityData?.university?.name} className='w-full h-full rounded-[8px] object-cover' />
          </div>
          <div className='w-full flex items-center gap-[21px]'>
            {universityData?.university?.pictures.map((pic, index) => (
              <img key={index} src={pic} alt={universityData?.university?.name} className='w-[98px] h-[98px] rounded-md object-cover' />
            ))}
          </div>
          <div className='w-full flex items-center justify-between bg-[#E7FAFF] p-[20px] mt-[23px]'>
            <p className='font-[500] text-base leading-[22px]'>Ratings & Reviews</p>
            <button onClick={() => setIsAddingReview(true)} className='flex items-center gap-[12.67px] bg-transparent text-primary'>
              <FiPlus className='text-[]'/>
              <p className='font-[700] text-[10px] leading-4 capitalize'>
                write a review/rating
              </p>
            </button>
          </div>
        </div>
        {/* second div */}
        <div className='flex flex-grow flex-col'>
          <p className='font-[600] text-[40px] leading-[56px] text-black capitalize mb-[14px]'>{universityData?.university?.name}</p>
          <div className='flex flex-col mb-[10px]'>
            <p>Ratings: {universityData.university.ratings}</p>
          </div>
          <div className='flex items-center gap-[8px] my-[20px]'>
            <HiMapPin className='text-primary' />
            <p className='font-[500] text-lg leading-8'>{universityData?.university.address}</p>
          </div>
          <div className='w-full'>
            <p className='w-full font-[500] text-base leading-[22px]'>{universityData.university.description}</p>
          </div>
          <div className='w-full flex items-center justify-between mt-[44px]'>
            <p className='font-[500] text-xl leading-3[38px]'>Courses</p>
            <div className='w-[209px] h-[44px] flex items-center bg-white border-[1px] border-[#DADAE7] focus-within:border-primary rounded-md'>
              <div className='flex items-center'>
                <FiSearch fontSize={25} className='text-primary fill-primary ml-[12px]' />
                <input type="text" value={query} onChange={handleQueryChange} placeholder='Search here' className='w-full border-none outline-none px-[2px] rounded-md ml-[12.5px]' />
              </div>
              <HiXCircle onClick={() => setQuery("")} fontSize={25} className='text-primary fill-primary mr-[12px] cursor-pointer' />
            </div>
          </div>
          <div className='w-full flex flex-col gap-[20px] mt-[20px]'>
            {courses && courses.length === 0 ? (
              <div>
                <p>No courses available.</p>
              </div>
            ) : (
              <>
              {courses.map((course, index) => (
                <div key={index} className='w-full flex flex-col p-[20px] bg-white rounded-[10px]'>
                  <div className='w-full flex items-center justify-between'>
                    <div className='flex flex-col'>
                      <p className='font-[500] text-lg leading-8 capitalize mb-[5px]'>{course?.name}</p>
                      <p className='font-[500] text-sm leading-[26px] text-[#8B8BA4]'>
                        Application closes on {course?.application_closing && new Date(course?.application_closing).toDateString()}
                      </p>
                    </div>
                    <Link to={`/schools/${course?.id}/apply`} className='w-[158px] h-[60px] flex items-center justify-center gap-2 bg-primary text-white rounded-[4px] capitalize'>
                      apply now
                      <FiChevronRight />
                    </Link>
                  </div>
                  <hr className='w-full h-[1px] bg-[#DADAE7] mt-3 mb-5' />
                  <div className='w-full'>
                    <p className='first-letter:capitalize font-medium text-base leading-[22px] text-[#8B8BA4]'>{course?.description}</p>
                  </div>
                </div>
              ))}
              </>
            )}
          </div>
          {/* Pagination goes here */}
          {handlePagination()}
        </div>
      </div>
    )}
    </>
  )
}

export default ViewSchool