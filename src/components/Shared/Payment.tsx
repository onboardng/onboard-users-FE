import React, { MouseEvent, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'

import { useHttpRequest } from '../../hooks/useHttpRequest'
import { RootState } from '../../redux/store'
import { Payment } from '../../interfaces'
import Spinner from '../Loader/Spinner'
import Backdrop from './Backdrop'
import paystack from '../../assets/images/paystack.svg'

const baseUrl = process.env.REACT_APP_BACKEND_API
// const public_key = process.env.REACT_APP_PUBLIC_KEY as string

const PaymentModal:React.FC<Payment> = ({application_id, email, phone_number, service_charge, onClose}) => {
  const {error, loading, sendRequest} = useHttpRequest()
  const { authorization: { access_token } } = useSelector((store: RootState) => store.authStore)

  const handlePayment = async() => {
    const headers = {
      'Authorization': `Bearer ${access_token}`,
      'Content-Type': 'appllication/json'
    }
    const payload = {application_id, email, phone_number, service_charge}
    console.log(payload)
    try {
      const data = await sendRequest(`${baseUrl}/flw-payment/edu-application/initiate`, 'POST', JSON.stringify(payload), headers)
      if(!data || data === undefined) return
      console.log(data)
      const { message } = data
      toast.success(`${message}`)
    } catch (error) {}
  }

  useEffect(() => {
    error && toast.error(`${error}`)
  },[error])

  return (
    <Backdrop onClick={() => onClose()}>
      <div onClick={(e: MouseEvent) => e.stopPropagation()} className='w-[500px] max-w-[80%] h-[500px] flex flex-col items-center bg-white rounded-[80px] border border-primary pt-[185px]'>
        <img src={paystack} alt="" className='w-[100px]' />
        <button onClick={() => handlePayment()} className='min-w-[200px] h-[60px] flex items-center justify-center bg-primary text-white rounded-[4px] mt-6'>
          {loading ? <Spinner /> :'Proceed to Payment'}
        </button>
      </div>
    </Backdrop>
  )
}

export default PaymentModal