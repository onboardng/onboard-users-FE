import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react'
import { FiChevronRight, FiPlus, FiSearch } from 'react-icons/fi'
import { HiMapPin, HiXCircle } from 'react-icons/hi2'
import { useSearchParams } from 'react-router-dom'
import { Tab, Tabs, styled } from '@mui/material'
import { useSelector } from 'react-redux'

import { Bed, BriefcaseMoney, Bus, ClipboardText, Clock, Hospital, Wallet } from '../../assets/icons'
import { Course, PaginationProps, UniversityResponse } from '../../interfaces'
import ApplySchool from '../school/PopUpContent/ApplySchool'
import PageLoader from "../../components/Loader/PageLoader"
import { useHttpRequest } from '../../hooks/useHttpRequest'
import { BookOpen, Globe } from '../../assets/icons'
import Pagination from '../Pagination/Pagination'
import { RootState } from '../../redux/store'
import TabPanel from '../Shared/TabPanel'
// import Ratings from '../Shared/Ratings'
import AddRating from './AddRatings'
import Block from '../Shared/Block'
import Spinner from '../Loader/Spinner'

const baseUrl = process.env.REACT_APP_BACKEND_API as string
interface PopupProps {
  open: boolean
  course: Course | null
  currency: string | undefined
  courseId: string | undefined
}

const CustomTabs = styled(Tabs)({
  '&.MuiTabs-root': {
    width: 'auto',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    margin: '30px 0 20px',
    "& .MuiTabs-flexContainer": {
      "@media screen and (max-width: 400px)": {
        width: "100%",
        minHeight: "fit-content",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "10px",
      },
    },
    "@media screen and (max-width: 400px)": {
      width: "100%",
      minHeight: "fit-content",
      gap: "10px",
    }
  },
  '& .MuiTabs-indicator': {
    display: 'none',
  }
})

const CustomTab = styled(Tab)({
  '&.MuiTab-root': {
    minWidth: '122px',
    minHeight: '44px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    background: '#EDEDF2',
    color: '#BFBFD4',
    borderRadius: '9px',
    fontWeight: 500,
    fontSize: '14px',
    textTransform: 'capitalize',
    margin: '0 20px 0 0',
    '& svg': {
      fill: '#BFBFD4',
    },
    "@media screen and (max-width: 400px)": {
      minWidth: "100px",
      fontSize: "12px",
    }
  },
  '&.Mui-selected': {
    background: '#6FA7B4',
    color: '#FFF',
    '& svg': {
      fill: '#FFF',
    },
  },
})

const CustomTab2 = styled(Tab)({
  '&.MuiTab-root': {
    minWidth: '147px',
    minHeight: '42px',
    display: 'flex',
    alignItems: 'center',
    background: 'transparent',
    color: '#BFBFD4',
    border: '1px solid #BFBFD4',
    borderRadius: '9px',
    fontWeight: 500,
    fontSize: '14px',
    textTransform: 'capitalize',
    margin: '0 20px 0 0',
    "@media screen and (max-width: 400px)": {
      minWidth: "90px",
      fontSize: "10px",
    }
  },
  '&.Mui-selected': {
    border: '1px solid #6FA7B4',
    color: '#6FA7B4',
  },
})

const programs:any = {
  "advancedlearning": "Vocational Studies",
  "postgraduate": "Ph.D",
  "graduate": "Masters",
  "undergraduate": "Undergraduate",
}

const ViewSchool:React.FC<{id: string}> = ({id}) => {
  const [openPopup, setOpenPopup] = useState<PopupProps>({open: false, course: null, currency: "", courseId: ""});
  const { authorization: { access_token }} = useSelector((store: RootState) => store.authStore);
  const [universityData, setUniversityData] = useState<UniversityResponse | null>(null);
  const [paginationEl, setPaginationEl] = useState<PaginationProps | null>(null);
  const [isAddingReview, setIsAddingReview] = useState<boolean>(false);
  const [courses, setCourses] = useState<Array<Course | null>>([]);
  const [program, setProgram] = useState<string>('undergraduate');
  const [result, setResult] = useState<Array<Course | null>>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [imageCount, setImageCount] = useState<number>(0);
  const {loading, sendRequest} = useHttpRequest();
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [tab2, setTab2] = useState<number>(0);
  const [tab, setTab] = useState<number>(0);
  const courseReq = useHttpRequest();

  const closePop = () => setOpenPopup({open: false, course: null, currency: "", courseId: ""});
  const handleTabSwitch2 = (e: SyntheticEvent, value: number) => setTab2(value);
  const handleTabSwitch = (e: SyntheticEvent, value: number) => setTab(value);
  const handleImageSwitch = (index: number) => setImageCount(index);
  const handleProgramSwitch = (name: string) => setProgram(name);

  const getUniversityInfo = async(id: string) => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`
    }
    try {
      const data = await sendRequest(`${baseUrl}/university/view/${id}`, 'GET', null, headers)
      if(!data || data === undefined) return
      setUniversityData(data?.data)
    } catch (error) {}
  }

  const getCourses = async(program: string) => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`
    }
    try {
      const data = await courseReq.sendRequest(`${baseUrl}/course/in-uni/${id}/by-prg-name?limit=10&page=${page}&program_name=${program}`, 'GET', null, headers)
      if(!data || data === undefined) return
      // console.log(data)
      const { data: { allCourses }} = data
      setPaginationEl(allCourses)
      setCourses(allCourses?.data?.rows)
    } catch (error) {}
    window.location.reload()
  }

  useEffect(() => {
    setResult(courses)
  },[courses])

  useEffect(() => {
    getCourses(program)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[program, page])

  // pagination
  useEffect(() => {
    setPage(parseInt(searchParams?.get('page') || "1"));
  },[searchParams])

  const onPageChange = (page: number) => {
    setSearchParams({page: page.toString()})
    getUniversityInfo(id)
    window.scrollTo(0, 0)
    // window.location.reload()
  }

  const handlePagination = () => {
    if(paginationEl && paginationEl.total > 10) {
      return <Pagination onPageChange={onPageChange} pageSize={paginationEl?.perPage} currentPage={page} totalCount={paginationEl?.total} />
    } else {
      return <></>
    }
  }

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setQuery(e.target.value)
    filterCourses(e.target.value)
  }

  const filterCourses = (query: string) => {
    if(!query || query === '') return setResult(courses)
    const value = query.toLowerCase()
    const data = courses?.filter((course) => course?.name?.toLowerCase().includes(value))
    setResult(data)
  }

  useEffect(() => {
    getUniversityInfo(id)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const currency = universityData?.country_profile?.currency

  if(loading) return <PageLoader />

  return (
    <>
    {isAddingReview && <AddRating onClose={() => setIsAddingReview(false)} id={id} />}
    {openPopup.open && <ApplySchool close={() => closePop()} currency={currency} course={openPopup.course} courseId={openPopup.courseId} />}
    {universityData && (
      <div className='w-full flex flex-col md:flex-row gap-[32px] px-5'>
        <div className='flex flex-col items-center mt-4 md:mt-0'>
          <div className='w-[571px] max-w-full h-[200px] md:h-[400px] rounded-[8px] border-[1px] border-gray-200 mb-4'>
            <img src={universityData?.university?.pictures[imageCount]} alt={universityData?.university?.name} className='w-full h-full rounded-[8px] object-cover' />
          </div>
          <div className='w-full flex items-center gap-[21px] overflow-x-scroll'>
            {universityData?.university?.pictures.map((pic, index) => (
              <img key={index} src={pic} alt={universityData?.university?.name} onClick={() => handleImageSwitch(index)} className='w-[40px] md:w-[98px] h-[40px] md:h-[98px] rounded-md object-cover cursor-pointer' />
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
          <p className='font-[600] text-[24px] md:text-[40px] leading-[38px] md:leading-[56px] text-black capitalize mb-[14px]'>
            {universityData?.university?.name}
          </p>
          <div className='flex items-center gap-1 md:gap-2 mb-[10px] font-medium text-[16px] md:text-lg '>
            <Globe fill='#6FA7B4' /># {universityData?.university?.world_ranking}
          </div>
          <div className='flex items-center gap-[8px] my-[20px]'>
            <HiMapPin className='text-primary text-xl' />
            <p className='font-medium text-[16px] md:text-lg leading-8'>{universityData?.university.address}, {universityData?.university?.country}</p>
          </div>
          <div className='w-full'>
            <p className='w-full font-[500] text-base leading-[22px]'>{universityData.university.description}</p>
          </div>
          <div>
            <CustomTabs value={tab} onChange={handleTabSwitch}>
              <CustomTab label='Courses' iconPosition='start' icon={<BookOpen />} />
              <CustomTab label='Country Profile' iconPosition='start' icon={<Globe />} />
            </CustomTabs>
          </div>
          <hr className='w-full h-[1px] bg-[#DADAE7]' />
          <TabPanel value={tab} index={0}>
            <div className='w-full flex flex-col'>
              <div className='w-full flex items-center gap-5 mt-5 mb-[22px]'>
                <CustomTabs value={tab2} onChange={handleTabSwitch2}>
                  {universityData?.available_programs?.map((_, index) => (
                    <CustomTab2 key={index} label={programs[_.name]} onClick={() => handleProgramSwitch(_.name)} />
                  ))}
                </CustomTabs>
              </div>
              <hr className='w-full h-[1px] bg-[#DADAE7]' />
              <div className='w-full flex items-center justify-between mt-[26px]'>
                <p className='font-[500] text-xl leading-3[38px]'>Courses</p>
                <div className='w-[209px] h-[44px] flex items-center bg-white border-[1px] border-[#DADAE7] focus-within:border-primary rounded-md'>
                  <div className='flex items-center'>
                    <FiSearch fontSize={25} className='text-primary fill-primary ml-[12px]' />
                    <input type="text" value={query} onChange={handleQueryChange} placeholder='Search here' className='w-full border-none outline-none px-[2px] rounded-md ml-[12.5px]' />
                  </div>
                  <HiXCircle onClick={() => setQuery("")} fontSize={25} className='text-primary fill-primary mr-[12px] cursor-pointer' />
                </div>
              </div>
            </div>
            <div className='w-full flex flex-col gap-[20px] mt-[20px]'>
              {courseReq.loading ? (
                <div className='p-8'>
                  <Spinner />
                </div>
              ):(
                <>
                {courses && result?.map((course, index) => (
                  <div key={index} className='w-full hidden md:flex flex-col p-[20px] bg-white rounded-[10px]'>
                    <div className='w-full flex items-center justify-between'>
                      <div className='flex flex-col w-[60%]'>
                        <p className='font-[500] text-lg leading-8 capitalize mb-[5px]'>{course?.name}</p>
                        <p className='font-[500] text-sm leading-[26px] text-[#8B8BA4]'>
                          Application closes on {course?.application_closing && new Date(course?.application_closing).toDateString()}
                        </p>
                      </div>
                      <button onClick={() => setOpenPopup({open: true, course: course, currency: "", courseId: course?.id})} className='w-[158px] h-[60px] flex items-center justify-center gap-2 bg-primary text-white rounded-[4px] capitalize'>
                        apply now
                        <FiChevronRight />
                      </button>
                  </div>
                  <hr className='w-full h-[1px] bg-[#DADAE7] mt-3 mb-5' />
                  <div className='w-full'>
                    <p className='first-letter:capitalize font-medium text-base leading-[22px] text-[#8B8BA4]'>{course?.description}</p>
                  </div>
                </div>
                ))}
                {courses && result?.map((course, index) => (
                  <div key={index} className='w-full flex md:hidden flex-col p-[20px] bg-white rounded-[10px]'>
                    <p className='font-medium text-sm leading-[26px] capitalize mb-[10px'>{course?.name}</p>
                    <p className='font-medium text-base text-[#8B8BA4] leading-[22px] capitalize'>
                      Application closes on {course?.application_closing && new Date(course?.application_closing).toDateString()}
                    </p>
                    <hr className='w-full h-[1px] bg-[#DADAE7] mt-[15px]' />
                    <p className='font-medium text-base text-[#8B8BA4] leading-[22px] my-5 first-letter:capitalize'>{course?.description}</p>
                    <button type='button' onClick={() => setOpenPopup({open: true, course: course, currency: currency, courseId: course?.id})} className='w-full h-[60px] flex items-center justify-center gap-2 bg-primary text-white rounded-[4px] capitalize'>
                      apply now <FiChevronRight />
                    </button>
                  </div>
                ))}
                </>
              )}
            </div>
          </TabPanel>
          <TabPanel value={tab} index={1}>
            {universityData?.country_profile === null ? (
              <div className='w-full flex items-center justify-between mt-[44px]'>
                <p className='font-medium text-lg leading-[32px]'>Country Profile not available</p>
              </div>
            ): (
              <div className='w-full flex flex-col gap-5 py-5 mt-[44px]'>
                <div className="w-full flex flex-col">
                  <p className='font-medium text-lg leading-[32px]'>Spendings</p>
                  <div className="flex flex-wrap items-center justify-between gap-[33px]">
                    <Block icon={<Bed fill='#6FA7B4' />} title='Average rent' text={universityData?.country_profile?.average_rent} />
                    <Block icon={<Bus/>} title='Average monthly expenses' text={universityData?.country_profile?.average_monthly_expenses} />
                    <Block icon={<Hospital/>} title='Health insurance' text={universityData?.country_profile?.health_insurance} />
                  </div>
                </div>
                <Block icon={<Hospital/>} title='Helath insurance description' text={universityData?.country_profile?.health_insurance_description} />
                <div className="w-full flex flex-col">
                  <p className="font-medium text-lg leading-[32px]">Work & Study</p>
                  <div className="flex flex-wrap items-center gap-[33px]">
                      <Block icon={<BriefcaseMoney />} title='Job Availability' text={universityData?.country_profile?.job_availability} />
                      <Block icon={<ClipboardText/>} title='School certificate recognition' text={universityData?.country_profile?.certificate_recognition} />
                      <Block icon={<Wallet/>} title='Average income' text={universityData?.country_profile?.average_income_per_hour} />
                      <Block icon={<Clock/>} title='Required work hours' text={universityData?.country_profile?.required_working_hours_per_day} />
                  </div>
                </div>
                <div className="w-full flex flex-col">
                  <p className="font-medium text-lg leading-[32px]">Popular Jobs</p>
                  <div className="flex flex-wrap items-center gap-5">
                    {universityData?.country_profile?.popular_jobs?.map((job, index) => (
                      <div key={index} className='max-w-fit h-[46px] flex items-center gap-[22px] py-[10px] px-5 bg-[#F0F0F0] rounded-[10px] capitalize'>
                        <BriefcaseMoney /> <p>{job}</p>
                      </div>
                    ))}           
                  </div>
                </div>
                <div className="w-full flex flex-col">
                    <p className="font-medium text-lg leading-[32px]">Expert Take</p>
                    <div className='w-full h-[46px] py-[10px] px-5 bg-[#F0F0F0] rounded-[10px]'>
                        <p>{universityData?.country_profile?.expert_take}</p>
                    </div>
                </div>
              </div>
            )}
          </TabPanel>
          {/* Pagination goes here */}
          {tab === 0 && handlePagination()}
        </div>
      </div>
    )}
    </>
  )
}

export default ViewSchool