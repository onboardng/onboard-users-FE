import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useViewApplicationMutation } from '../../../redux/services';
import Icon from '../../Icons'
import InputBox from '../../InputBox'
import Spinner from '../../Loader/Spinner';

const TrackingVerify = ({code, result, close}: {code?: string; result?: any; close?: Function}) => {
   const [ viewApplication, { isError, isSuccess, isLoading, data } ] = useViewApplicationMutation()
   const [ access_code, setCode ] = React.useState("");
   const navigate = useNavigate();

   const handleAccessCode = () => {
       if(access_code?.length > 0) {
            viewApplication({access_code, app_id: result?.[0]?.id})
       }
   }
   useEffect(() => {
     if(isSuccess){
        close && close()
        navigate("/booking/schools", { state: { applicationData: data } })
     }
   
     
   }, [isSuccess, data, navigate, close])
   
  return (
    <div className='w-full' >
        <div className={`${isError ? "bg-[#FFE1E1]" : "bg-[#E7FAFF]"} rounded-t-[12px] p-5`}>
            <p className="text-[14px] leading-[22px] font-medium text-black">Input code</p>
        </div>
        <div className='py-5 tab:px-5 md:mx-10 mb-10' >
            <p className='text-[14px] leading-[22.4px] font-medium py-3' >Input the code associated with <span className='font-bold' >{code}</span></p>
            <InputBox isError={isError} value={access_code} onChange={(e)=> setCode(e?.target?.value)} placeholder='Code here' label='Code' fullWidth={true} />
            {isError && <p className='text-[#DA000]' >Incorrect Code</p>}
        </div>
        <div className='py-3 mb-5 flex justify-end tab:px-5 md:mx-10' >
            <button disabled={isLoading} onClick={handleAccessCode} className="col-span-2 justify-center bg-green text-white flex gap-4 rounded-md items-center px-[20px] py-[15px] md:w-auto">
                {isLoading ? <Spinner/> : <><p className="text-center">Proceed</p>
                <Icon width={24} height={24} id="arrow-right-icon" /></>}
            </button>
        </div>
    </div>
  )
}

export default TrackingVerify