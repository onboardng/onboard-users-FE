import React, { ChangeEvent, FormEvent, MouseEvent, useState } from 'react'

import { useHttpRequest } from '../../hooks/useHttpRequest'
import PageLoader from '../Loader/PageLoader'
import CustomRating from '../Shared/CustomRating'

interface Props {
    onClose: () => void
}

const AddRating:React.FC<Props> = ({onClose}) => {
    const {loading, sendRequest} = useHttpRequest()
    const [review, setReview] = useState<string>('')
    const [rating, setRating] = useState<number>(0)

    const addReview = async(e: FormEvent) => {
        e.preventDefault()
        const headers = {
            'Content-Type': 'application/json'
        }
        const payload = {}
        try {
            const data = await sendRequest(``, 'POST', JSON.stringify(payload), headers)
            console.log(data)
        } catch (error) {}
    }

    if(loading) return <PageLoader />

  return (
    <div className='w-full h-full fixed top-0 left-0 grid place-items-center bg-[#F9F9F9] bg-opacity-60' onClick={() => onClose()}>
        <div className='w-1/3 min-w-[300px] h-auto flex flex-col bg-white rounded-md p-[16px]' onClick={(e: MouseEvent<HTMLElement>) => e.stopPropagation()}>
            <p className='font-[600] text-[20px] leading-[56px] text-black capitalize mb-[14px]'>Add Review</p>

            <form onSubmit={addReview}>
                <p>Rate</p>
                <CustomRating rating={rating} />
                <div className='w-full h-[150px] flex items-center bg-white border-[1px] border-[#DADAE7] focus-within:border-primary rounded-md'>
                <textarea
                    value={review} 
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setReview(e.target.value)}
                    placeholder='Review' className='w-full h-full border-none outline-none p-1 rounded-md resize-none' />
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddRating