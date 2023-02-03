import React, { MouseEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Course, Courses } from '../../../interfaces'
import { FiChevronRight } from 'react-icons/fi'
import { Calendar, ClockAlt, MoneyBill } from '../../../assets/icons'
import { useHttpRequest} from '../../../hooks/useHttpRequest'
import PageLoader from '../../Loader/PageLoader'

interface Props {
  close: () => void
  course: Course | null
  currency?: string
  courseId: string | undefined
}

const baseUrl = process.env.REACT_APP_BACKEND_API as string

const ApplySchool:React.FC<Props> = ({close, course, currency, courseId}) => {
  const [courseData, setCourseData] = useState<Courses | null>(null)
  const {loading, sendRequest} = useHttpRequest()
  const navigate = useNavigate();

  const CURRENCYLIST:any = {
    "EUR": "€",
    "USD": "$",
    "GBP": "£",
    "NGN": "₦",
  }

  const getCourseDetails = async(courseId: string) => {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const data = await sendRequest(`${baseUrl}/course/one/${courseId}`, 'GET', null, headers)
      if(data === undefined) return
      setCourseData(data?.data)
    } catch (error) {}
  }

  useEffect(() => {
    courseId && getCourseDetails(courseId)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  if(loading) return <PageLoader />

  return (
    <>
    {courseData && (
      <div
        className="w-[95%] h-screen md:h-[950px] flex items-center justify-center bg-gray-300 bg-opacity-40 fixed top-0 left-0 overflow-hidden pop-up"
        onScroll={() => {}}
        onClick={() => close()}>
        <div onClick={(e: MouseEvent<HTMLElement>) => e.stopPropagation()} className="w-full md:w-[800px] bg-white p-3 md:p-[30px] rounded-2xl modal-pop">
          <p className="font-medium text-sm md:text-xl leading-[38px] capitalize">{courseData?.name}</p>
          <p className="first-letter:capitalize font-medium text-xs md:text-base text-[#8B8BA4] leading-[16px] md:leading-[22px] my-1 md:my-5">{courseData?.description}</p>
          <hr className="w-full h-[1px] bg-[#DADAE7] mb-5" />
          <div className="w-full flex flex-col gap-[10px]">
            <div className="flex items-center gap-3">
              <ClockAlt />
              <div className="font-medium text-xs md:text-sm leading-[20px]  md:leading-[26px]">
                <>
                Course Duration: {courseData?.duration} {courseData?.duration && courseData?.duration <= 1 ? 'Year' : 'Years'}
                </>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar />
              <div className="font-medium text-xs md:text-sm leading-[20px]  md:leading-[26px]">
                <>
                Application opens: {courseData?.application_opening && new Date(courseData?.application_opening).toDateString()}
                </>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar />
              <div className="font-medium text-xs md:text-sm leading-[20px]  md:leading-[26px]">
                <>
                Application closes: {courseData?.application_closing && new Date(courseData?.application_closing).toDateString()}
                </>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MoneyBill />
              <div className="font-medium text-xs md:text-sm leading-[20px]  md:leading-[26px]">
                <>
                Estimated Admission Fee: {currency && CURRENCYLIST[currency]} {courseData?.tuition} (~₦ {(courseData?.price_in_naira).toLocaleString('en-US')})
                </>
              </div>
            </div>
          </div>
          <hr className="w-full h-[1px] bg-[#DADAE7] my-1 md:my-5" />
          <div className="w-full flex flex-col gap-[10px]">
            <p className="font-bold text-[12px] md:text-sm leading-[16px] md:leading-[22px] my-1 md:my-5">Document Requirements</p>
            <div className="w-full flex flex-col gap-1 md:gap-[10px]">
              {courseData?.program === 'undergraduate' && courseData?.required_documents?.undergraduate?.map((doc: string, index: number) => (
                <p key={index} className='font-medium text-[12px] md:text-sm leading-[16px] md:leading-[22px] uppercase'>{doc.split('_').join(' ')}</p>
              ))}
              {courseData?.program === 'graduate' && courseData?.required_documents?.undergraduate?.map((doc: string, index: number) => (
                <p key={index} className='font-medium text-[12px] md:text-sm leading-[16px] md:leading-[22px] uppercase'>{doc.split('_').join(' ')}</p>
              ))}
              {courseData?.program === 'postgraduate' && courseData?.required_documents?.undergraduate?.map((doc: string, index: number) => (
                <p key={index} className='font-medium text-[12px] md:text-sm leading-[16px] md:leading-[22px] uppercase'>{doc.split('_').join(' ')}</p>
              ))}
            </div>
          </div>
          <hr className="w-full h-[1px] bg-[#DADAE7] my-5" />
          <div className=" w-full flex tab:justify-center justify-end mt-[30px]">
            <div
              onClick={async () => {
                await close();
                navigate(`/schools/${courseData?.id}/apply`);
              }}
              className="w-full md:w-[119px] h-[48px] md:h-[60px] bg-primary text-white rounded-[4px] flex items-center justify-center gap-[17px] cursor-pointer"
            >
              <p className="text-center">Apply </p>
              <FiChevronRight />
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
};

export default ApplySchool;
