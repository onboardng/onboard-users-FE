import React, { ChangeEvent, FormEvent, MouseEvent, useEffect, useState } from "react"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { toast } from "react-toastify"
import { FiChevronRight } from "react-icons/fi"

import { Calendar, ClockAlt, Copy, Envelope, GraduationCap, Lock, MoneyBill } from '../../../assets/icons'
import { useHttpRequest } from "../../../hooks/useHttpRequest"
import PageLoader from "../../../components/Loader/PageLoader"
import { ApplicationDetails } from "../../../interfaces"
import Footer from "../../../components/school/Footer"
import Navbar from "../../../components/school/Navbar"
import { RootState } from "../../../redux/store"

const baseUrl = process.env.REACT_APP_BACKEND_API
const initialState = { email: '', password: '', confirm_password: '' }

const ApplicationSuccessful = () => {
  const [applicationDetails, setApplicationDetails] = useState<ApplicationDetails | null>(null)
  const { authorization: { access_token } } = useSelector((store: RootState) => store.authStore)
  const [inputs, setInputs] = useState<typeof initialState>(initialState)
  const {error, loading, sendRequest} = useHttpRequest()
  const {confirm_password, email, password} = inputs
  const [searchParams] = useSearchParams()
  const trxref = searchParams.get('trxref')
  const reference = searchParams.get('reference')
  const navigate = useNavigate()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({...inputs, [e.target.name]: e.target.value})
  }

  const handleSubmit = async(e: FormEvent) => {
    e.preventDefault()

    const headers = { 'Content-Type': 'application/json' }
    if(!email) return toast.error('Please enter a valid email.')
    if(!password) return toast.error('Please enter a valid password.')
    if(password !== confirm_password) return toast.error('Passwords do not match.')
    const payload = { email, password }
    try {
      const data = await sendRequest(`${baseUrl}/`, 'POST', JSON.stringify(payload), headers)
      if(!data || data === undefined) return
      console.log(data)
    } catch (error) {}
    navigate('/')
  }

  const getApplicationDetails = async(trxref: string, reference: string) => {
    const headers = {
      'Authorization': `Bearer ${access_token}`,
      'Content-Type': 'application/json'
    }
    try {
      const data = await sendRequest(`${baseUrl}/paystack-payment/edu-application/confirm?trxref=${trxref}&reference=${reference}`, 'GET', null, headers)
      if(!data || data === undefined) return
      const { message } = data
      toast.success(`${message}`)
      console.log(data?.data)
      setApplicationDetails(data?.data)
    } catch (error) {}
  }

  const copy = (e: MouseEvent<HTMLDivElement>, key: string) => {
    e.preventDefault()
    navigator.clipboard.writeText(key)
    toast.success('Booking ID copied!')
  }
  
  useEffect(() => {
    trxref && reference && getApplicationDetails(trxref, reference)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[trxref, reference])

  useEffect(() => {
    error && toast.error(`${error}`)
  },[error])

  if(loading) return <PageLoader />

  return (
    <div className='w-full flex flex-col bg-[#F7F7F7]'>
      <Navbar />
      <div className='w-full flex items-center gap-[100px] pl-[137px] mb-[324px]'>
        <div className="w-[691px] mt-[35px]">
          {applicationDetails && (
            <div className="w-[691px] flex flex-col rounded-[20px] bg-white pb-[29px] px-[32px]">
              <div className="w-full h-[253px] flex flex-col rounded-t-[20px] mb-[22px]">
                <img src={applicationDetails?.schoolApplied?.pictures[0]} alt={applicationDetails?.schoolApplied?.name} className="w-full h-full object-cover rounded-t-[20px]"/>
              </div>
              <div className="w-full flex flex-col items-center text=-center">
                <p className="font-normal text-sm leading-[26px]">Booking ID</p>
                <div onClick={(e) => copy(e, applicationDetails?.completedTransaction?.booking_id)} title='Click to copy Booking ID' className="flex items-center gap-[22.25px] cursor-pointer">
                  <p className="font-bold text-[28px] leading-[39px] uppercase">{applicationDetails?.completedTransaction?.booking_id}</p>
                  <p className="flex items-center gap-[13px] font-medium text-base text-primary leading-[22px]"><Copy /> Copy</p>
                </div>
                <p className="w-[411px] font-normal text-sm text-[#8B8BA4] text-center leading-[26px] mt-5 mb-3">An Email and a Text message has been sent to you containing your booking ID</p>
                <p className="font-medium text-xl leading-[26px] capitalize">{applicationDetails?.finalApplication?.school_name}</p>
                <div className="flex items-baseline gap-[13px]">
                  <GraduationCap />
                  <p className='font-normal text-sm text-[#8B8BA4] leading-[26px] mt-[10px] mb-5 capitalize'>
                    {applicationDetails?.finalApplication?.program_name} in {applicationDetails?.finalApplication?.course_name}
                  </p>
                </div>
                <div className="w-full flex flex-wrap items-center gap-5">
                  <div className="w-[45%] flex items-center gap-3">
                    <ClockAlt /> <p className="font-medium text-sm leading-[26px]">Course Duration: {applicationDetails?.programType?.duration} years</p>
                  </div>
                  <div className="w-[45%] flex items-center gap-3">
                    <Calendar /> <p className="font-medium text-sm leading-[26px]">Application Open: {new Date(applicationDetails?.dietApplied?.application_opening).toLocaleDateString()}</p>
                  </div>
                  <div className="w-[45%] flex items-center gap-3">
                    <Calendar /> <p className="font-medium text-sm leading-[26px]">Application Closes: {new Date(applicationDetails?.dietApplied?.application_closing).toLocaleDateString()}</p>
                  </div>
                  <div className="w-[45%] flex items-center gap-3">
                    <MoneyBill /> <p className="font-medium text-sm leading-[26px]">
                      Estimated Tuition: {applicationDetails?.schoolApplied?.currency} {applicationDetails?.finalApplication?.course_tuition}
                    </p>
                  </div>
                  <div className="w-[45%] flex items-center gap-3">
                    <MoneyBill /> <p className="font-medium text-sm leading-[26px]">Service Fee: ₦{' '}{applicationDetails?.finalApplication?.service_charge}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="w-[473px] flex flex-col mt-[50px] pr-[20px]">
          <div className="w flex flex-col bg-white py-5 px-[30px] rounded-[20px]">
            <p className="font-bold text-sm leading-[26px]">Create Account</p>
            <p className="font-medium text-xs text-[#8B8BA4] leading-4 mt-[7px] mb-5">Create Account to have an history of all you do on Onboard</p>
            <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
              <div className="flex flex-col">
                <label htmlFor="email">Email Address</label>
                <div className="w-full h-[60px] flex items-center gap-[15px] border-2 border-[@DADAE7] focus-within:border-primary rounded-[4px] px-[15px]">
                  <Envelope />
                  <input type="email" name="email" onChange={handleChange} className="w-full h-full outline-none border-none" />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="password">Enter Password</label>
                <div className="w-full h-[60px] flex items-center gap-[15px] border-2 border-[@DADAE7] focus-within:border-primary rounded-[4px] px-[15px]">
                  <Lock />
                  <input type="password" name="password" onChange={handleChange} className="w-full h-full outline-none border-none" />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="confirm_password">Confirm Password</label>
                <div className="w-full h-[60px] flex items-center gap-[15px] border-2 border-[@DADAE7] focus-within:border-primary rounded-[4px] px-[15px]">
                  <Lock />
                  <input type="password" name="confirm_password" onChange={handleChange} className="w-full h-full outline-none border-none" />
                </div>
              </div>
              <div className="w-full flex items-center justify-end">
                <button type="submit" className="w-[199px] h-[60px] flex items-center justify-center gap-4 bg-primary text-white rounded-[4px]">
                  Create Account <FiChevronRight />
                </button>
              </div>
            </form>
          </div>
          <div className="w-full mt-[30px]">
            <p className="font-medium text-sm leading-[26px]">Not interested?</p>
            <Link to='/' className="w-full h-[60px] flex items-center justify-center gap-4 bg-primary text-white rounded-[4px]">
              Go Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ApplicationSuccessful