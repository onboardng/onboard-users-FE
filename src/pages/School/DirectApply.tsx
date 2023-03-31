import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { IoChevronBack, IoChevronForward, IoTrash } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useFormInputs, useHttpRequest } from '../../hooks';
import PageLoader from '../../components/Loader/PageLoader';
import InputField from '../../components/Shared/InputField';
import { Envelope, Upload } from '../../assets/icons';
import Navbar from '../../components/school/Navbar';
import Footer from '../../components/school/Footer';

const initialState = {first_name: "", last_name: "", email: "", phone_number: "", course0: "", course1: "", course2: ""}
const url = process.env.REACT_APP_BACKEND_API

const DirectApply = () => {
  const {handleChange, inputs} = useFormInputs(initialState);
  const {error, loading, sendRequest} =useHttpRequest();
  const [files, setFiles] = useState<Array<File>>([]);
  const [response, setResponse] = useState(null);
  const navigate = useNavigate();

  const {first_name, last_name, email, phone_number, course0, course1, course2} = inputs
  const courses:Array<string> = []

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if(!e.target.files) return
    const file = e.target.files[0];
    const {type, size} = file;
    if((size /1024/1024) > 5) return toast.error("Please select a file of less than 5MB");
    if(type === "application/pdf") {
      setFiles(current => [...current, file]);
    } else return toast.error("Only PDF files are allowed.");
  };

  const handleSubmit = async(e: FormEvent) => {
    e.preventDefault()
    courses.push(course0)
    courses.push(course1)
    courses.push(course2)
    const formData = new FormData()
    formData.append("first_name", first_name)
    formData.append("last_name", last_name)
    formData.append("email", email)
    formData.append("phone_number", phone_number)
    for(let i = 0; i < courses?.length; i++) {
      formData.append(`courses[${i}]`, courses[i])
    }
    for(let i = 0; i < files.length; i++) {
      formData.append("certificate", files[i], files[i].name)
    }
    try {
      const data = await sendRequest(`${url}/apply-now/create`, "POST", formData);
      if(!data || data === undefined) return
      const {message} = data
      setResponse(data);
      toast.success(`${message}`)
    } catch (error) {}
    setFiles([])
  };

  const click = () => document.getElementById("doc-input")?.click();

  const deleteFile = (value: number) => {
    setFiles(current => current.filter((_, index) => index !== value))
  };

  useEffect(() => {
    error && toast.error(`${error}`)
  },[error]);

  if(loading) return <PageLoader />

  return (
    <>
    {response && (
      <div className="w-screen h-screen bg-black/40 grid place-items-center fixed top-0 left-0 !z-[1000]">
        <div className='w-[90%] md:w-[500px] h-[322px] bg-white rounded-[20px]'>
          <div className='w-full h-[62px] bg-primary rounded-t-[20px] flex items-center justify-center font-medium'>
            Response Successful
          </div>
          <div className='flex flex-col items-center justify-center py-4'>
            <p className='font-medium mb-[84px]'>
              Your request has been successfully placed. <br />
              Our representative will reach out to you.
            </p>
            <Link to='/' className='bg-primary text-white py-[17px] px-[150px] rounded-[4px]'>
              Okay
            </Link>
          </div>
        </div>
      </div>
    )}
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
            <p className='font-semibold text-[18px]'>Tell me more about you</p>
            <InputField
              label='First Name'
              type='text'
              name='first_name'
              onChange={handleChange}
              placeholder='Name Here'
            />
            <InputField
              label='Last Name'
              type='text'
              name='last_name'
              onChange={handleChange}
              placeholder='Name Here'
            />
            <InputField
              label='Phone Number'
              type='text'
              name='phone_number'
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
            <hr className="mt-10 mb-5 border border-[#DADAE7]" />
            <p className='font-semibold text-[18px]'>Course</p>
            <p className='font-medium text-[12px] text-[#8B8BA4]'>
              Tell us the courses you&apos;d like to study (min 1, max 3)
            </p>
            <InputField
              label='Course 1'
              type='text'
              name='course0'
              onChange={handleChange}
              placeholder='Course Name'
            />
            <InputField
              label='Course 2'
              type='text'
              name='course1'
              onChange={handleChange}
              placeholder='Course Name'
            />
            <InputField
              label='Course 3'
              type='text'
              name='course2'
              onChange={handleChange}
              placeholder='Course Name'
            />
            <hr className="mt-10 mb-5 border border-[#DADAE7]" />
            <p className='font-semibold text-[18px]'>Certificate</p>
            <p className='font-medium text-[12px] text-[#8B8BA4]'>Upload your school certificate</p>
            {files && files.map((file, index) => (
              <div key={index} className="w-full flex items-center justify-between">
                <p className='text-primary'>{file?.name}</p>
                <IoTrash onClick={() => deleteFile(index)} className="text-lg hover:text-red-500 cursor-pointer" />
              </div>
            ))}
            <div className='w-full h-[74px] flex items-center justify-center border border-primary rounded-[4px] px-[15px] py-[25px] cursor-pointer' onClick={() => click()}>
              <input type="file" id="doc-input" onChange={handleFileSelect} className="hidden" />
              <div className='w-full flex items-center gap-4'>
                <Upload /> <p className='text-primary'>Click here to upload or drag files here</p>
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