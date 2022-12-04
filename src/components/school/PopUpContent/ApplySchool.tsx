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
  courseId: string | undefined
}

const baseUrl = "https://app.onboard.com.ng/onboard/v1"

const ApplySchool:React.FC<Props> = ({close, course, courseId}) => {
  const [courseData, setCourseData] = useState<Courses | null>(null)
  const {loading, sendRequest} = useHttpRequest()
  const navigate = useNavigate();

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
        className="w-screen h-[950px] bg-gray-300 bg-opacity-40 fixed top-0 left-0 grid place-items-center pop-up"
        onScroll={() => {}}
        onClick={() => close()}>
        <div onClick={(e: MouseEvent<HTMLElement>) => e.stopPropagation()} className="w-[800px] bg-white p-[30px] rounded-2xl modal-pop">
          <h4 className="font-medium text-xl leading-[38px] capitalize">{courseData?.name}</h4>
          <p className="first-letter:capitalize font-medium text-base text-[#8B8BA4] leading-[22px] my-5">{courseData?.description}</p>
          <hr className="w-full h-[1px] bg-[#DADAE7] mb-5" />
          <div className="w-full flex flex-col gap-[10px]">
            <div className="flex items-center gap-3">
              <ClockAlt />
              <div className="font-medium text-sm leading-[26px]">
                <>
                Course Duration: 
                </>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar />
              <div className="font-medium text-sm leading-[26px]">
                <>
                Application opens: {courseData?.application_opening && new Date(courseData?.application_opening).toDateString()}
                </>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar />
              <div className="font-medium text-sm leading-[26px]">
                <>
                Application closes: {courseData?.application_closing && new Date(courseData?.application_closing).toDateString()}
                </>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MoneyBill />
              <div className="font-medium text-sm leading-[26px]">
                <>
                Estimated Admission Fee: ${courseData?.tuition}
                </>
              </div>
            </div>
          </div>
          <hr className="w-full h-[1px] bg-[#DADAE7] my-5" />
          <div className=" w-full flex tab:justify-center justify-end mt-[30px]">
            <div
              onClick={async () => {
                await close();
                navigate(`/schools/${courseData?.id}/apply`);
              }}
              className="w-[119px] h-[60px] bg-primary text-white rounded-[4px] flex items-center justify-center gap-[17px]"
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
