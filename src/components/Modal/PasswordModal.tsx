import React, { ChangeEvent, FormEvent, MouseEvent, useEffect, useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import { useHttpRequest } from '../../hooks/useHttpRequest'
import Spinner from '../../assets/icons/Spinner'
import { RootState } from '../../redux/store'
import Backdrop from '../Shared/Backdrop'
import Lock from '../../assets/icons/Lock'

const baseUrl = process.env.REACT_APP_BACKEND_API as string
const initialState = { oldPassword: '', newPassword: '', confirmPassword: ''}
const initialVisible = { first: false, second: false, third: false }

interface Props {
    onClose: () => void
}

const PasswordModal:React.FC<Props> = ({onClose}) => {
    const [inputs, setInputs] = useState<typeof initialState>(initialState)
    const [isVisible, setIsVisible] = useState<typeof initialVisible>(initialVisible)
    const {error, loading, sendRequest} = useHttpRequest()
    const {authorization: {access_token}} = useSelector((store: RootState) => store.authStore)
    const {confirmPassword, newPassword, oldPassword} = inputs

    const handleSwitch = (name: string) => {
        setIsVisible({...initialVisible, [name]: (current:boolean) => !current})
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputs({...inputs, [e.target.name]: e.target.value})
    }

    const handleSubmit = async(e: FormEvent) => {
        e.preventDefault()
        if(!oldPassword) return toast.error('Please enter your old password.')
        if(!newPassword) return toast.error('Please enter a new password.')
        if(newPassword !== confirmPassword) return toast.error('Password do not match.')
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${access_token}`
        }
        const payload = {newPassword, oldPassword}
        try {
            const data  = await sendRequest(`|${baseUrl}/auth/pass/change`, 'PATCH', JSON.stringify(payload), headers)
            if(!data || data === undefined) return
            const { message } = data
            toast.success(`${message}`)
        } catch (error) {}
    }

    useEffect(() => {
        error && toast.error(`${error}`)
    },[error])

  return (
    <Backdrop onClick={() => onClose()}>
        <div onClick={(e: MouseEvent) => e.stopPropagation()} className='w-[473px] max-w-[90%] flex flex-col bg-white rounded-[20px]'>
            <div className='w-full h-[62px] bg-[#E7FAFF] flex items-center rounded-t-[20px] mb-5 px-[30px]'>
                <p className='font-medium text-base leading-[22px]'>Update Password</p>
            </div>
            <form onSubmit={handleSubmit} className='w-full px-[30px]'>
                <div className='mb-5'>
                    <label htmlFor='oldPassword' className='font-normal text-base leading-[22px]'>Enter old password</label>
                    <div className='w-full h-[60px] flex items-center gap-4 border focus-within:border-primary rounded-[4px] px-4'>
                        <Lock />
                        <input type={isVisible.first ? 'text':'password'} name='oldPassword' onChange={handleChange} className='w-full h-full outline-none border-none' />
                        <div onClick={() => handleSwitch('first')} className='cursor-pointer'>
                            {isVisible.first ? <FiEye /> : <FiEyeOff />}
                        </div>
                    </div>
                </div>
                <div className='mb-5'>
                    <label htmlFor='newPassword' className='font-normal text-base leading-[22px]'>Enter password</label>
                    <div className='w-full h-[60px] flex items-center gap-4 border focus-within:border-primary rounded-[4px] px-4'>
                        <Lock />
                        <input type={isVisible.second ? 'text':'password'} name='newPassword' onChange={handleChange} className='w-full h-full outline-none border-none' />
                        <div onClick={() => handleSwitch('second')} className='cursor-pointer'>
                            {isVisible.second ? <FiEye /> : <FiEyeOff />}
                        </div>
                    </div>
                </div>
                <div className='mb-5'>
                    <label htmlFor='confirmPassword' className='font-normal text-base leading-[22px]'>Confirm password</label>
                    <div className='w-full h-[60px] flex items-center gap-4 border focus-within:border-primary rounded-[4px] px-4'>
                        <Lock />
                        <input type={isVisible.third ? 'text':'password'} name='confirmPassword' onChange={handleChange} className='w-full h-full outline-none border-none' />
                        <div onClick={() => handleSwitch('third')} className='cursor-pointer'>
                            {isVisible.third ? <FiEye /> : <FiEyeOff />}
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-end mb-5'>
                    <button type='submit' className='w-[155px] h-[60px] bg-primary text-white flex items-center justify-center rounded-[4px]'>
                        {loading ? <Spinner /> : 'Save Changes'}
                    </button>
                </div>
            </form>
        </div>
    </Backdrop>
  )
}

export default PasswordModal