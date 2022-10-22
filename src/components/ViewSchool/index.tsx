import React, { useState } from "react";
import carouselImage from "../../assets/Image Card.svg";
import { UniversityData } from "../../utils/interfaces";
import Icon from "../Icons";
import Modal from "../Modal/Modal";
import Modal2 from "../Modal/Modal2";
import ModalClose from "../Modal/ModalClose";
import PageModal from "../school/PageModal";
import AdmissionsCard from "./AdmissionsCard";
import RatingLarge from "./RatingLarge";
import ReviewComments from "./ReviewComments";
import WriteReview from "./WriteReview";

const ViewSchool = ({ university }: { university: UniversityData }) => {
  const comments = ["1", "2", "3", "4", "5"];
  const [modal, setModal] = useState<boolean>(false);
  const [reviewModal, setReviewModal] = useState<boolean>(false);

  return (
    <>
      <div className="mx-4 md:mx-12 flex flex-col md:flex-row py-5 overflow-hidden">
        <div>
          <img src={university?.picture || carouselImage} alt="carousel" />
          <section className="tab:hidden py-10">
            <div className="bg-white">
              <div className="bg-[#E7FAFF] h-[62px] flex items-center justify-between">
                <p className="pl-10 font-medium text-[14px] leading-[22.4px] ">Ratings & Reviews</p>

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
                        <WriteReview close={close} />
                      </div>
                    </div>
                  )}
                </Modal>
              </div>
              <p className="pb-2"></p>
              {comments.map((comment) => (
                <ReviewComments comments={comments} key={comment}></ReviewComments>
              ))}
            </div>
          </section>
        </div>
        <div className="md:pl-10 w-full tab:pt-5">
          <div>
            <h1 className="text-[24px] leading-[38.4px] font-medium md:font-semibold md:text-[40px] md:leading-[56px]">{university?.name}</h1>
            <span className="flex">
              {comments.map((comment) => (
                <RatingLarge key={comment} />
              ))}
            </span>
            <p className="text-[#8B8BA4] text-[16px] leading-[25.6px] py-1">{university.ratings} ratings total</p>
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
            <p className="text-[#8B8BA4] text-[14px] leading-[22.4px] font-medium py-1">{university.description}</p>
          </div>
          <div className="md:pt-10 pt-2 relative">
            <h4 className="text-[24px] leading-[38.4px] font-medium">Admissions</h4>
            {comments.map((comment) => (
              <AdmissionsCard key={comment} />
            ))}
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
              {comments.map((comment) => (
                <ReviewComments comments={comments} key={comment}></ReviewComments>
              ))}
            </div>
            <div className="px-5 py-10 shadow-[0px_-4px_20px_rgba(0,0,0,0.08)]">
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
            <WriteReview setModal={setReviewModal} />
          </div>
        </Modal2>
      )}
    </>
  );
};

export default ViewSchool;
