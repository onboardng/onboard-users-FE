import Icon from "../Icons";
import Modal from "../Modal/Modal";
import ModalClose from "../Modal/ModalClose";
import ApplySchool from "../school/PopUpContent/ApplySchool";
import dayjs from 'dayjs';
import { Course } from "../../interfaces";

const AdmissionsCard = ({course}: { course: Course }) => {
  return (
    <div className="my-5 bg-white relative rounded-[10px]">
      <div className="md:px-10 px-5 pt-5">
        <div className="flex w-full justify-between items-center border-b-[1px] pb-5">
          <div className="">
            <p className="text-[16px] leading-[25.6px] font-medium md:text-[20px] md:leading-[32px] capitalize">{course?.name}</p>
            <p className="md:text-[16px] md:leading-[25.6px] text-[14px] leading-[22.4px] text-[#8B8BA4]">Application closes on {dayjs(course?.application_closing).format("D MMM, YYYY")}</p>
          </div>
          <Modal
            trigger={
              <div className="tab:hidden col-span-2 justify-center cursor-pointer bg-green text-white flex gap-4 rounded-md items-center px-[20px] py-[17px] w-full md:w-auto">
                <p className="text-center">Apply Now</p>
                <Icon width={24} height={24} id="arrow-right-icon" />
              </div>
            }
          >
            {(close: () => void) => (
              <div>
                <ModalClose close={close} />
                <div className="p-[20px] md:p-[30px] w-[80vw] md:w-[50vw] max-h-[76vh] overflow-scroll">
                  <ApplySchool course={course} close={close} courseId={course.id} />
                </div>
              </div>
            )}
          </Modal>
        </div>
      </div>
      <p className="text-[14px] leading-[22.4px] text-[#8B8BA4] p-5 md:px-10">
        {course?.description}
      </p>
      <div className="py-3 px-5 md:hidden">
        <Modal
          trigger={
            <div className="col-span-2 cursor-pointer justify-center bg-green text-white flex gap-4 rounded-md items-center px-[20px] py-[17px] w-full md:w-auto">
              <p className="text-center">Apply Now</p>
              <Icon width={24} height={24} id="arrow-right-icon" />
            </div>
          }
        >
          {(close: () => void) => (
            <div>
              <ModalClose close={close} />
              <div className="p-[20px] md:p-[30px] w-[80vw] md:w-[50vw] max-h-[76vh] overflow-scroll">
                <ApplySchool course={course} close={close} courseId={course.id} />
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default AdmissionsCard;
