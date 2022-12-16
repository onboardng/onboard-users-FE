import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import { useHttpRequest } from "../../hooks/useHttpRequest";
import { countryCodes } from "../../utils/selectOptions";
import { Envelope, Upload } from '../../assets/icons'
import { FiChevronRight } from 'react-icons/fi';
import PageLoader from "../Loader/PageLoader";
import { RootState } from "../../redux/store";
import { Course } from '../../interfaces'
import Spinner from "../Loader/Spinner";
import Button from "../Button/Button";

interface DocObj {
  name: string
  file: File
}

const initialState = { first_name: '', last_name: '', email: '', phone_number: '', phone_code: '' }
const baseUrl = process.env.REACT_APP_BACKEND_API as string

const ApplySchoolCom:React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, authorization: { access_token } } = useSelector((store: RootState) => store.authStore)
  const [course, setCourse] = useState<Course | undefined>(undefined)
  const {error, loading, sendRequest} = useHttpRequest()
  const [inputs, formState] = useState<typeof initialState>(initialState)
  const { email, first_name, last_name, phone_code, phone_number } = inputs
  const [total, setTotal] = useState<number>(0)

  const [required_documents, setRequiredDocuments] = useState<Array<DocObj>>([])

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    formState({...inputs, [e.target.name]: e.target.value})
  }

  const onAddFile = (e: ChangeEvent<HTMLInputElement>) => {
    if(!e.target.files) return
    const file = e.target.files[0]
    if(file.type !== 'application/pdf') return toast.error('Wrong file type. Please upload a PDF file.')
    setRequiredDocuments(current => [...current, {name: e.target.name, file: file}])
  }

  const handleSubmit = async(e: FormEvent) => {
    e.preventDefault()

    if(!first_name || !last_name || !email || !phone_number) return toast.error('Please fill all fields.')

    const headers = { 'Authorization': `Bearer ${access_token}`}
    const formData = new FormData()

    formData.append('first_name', first_name)
    formData.append('last_name', last_name)
    formData.append('email', email)
    formData.append('phone_number', `${phone_code}-${phone_number}`)
    for(let i = 0; i < required_documents.length; i++) {
      formData.append(`${required_documents[i].name}`, required_documents[i].file)
    }

    try {
      const data = await sendRequest(`${baseUrl}/application/create`, 'POST', formData, headers)
      if(!data || data === undefined) return
      console.log(data)
    } catch (error) {}
  }

  const getCourse = async(id: string) => {
    const headers = { 'Content-Type': 'application/json' }
    try {
      const data = await sendRequest(`${baseUrl}/course/one/${id}`, 'GET', null, headers)
      if(!data || data === undefined) return
      setCourse(data?.data)
    } catch (error) {}
  }

  useEffect(() => {
    id && getCourse(id)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  useEffect(() => {
    if(course?.tuition && course?.service_charge) {
      let totalCost = course?.tuition + course?.service_charge
      setTotal(totalCost)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[total])

  useEffect(() => {
    error && toast.error(`${error}`)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className="mx-4 md:mx-12 flex flex-col md:flex-row py-5 ">
      {loading && <PageLoader />}
      <div className="md:w-[70%] bg-white rounded-[20px]">
        <div className="md:px-10 px-5">
          <div className="flex items-center border-dashed border-b-2 border-[#DADAE7] md:py-5 py-2.5">
            <p className="px-3 font-medium text-[14px] leading-[22.4px] md:font-bold md:text-[16px] md:leading-[25.6px] capitalize">
              {course?.program_name} studies in {course?.name} <span className="md:font-medium capitalize">at</span> {course?.university_name}
            </p>
          </div>
          <form onSubmit={handleSubmit} className="py-2.5 md:py-6">
            <h5 className="font-medium text-[16px] leading-[25.6px] md:text-[20px] md:leading-[32px]">Tell us a little about you</h5>
            <div className="py-5">
              <div className="w-full flex xl:flex-row flex-col gap-5">
                <div className='w-full'>
                  <label htmlFor={first_name}>First Name</label>
                  <div className="w-full h-[62px] flex items-center gap-4 bg-white border-2 border-[#DADAE7] focus-within:border-primary rounded-lg pl-[15px]">
                    <input type="text" name='first_name' onChange={handleChange} className='w-full h-full bg-transparent outline-none border-none text-sm' placeholder="Enter first name" />
                  </div>
                </div>
                <div className='w-full'>
                  <label htmlFor={last_name}>Last Name</label>
                  <div className="w-full h-[62px]  flex items-center gap-4 bg-white border-2 border-[#DADAE7] focus-within:border-primary rounded-lg pl-[15px]">
                    <input type="text" name='last_name' onChange={handleChange}  className='w-full h-full bg-transparent outline-none border-none text-sm' placeholder="Enter last name" />
                  </div>
                </div>
              </div>
              <div className="w-full mt-[18px]">
                <div className="py-2 flex flex-col w-full xl:w-full md:w-[408px]">
                  <label htmlFor={phone_number}>Phone Number</label>
                  <div className="w-full flex items-center">
                    <div className="mr-[10px] w-[30%] md:w-[15%]">
                      <div className="h-[62px] text-center bg-[#DADAE7] rounded-lg px-2">
                        <select name="phone_code" value={phone_code}  onChange={handleChange}  className='w-full h-full bg-transparent outline-none border-none text-sm cursor-pointer'>
                          {countryCodes.sort((a, b) => a.value.localeCompare(b.value)).map((code, index) => (
                            <option key={index}value={code.value}>{code.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="w-full h-[62px]  flex items-center gap-4 bg-white border-2 border-[#DADAE7] focus-within:border-primary rounded-lg pl-[15px]">
                      <input type="text" name='phone_number' onChange={handleChange} className='w-full h-full bg-transparent outline-none border-none text-sm' />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-4 mt-[18px]">
                  <input type="checkbox" className="h-[20px] w-[20px] bg-[#DADAE7] checked:bg-primary rounded-[6px] cursor-pointer" />
                  <label htmlFor="" className='font-medium text-[14px] leading-[22.4px]'>Receive text alerts about this trip. Message and data rates may apply.</label>
                </div>
                <div>
                  <p className="font-medium text-[14px] leading-[22.4px] text-[#8B8BA4] py-4">
                    Please enter the email address where you would like to receive your confirmation.
                  </p>
                  <div>
                    <label htmlFor={email}>Email</label>
                    <div className="w-full h-[62px] flex items-center gap-4 bg-white border-2 border-[#DADAE7] focus-within:border-primary rounded-lg pl-[15px]">
                      <Envelope />
                      <input type="email" name='email' onChange={handleChange} className='w-full h-full bg-transparent outline-none border-none text-sm' placeholder='Enter email address' />
                    </div>
                  </div>
                  <div className='my-4'>
                    <p className='font-medium text-lg leading-[32px]'>Required Documents</p>
                    {course?.required_documents && course?.required_documents?.undergraduate?.map((doc, index) => (
                      <div key={index} className='my-1'>
                        <label htmlFor={doc} className='capitalize text-base'>{doc.split('_').join(' ')}</label>
                        <div className="w-full h-[62px] flex items-center gap-4 bg-white border-2 border-[#DADAE7] focus-within:border-primary rounded-lg pl-[15px]">
                          <Upload />
                          <input type="file" name={doc} multiple={false} onChange={onAddFile} className='w-full bg-transparent outline-none border-none text-sm cursor-pointer' />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="py-3 flex justify-end tab:hidden">
                    <Button loader={loading} disabled={loading} className="col-span-2 justify-center bg-green text-white flex gap-4 rounded-md items-center px-[20px] py-[17px] md:w-auto">
                      <p className="text-center">Proceed</p>
                      <FiChevronRight className='text-white' />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="py-10 flex justify-end md:hidden">
        <button disabled={loading} className="col-span-2 justify-center bg-green text-white flex gap-4 rounded-md items-center px-[20px] py-[17px] md:w-auto">
          {loading ? <Spinner/> : <div className='flex items-center gap-3'>Proceed <FiChevronRight className='text-white' /></div>}
        </button>
      </div>
      <div className="md:w-[30%] tab:hidden pl-5">
        <div className="bg-white rounded-[10px] px-5 py-10">
          <h5 className="md:text-[20px] md:leading-[32px]">{user.first_name}, {user.last_name}</h5>
          <div className="py-3">
            <h5 className="font-medium text-[14px] leading-[22.4px]">School</h5>
            <p className="md:text-[20px] md:leading-[32px] capitalize">{course?.university_name}</p>
          </div>
          <div className="py-3">
            <h5 className="font-medium text-[14px] leading-[22.4px]">Course</h5>
            <p className="md:text-[20px] md:leading-[32px] capitalize">{course?.name}</p>
          </div>
          <div className="py-3">
            <h5 className="font-medium text-[14px] leading-[22.4px]">Admission closes on</h5>
            <p className="md:text-[20px] md:leading-[32px]">
              {course?.application_closing && new Date(course?.application_closing).toDateString()}
            </p>
          </div>
        </div>
        <div className="bg-white rounded-[10px] px-5 my-10 py-10">
          <h5 className="md:text-[20px] md:leading-[32px]">Pricing</h5>
          <div className="flex justify-between border-dashed border-b-[1px] border-[#DADAE7] py-5">
            <p className="md:text-[16px] md:leading-[25.6px]">Tuition</p>
            <p className="md:text-[16px] md:leading-[25.6px]">{course?.currency}{' '}{course?.tuition}</p>
          </div>
          <div className="flex justify-between border-dashed border-b-[1px] border-[#DADAE7] py-5">
            <p className="md:text-[16px] md:leading-[25.6px]">Service charge</p>
            <p className="md:text-[16px] md:leading-[25.6px]">{course?.currency}{' '}{course?.service_charge || 0}</p>
          </div>
          <div className="flex justify-between items-center py-5">
            <p className="md:text-[16px] md:leading-[25.6px]">Total</p>
            <p className="md:text-[20px] md:leading-[32px] font-semibold">{course?.currency}{' '}{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplySchoolCom;
