import React, { ChangeEvent, FormEvent, MouseEvent, useEffect, useState } from 'react';
import { IoChevronBack, IoChevronForward, IoTrash } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useFormInputs, useHttpRequest } from '../../hooks';
import PageLoader from '../../components/Loader/PageLoader';
import InputField from '../../components/Shared/InputField';
import Navbar from '../../components/school/Navbar';
import Footer from '../../components/school/Footer';
import { Envelope, Upload } from '../../assets/icons';

const initialState = {firstName: "", lastName: "", email: "", phone: "", course1: "", course2: "", course3: ""}
const url = process.env.REACT_APP_BACKEND_API

const DirectApply = () => {
  const [file, setFile] = useState<File | null>(null);
  const {handleChange, inputs} = useFormInputs(initialState);
  const {error, loading, sendRequest} =useHttpRequest();
  const navigate = useNavigate();

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if(!e.target.files) return
    const file = e.target.files[0];
    const {type, size} = file;
    if((size /1024/1024) > 5) return toast.error("Please select a file of less than 5MB");
    if(type === "application/pdf") {
      setFile(file);
    } else return toast.error("Only PDF files are allowed.");
  }

  const handleSubmit = async(e: FormEvent) => {
    e.preventDefault()
    // try {
    //   const data = await sendRequest(`${url}`, "POST")
    //   if(!data || data === undefined) return
    //   console.log(data)
    // } catch (error) {}
  };

  const click = () => document.getElementById("doc-input")?.click();

  const deleteFile = (e: MouseEvent<SVGElement>) => {
    e.stopPropagation()
    setFile(null);
  }

  useEffect(() => {
    error && toast.error(`${error}`)
  },[error])

  if(loading) return <PageLoader />

  return (
    <>
    <Navbar />
    <div className='w-full'>
      <div className='w-full flex md:hidden items-center bg-white pt-[54px] pb-[30px] px-[27px]'>
        <IoChevronBack onClick={() => navigate(-1)} />
      </div>
      <div className='w-full bg-[#F7F7F7] px-5 py-[62px] md:py-[30px]'>
        <div className='w-full hidden md:block my-[30px] font-medium'>
          <button onClick={() => navigate(-1)} className="flex items-center gap-5">
            <IoChevronBack />
            Back to school
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="w-full md:w-2/3 flex flex-col gap-5 bg-white rounded-[20px] py-5 px-[15px]">
            <p className='font-semibold text-[18px]'>Tell me more about yuorself</p>
            <InputField
              label='First Name'
              type='text'
              name='firstName'
              onChange={handleChange}
              placeholder='Name Here'
            />
            <InputField
              label='Last Name'
              type='text'
              name='lastName'
              onChange={handleChange}
              placeholder='Name Here'
            />
            <InputField
              label='Phone Number'
              type='text'
              name='phone'
              onChange={handleChange}
              placeholder='Phone Number Here'
            />
            <label htmlFor="agree" className='font-semibold'>
              <input type="checkbox" name="agree"  />
              Receive text alerts about this trip. Message and data rates may apply.
            </label>
            <p className='text-[12px] text-[#8B8BA4]'>
              Please enter the email address where you would like to receive your confirmation.
            </p>
            <InputField
              label='Email Address'
              type='email'
              name='email'
              onChange={handleChange}
              placeholder='Email Here'
              icon={<Envelope />}
            />
            <p className='font-semibold text-[18px]'>Course</p>
            <p className='font-medium text-[12px] text-[#8B8BA4]'>
              Tell us the courses you&apos;d like to study (min 1, max 3)
            </p>
            <InputField
              label='Course 1'
              type='text'
              name='course1'
              onChange={handleChange}
              placeholder='Course Name'
            />
            <InputField
              label='Course 2'
              type='text'
              name='course2'
              onChange={handleChange}
              placeholder='Course Name'
            />
            <InputField
              label='Course 3'
              type='text'
              name='course3'
              onChange={handleChange}
              placeholder='Course Name'
            />
            <p className='font-semibold text-[18px]'>Certificate</p>
            <p className='font-medium text-[12px] text-[#8B8BA4]'>Upload your school certificate</p>
            <div className='w-full h-[74px] flex items-center justify-center border border-primary rounded-[4px] px-[15px] py-[25px] cursor-pointer' onClick={() => click()}>
              <input type="file" id="doc-input" onChange={handleFileSelect} className="hidden" />
              <div className='w-full flex items-center gap-4'>
                <Upload />
                {file ? (
                  <div className="w-full flex items-center justify-between">
                    <p className='text-primary'>{file.name}</p>
                    <IoTrash onClick={deleteFile} className="hover:text-red-500" />
                  </div>
                ):(
                  <p className='text-primary'>Click here to upload or drag files here</p>
                )}
              </div>
            </div>
            <div className='w-full flex items-center justify-end mt-[30px]'>
              <button className='bg-primary text-white flex items-center justify-center md:justify-start gap-4 px-5 py-[17px] rounded-[4px] capitalize'>
                submit <IoChevronForward />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default DirectApply