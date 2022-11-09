import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import carouselImage from "../../assets/Image Card.svg";
import { useLazySearchCourseInUniversityQuery } from "../../redux/services";
import { RootState } from "../../redux/store";
import { CourseData, UniversityData } from "../../utils/interfaces";
import Icon from "../Icons";
import InputBox from "../InputBox";
import PageLoader from "../Loader/PageLoader";
import Modal from "../Modal/Modal";
import Modal2 from "../Modal/Modal2";
import ModalClose from "../Modal/ModalClose";
import Pagination from "../Pagination/Pagination";
import PageModal from "../school/PageModal";
import AdmissionsCard from "./AdmissionsCard";
import RatingLarge from "./RatingLarge";
import ReviewComments from "./ReviewComments";
import WriteReview from "./WriteReview";

const ViewSchool = ({
  university,
  courses,
  reviews,
  id,
  isLoading,
  courseLoading,
  reviewLoading,
  page,
  setPage,
}: {
  university: UniversityData;
  courses: any;
  reviews: any;
  id: string;
  isLoading: boolean;
  courseLoading: boolean;
  reviewLoading: boolean;
  page: number;
  setPage: Function;
}) => {
  // const comments = ["1", "2", "3", "4", "5"];
  const { state } = useLocation();
  const [modal, setModal] = useState<boolean>(false);
  const [skip, setSkip] = useState(true);
  const [search, setSearch] = useState(state?.course_name || "");
  const [reviewModal, setReviewModal] = useState<boolean>(false);

  const {
    authorization: { access_token },
  } = useSelector((state: RootState) => state?.authStore);
  const [trigger, { data, isFetching }] = useLazySearchCourseInUniversityQuery();

  useEffect(() => {
    if (!(search.length > 0) && !skip) {
      setSkip((prev) => !prev);
    }
  }, [skip, search]);

  useEffect(() => {
    if (search.length > 0) {
      trigger({ search, id }).unwrap();
      if (skip) {
        setSkip(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e?.target?.value);
  };

  const handleKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13 && search.length > 0) {
      trigger({ search, id }).unwrap();
      if (skip) {
        setSkip(false);
      }
    }
  };

  return (
    <>
      <div className="mx-4 md:mx-12 flex flex-col md:flex-row py-5 overflow-hidden">
        <div className="md:w-5/12">
          <img src={university?.pictures?.[0] || carouselImage} alt="carousel" />
          <section className="tab:hidden py-10">
            <div className="bg-white">
              <div className="bg-[#E7FAFF] h-[62px] flex items-center justify-between">
                <p className="pl-10 font-medium text-[14px] leading-[22.4px] ">Ratings & Reviews</p>

                {access_token && (
                  <Modal
                    trigger={
                      <p className="pr-10 text-primary text-[10px] font-bold leading-[16px] cursor-pointer flex">
                        <span className="pr-2">
                          <Icon id="plus-icon" width={16} height={16} />
                        </span>{" "}
                        Write a Review / Rating
                      </p>
                    }
                    borderRadius={"20px"}
                  >
                    {(close: () => void) => (
                      <div>
                        <ModalClose close={close} />
                        <div className="tab:hidden w-[80vw] md:w-[50vw] max-h-[76vh] overflow-scroll">
                          <WriteReview id={id} close={close} />
                        </div>
                      </div>
                    )}
                  </Modal>
                )}
              </div>
              <p className="pb-2"></p>
              {reviewLoading ? (
                <PageLoader />
              ) : (
                reviews?.map((comment: any) => <ReviewComments comments={comment} key={comment?.id}></ReviewComments>)
              )}
              {reviews?.length < 1 && <p className="text-center py-5">No Reviews yet</p>}
            </div>
          </section>
        </div>
        <div className="md:pl-10 w-full md:w-7/12 tab:pt-5">
          {isLoading ? (
            <PageLoader />
          ) : (
            <div>
              <h1 className="text-[24px] leading-[38.4px] font-medium md:font-semibold md:text-[40px] md:leading-[56px]">{university?.name}</h1>
              <span className="flex">
                <RatingLarge rating={university?.ratings || 1} />
              </span>
              <p className="text-[#8B8BA4] text-[16px] leading-[25.6px] py-1">{university?.ratings || 0} ratings total</p>
              <p
                onClick={() => {
                  setModal(true);
                  document.body.style.overflow = "hidden";
                }}
                className="md:hidden text-primary text-[14px] leading-[22.4px] cursor-pointer py-1"
              >
                Tap to view ratings
              </p>
              <p className="flex items-center py-2 text-[16px] leading-[25.6px] font-medium md:text-[20px] md:leading-[32px]">
                <Icon id="location-pin-icon" width={24} height={24} />
                <span className="pl-2">{university?.country}</span>
              </p>
              <p className="text-[#8B8BA4] text-[14px] leading-[22.4px] font-medium py-1">{university?.description}</p>
            </div>
          )}
          <div className="md:pt-10 pt-2 relative">
            <div className="md:flex md:flex-row md:justify-between md:items-center">
              <h4 className="tab:text-left text-[24px] leading-[38.4px] font-medium">Admissions</h4>
              <div>
                <InputBox
                  keyDown={handleKeydown}
                  onChange={handleChange}
                  placeholder="Search here"
                  iconId="search-icon2"
                  height={24}
                  width={24}
                  isRounded
                />
              </div>
            </div>
            {courseLoading || isFetching ? (
              <PageLoader />
            ) : !skip ? (
              data?.data?.map((course: Partial<CourseData>, index: number) => <AdmissionsCard course={course} key={index} />)
            ) : (
              courses?.courses?.data?.map((course: Partial<CourseData>, index: number) => <AdmissionsCard course={course} key={index} />)
            )}
            {courses?.pagination && <Pagination totalCount={courses?.courses?.totalDocs} currentPage={page} onPageChange={setPage} pageSize={10} />}
          </div>
        </div>
      </div>
      {modal && (
        <PageModal setModal={setModal}>
          <div className="w-full py-10 h-full">
            <aside className="flex justify-between px-2 pb-3">
              <span
                className="cursor-pointer"
                onClick={() => {
                  setModal(false);
                  document.body.style.overflow = "auto";
                }}
              >
                <Icon id="arrow-left-icon" width={24} height={24} />
              </span>
              <p className="mx-auto">Reviews</p>
            </aside>
            <div className=" overflow-y-auto h-[85%] px-2">
              {reviewLoading ? (
                <PageLoader />
              ) : (
                reviews?.map((comment: any) => <ReviewComments comments={comment} key={comment?.id}></ReviewComments>)
              )}
            </div>
            <div className="px-5 py-10 shadow-[0px_-4px_20px_rgba(0,0,0,0.08)]">
              {access_token && (
                <button
                  onClick={() => {
                    setReviewModal(true);
                    setModal(false);
                  }}
                  className="col-span-2 justify-center bg-green text-white flex gap-4 rounded-md items-center px-[20px] py-[17px] w-full md:w-auto"
                >
                  <p className="text-center">Write a review</p>
                  <Icon width={24} height={24} id="arrow-right-icon" />
                </button>
              )}
            </div>
          </div>
        </PageModal>
      )}
      {reviewModal && (
        <Modal2 setModal={setReviewModal}>
          <div className="relative h-full bg-white rounded-t-[20px]">
            <ModalClose
              close={() => {
                setReviewModal(false);
                document.body.style.overflow = "auto";
              }}
            />
            <WriteReview id={id} setModal={setReviewModal} />
          </div>
        </Modal2>
      )}
    </>
  );
};

export default ViewSchool;
