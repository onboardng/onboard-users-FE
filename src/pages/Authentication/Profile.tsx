import React, { ChangeEvent, DragEvent, FormEvent, useEffect, useState } from 'react'
import { FiTrash, FiUploadCloud } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import PasswordModal from '../../components/Modal/PasswordModal'
import InputField from '../../components/Shared/InputField'
import { useHttpRequest } from '../../hooks/useHttpRequest'
import PageLoader from '../../components/Loader/PageLoader'
import Navbar from '../../components/school/Navbar'
import { RootState } from '../../redux/store'
import { User } from '../../interfaces'

const baseUrl = process.env.REACT_APP_BACKEND_API

const Profile:React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [previewURL, setPreviewURL] = useState<string | ArrayBuffer | null>(null)
    const [dragActive, setDragActive] = useState<boolean>(false)
    const [imageFile, setImageFile] = useState<File | null>(null)
    const [userProfile, setUserProfile] = useState<User | null>(null)
    const {error, loading, sendRequest} = useHttpRequest()
    const { authorization: { access_token } } = useSelector((store: RootState) => store.authStore)
    
    const getProfile = async() => {
        const headers = {
            'Authorization': `Bearer ${access_token}`,
            'Content-Type': 'application/json'
        }
        try {
            const data = await sendRequest(`${baseUrl}/auth/view-profile`, 'GET', null, headers)
            if(!data || data === undefined) return
            setUserProfile(data?.data)
        } catch (error) {}
    }
    
    const [first_name, setFirst_name] = useState<string>("")
    const [last_name, setLast_name] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [phone_number, setPhone_number] = useState<string>("")

    const setFields = () => {
        if(userProfile) {
            setFirst_name(userProfile?.first_name !== null ? userProfile?.first_name : "" )
            setLast_name(userProfile?.last_name !== null ? userProfile?.last_name : "" )
            setEmail(userProfile?.email !== null ? userProfile?.email : "")
            setPhone_number(userProfile?.phone_number !== null ? userProfile?.phone_number : "")
        }
    }

    useEffect(() => {
        setFields()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[userProfile])
    
    const updateProfile = async(e: FormEvent) => {
        e.preventDefault()

        const image = imageFile as unknown as string
        const formData = new FormData()
        formData.append('image', image)
        formData.append('first_name', first_name)
        formData.append('last_name', last_name)
        formData.append('email', email)
        formData.append('phone_number', phone_number)

        const headers = {
            'Authorization': `Bearer ${access_token}`
        }
        try {
            const data = await sendRequest(`${baseUrl}/auth/edit`, 'PATCH', formData, headers)
            if(data === undefined) return
            toast.success(`${data?.message}`)
        } catch (error) {}
        setPreviewURL(null)
        getProfile()
    }

    const handleFile = (file: File) => {
        if(!file) return
        const { type, size } = file
        if(type === 'image/png' || type === 'image/jpg' || type === 'image/jpeg') {
            if(size > 5120000) return toast.error('Please select an image below 5MB.')
            const fileReader = new FileReader()
            fileReader.onload = () => setPreviewURL(fileReader.result)
            fileReader.readAsDataURL(file)
        } else return toast.error("Wrong file type")
        setImageFile(file)
    }

    const handleDrag = (e: DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setDragActive(true)
    }

    const handleDrop = (e: DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setDragActive(false)

        if(!e.dataTransfer) return
        let file = e.dataTransfer.files[0]
        handleFile(file)
    }

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(!e.currentTarget.files) return
        let file = e.currentTarget.files[0]
        handleFile(file)
    }

    useEffect(() => {
        error && toast.error(`${error}`)
    },[error])

    useEffect(() => {
        getProfile()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    if(loading) return <PageLoader />

  return (
    <>
    {isOpen && <PasswordModal onClose={() => setIsOpen(false)} />}
    <Navbar />
    <div className='w-full h-full bg-[#F7F7F7] grid place-items-center'>
        <div className='w-[690px] min-w-[300px] mb-[125px]'>
            <p className='font-medium text-[20px] leading-8 mt-[51px] mb-[10px]'>Personal Info</p>
            <p className='font-medium text-[#8B8BA4] text-sm leading-[26px] mb-[41px]'>
                Update your photo and personal details here
            </p>

            <form onSubmit={updateProfile} className='w-full flex flex-col'>
                <div className='w-full flex items-center justify-between mb-[20px]'>
                    <InputField label='First Name' value={first_name} onChange={(e: ChangeEvent<HTMLInputElement>) => setFirst_name(e.target.value)} type='text' width='335px' />
                    <InputField label='Last Name' value={last_name} onChange={(e: ChangeEvent<HTMLInputElement>) => setLast_name(e.target.value)} type='text' width='335px' />
                </div>
                <hr className='w-full h-[1px] bg-[#DADAE7] my-[20px]' />
                <div className='w-full flex flex-col gap-[20px]'>
                    <InputField label='Email' value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} type='email' />
                    <InputField label='Phone' value={phone_number} onChange={(e: ChangeEvent<HTMLInputElement>) => setPhone_number(e.target.value)} type='text' />
                </div>
                <hr className='w-full h-[1px] bg-[#DADAE7] my-[20px]' />
                <div className='w-full flex'>
                    <div className='w-[50px] h-[50px] rounded-full overflow-hidden'>
                        <img src={userProfile?.avatar !== null ? userProfile?.avatar : "/svgs/Avatar.svg"} alt="" className='w-full h-full rounded-full object-cover' />
                    </div>
                    <div className='w-[576px] max-w-[80%] h-[324px] bg-white rounded-[4px] border-[1px] border-[#DADAE7] ml-2'>
                        {previewURL === null ? (
                            <label className='w-full h-full flex items-center justify-center relative overflow-hidden'>
                                {!dragActive && (
                                    <div className='flex flex-col items-center'>
                                    <div className='rounded-full bg-primary p-[10px]'>
                                        <FiUploadCloud fontSize={20} className='text-white rounded-full' />
                                    </div>
                                    <div className='flex items-center gap-[3px] font-medium text-base leading-[22px] mt-[17px]'>
                                        click to upload <p className='text-primary'>or drag and drop</p>
                                    </div>
                                    </div>
                                )}
                                {dragActive && <p className='font-medium text-base leading-[22px]'>Drop files here</p>}
                                <input
                                className='w-full h-[120%] absolute -top-9 left-0 image-upload'
                                type="file"
                                draggable
                                onChange={handleFileChange}
                                onDragEnter={handleDrag}
                                onDragLeave={handleDrop}
                                onDragOver={handleDrag}
                                onDrop={handleDrop}
                                />
                            </label>
                        ) : (
                            <div className='w-full h-full flex items-center justify-center relative'>
                                <button type='button' onClick={() => setPreviewURL(null)} className='rounded-full bg-white text-black p-3 absolute top-2 left-2'>
                                    <FiTrash />
                                </button>
                                <img src={`${previewURL}`} alt="" className='h-full object-contain border rounded-[4px]' />
                            </div>
                        )}
                    </div>
                </div>
                <button type='submit' className='w-[174px] h-[42px] bg-white border-[1px] border-primary rounded-[4px] text-primary mt-[30px]'>
                    Save
                </button>
            </form>
            <hr className='w-full h-[1px] bg-[#DADAE7] my-[20px]' />
            <div className='w-full flex flex-col'>
                <p className='font-medium text-[20px] leading-8'>Security</p>
                <p className='font-medium text-[#8B8BA4] text-sm leading-[26px] mt-[10px] mb-[20px]'>
                    Update your password here
                </p>
                <button onClick={() => setIsOpen(true)} className='w-[174px] h-[42px] bg-white border-[1px] border-primary rounded-[4px] text-primary'>
                    Update
                </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Profile