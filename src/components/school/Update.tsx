import React, { useEffect } from "react";
import { useSearchApplicationMutation } from "../../redux/services";
import InputBox from "../InputBox";
import Spinner from "../Loader/Spinner";
import ModalBool from "../Modal/ModalBool";
import ModalClose from "../Modal/ModalClose";
import TrackingVerify from "./PopUpContent/TrackingVerify";

const Update = ({ imgSrc }: { imgSrc: string }) => {
  const [ modal, setModal ] = React.useState(false);
  const [ search, setSearch ] = React.useState("");
  const close = () => setModal(false)
  const [ result, setResult ] = React.useState<[]>([])
  const [searchApplication, {isLoading, isSuccess, reset, data}] = useSearchApplicationMutation()

  useEffect(() => {
    if(isSuccess){
      setModal(true)
      setResult(data?.data)
      reset()
    }
  
  }, [isSuccess, reset, data?.data])
  

  const handleSearch = () => {
    if(search.length > 0){searchApplication({tracking_id: search})}
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  mx-4 md:mx-12 space-x-0 md:items-start items-center bg-[#EDEDF2]" >
      <img src={imgSrc} alt="update" className="w-full h-auto" />
      <div className="bg-[#EDEDF2] w-full p-[20px] md:p-[50px]">
        <h4 className="text-[20px] md:text-[28px] w-[239px] md:w-auto font-medium md:leading-[39px]">Get the update on your booking.</h4>
        <p className="text-[16px] md:text-[20px] md:leading-[32px] mt-5 mb-12">Track your school admission to know it’s status</p>
        <div className="flex gap-5 flex-col xl:flex-row justify-center xl:justify-start xl:items-center">
          <InputBox value={search} onChange={(e)=> setSearch(e?.target?.value)} placeholder="Booking ID Here" iconId="booking-icon" height={24} width={24} isRounded />
          <button
            onClick={handleSearch}
            disabled={isLoading}
            className="col-span-2 justify-center bg-green text-white flex gap-4 rounded-md items-center px-[20px] py-[17px] w-full md:w-auto"
          >
            {isLoading ? <Spinner /> : <p className="text-center">Track Booking</p>}
          </button>
        </div>
      </div>
      <ModalBool open={modal} >
        <ModalClose close={close} />
        <div className="w-full max-h-[76vh]" >
          <TrackingVerify close={close} result={result} code={search} />
        </div>
      </ModalBool>
    </div>
  );
};

export default Update;
