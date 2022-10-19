import React from 'react'
import BookingCard from '../ApplicationSuccessSchool/BookingCard'
import Icon from '../Icons'
import Modal2 from '../Modal/Modal2'
import ModalClose from '../Modal/ModalClose'

const TrackSchoolBookingComp = () => {
    const [ modal, setModal ] = React.useState<boolean>(false)
    const handleModal = () =>{
        if(modal){document.body.style.overflow = 'auto';}
        else{document.body.style.overflow = 'hidden';}
        setModal((val)=> !val)
    }
  return (
    <>
        <div className='mx-4 md:mx-12 py-5 flex  flex-col lg:flex-row' >
            <div className='md:hidden flex pb-5' >
                <button
                    onClick={handleModal}
                    className={`text-primary border-primary border-[1px] rounded-[4px] px-4 py-3 flex justify-center w-full`}
                    >
                    <Icon id="info-icon" height={24} width={24} />
                    <p className="px-1" >More Options</p>
                </button>
            </div>
            <div className='lg:w-[60%]' >
                <BookingCard />
            </div>
            <div className='lg:w-[40%] py-5 max-w-[473px] rounded-[10px]' >
                <div className='px-5 bg-[#E7FAFF] h-[62px] flex items-center justify-between w-full rounded-t-[10px]' >
                    <p>Customer Details</p>
                </div>
                <div className='bg-white px-5 py-2 rounded-b-[10px]' >
                    <div className='py-2' >
                        <h5 className='font-medium text-[16px] leading-[25.6px] text-[#8B8BA4]' >Full Name</h5>
                        <p className='md:text-[20px] md:leading-[32px]' >John Doe</p>
                    </div>
                    <div className='py-2' >
                        <h5 className='font-medium text-[16px] leading-[25.6px] text-[#8B8BA4]' >Phone Number</h5>
                        <p className='md:text-[20px] md:leading-[32px]' >+2349098887655</p>
                    </div>
                    <div className='py-2' >
                        <h5 className='font-medium text-[16px] leading-[25.6px] text-[#8B8BA4]' >Email Address</h5>
                        <p className='md:text-[20px] md:leading-[32px]' >jdoe@email.com</p>
                    </div>
                    <div className='py-2' >
                        <h5 className='font-medium text-[16px] leading-[25.6px] text-[#8B8BA4]' >Payment Method</h5>
                        <p className='md:text-[20px] md:leading-[32px]' >Credit Card</p>
                    </div>
                    <div className='py-2' >
                        <h5 className='font-medium text-[16px] leading-[25.6px] text-[#8B8BA4]' >Booking Date</h5>
                        <p className='md:text-[20px] md:leading-[32px]' >1 Jan 2022, at 5:30pm</p>
                    </div>
                </div>
            </div>
        </div>
        {modal && 
            <Modal2 setModal={setModal}>
                <div className='relative h-full bg-white rounded-t-[20px]' >
                    <ModalClose close={()=>{
                        handleModal()
                    }} />
                    <div className='h-full px-5 flex flex-col items-center justify-center' >
                        <button
                            className={`text-primary border-primary border-[1px] h-[60px] w-full rounded-[4px] px-4 py-3 flex justify-center items-center`}
                            >
                            <Icon id="green-mail-icon" height={24} width={24} />
                            <p className="px-1" >Send to mail</p>
                        </button>
                        <button
                            className={`text-primary border-primary border-[1px] h-[60px] w-full rounded-[4px] px-4 py-3 flex justify-center items-center mt-5`}
                            >
                            <Icon id="download-icon" height={24} width={24} />
                            <p className="px-1" >Download as PDF</p>
                        </button>
                    </div>
                </div>
            </Modal2>
        }
    </>
  )
}

export default TrackSchoolBookingComp