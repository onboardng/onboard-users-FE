import React, { ChangeEvent, FormEvent, MouseEvent, useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import { useHttpRequest } from '../../hooks/useHttpRequest'
import CustomRating from '../Shared/CustomRating'
import { RootState } from '../../redux/store'
import Spinner from '../Loader/Spinner'

interface Props {
    onClose: () => void
    id: string
}

const baseUrl = process.env.REACT_APP_BACKEND_API as string

const AddRating:React.FC<Props> = ({onClose, id}) => {
    const {loading, sendRequest} = useHttpRequest()
    const [rating, setRating] = useState<number>(0)
    const [text, setText] = useState<string>('')
    const { authorization: { access_token }} = useSelector((store: RootState) => store.authStore)

    const addReview = async(e: FormEvent) => {
        e.preventDefault()
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${access_token}`
        }
        if(!rating || !text) return toast.error('Please fill all fields.')
        const payload = { text, rating }
        try {
            const data = await sendRequest(`${baseUrl}/review/new/${id}`, 'POST', JSON.stringify(payload), headers)
            if(!data || data === undefined) return
            const { message } = data
            toast.success(`${message}`)
        } catch (error) {}
        setRating(0)
        setText('')
        return () => onClose()
    }

  return (
    <div className='w-full h-full fixed top-0 left-0 grid place-items-center bg-[#F9F9F9] bg-opacity-60' onClick={() => onClose()}>
        <div className='w-1/3 min-w-[300px] h-auto flex flex-col bg-white rounded-md p-[16px]' onClick={(e: MouseEvent<HTMLElement>) => e.stopPropagation()}>
            <p className='font-[600] text-[20px] leading-[56px] text-black capitalize mb-[14px]'>Add Review</p>

            <form onSubmit={addReview}>
                <p>Rate</p>
                <CustomRating rating={rating} setRating={setRating} />
                <div className='w-full h-[150px] flex items-center bg-white border-[1px] border-[#DADAE7] focus-within:border-primary rounded-md'>
                <textarea
                    value={text} 
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}
                    placeholder='Review' className='w-full h-full border-none outline-none p-1 rounded-md resize-none' />
                </div>
                <div className='w-full flex items-center justify-end justify mt-4 mb-2'>
                    <button type='submit' className='w-[158px] h-[60px] flexitems-center justify-center bg-primary text-white outline-none border-none rounded-[4px]'>
                        {loading ? <Spinner /> : 'Add Review'}
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddRating