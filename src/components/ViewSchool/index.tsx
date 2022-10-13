import React from 'react'
import carouselImage from '../../assets/Image Card.svg'
import Icon from '../Icons'
import AdmissionsCard from './AdmissionsCard'
import RatingLarge from './RatingLarge'
import ReviewComments from './ReviewComments'

const ViewSchool = () => {
    const comments = ["1", "2", "3", "4", "5"]
  return (
    <div className='mx-4 md:mx-12 flex flex-col md:flex-row ' >
        <div>
            <img src={carouselImage} alt="carousel" />
            <section className='tab:hidden py-10' >
                <div className='bg-white' >
                    <div className='bg-[#E7FAFF] h-[62px] flex items-center justify-between' >
                        <p className='pl-10 font-medium text-[14px] leading-[22.4px] ' >Ratings & Reviews</p>
                        <p className='pr-10 text-primary text-[10px] font-bold leading-[16px] cursor-pointer flex' > <span className='pr-2' ><Icon id='plus-icon' width={16} height={16} /></span> Write a Review / Rating</p>
                    </div>
                    <p className='pb-2' ></p>
                    {comments.map(comment => <ReviewComments comments={comments} key={comment} ></ReviewComments>)}
                </div>
            </section>
        </div>
            <div className='md:pl-10 w-full tab:pt-5' >
                <div>
                    <h1 className='text-[24px] leading-[38.4px] font-medium md:font-semibold md:text-[40px] md:leading-[56px]'>    
                    University of Lagos
                    </h1>
                    <span className='flex' >
                        {comments.map(comment => <RatingLarge key={comment} />)}
                    </span>
                    <p className='text-[#8B8BA4] text-[16px] leading-[25.6px] py-1' >20 ratings total</p>
                    <p className='flex items-center py-2 text-[16px] leading-[25.6px] font-medium md:text-[20px] md:leading-[32px]' >
                        <Icon id='location-pin-icon' width={24} height={24} />
                        <span className='pl-2' >9, Ebinpejo Lane, Idumota, Lagos, Nigeria</span>
                    </p>
                    <p className='text-[#8B8BA4] text-[14px] leading-[22.4px] font-medium py-1' >
                        The University of Lagos,   popularly known as UNILAG, is a public research university located in Lagos, Nigeria and was founded in 1962. UNILAG is one of the first generation universities in Nigeria and is ranked among the top universities in the world in major education publications. The university presently has three campuses in the mainland of Lagos. Whereas two of its campuses are located at Yaba (the main campus in Akoka and the recently created campus at the former school of radiography), it's college of medicine is located at Idi-Araba, Surulere. Its main campus is largely surrounded by the Lagos lagoon and has 802 acres of land. The University of Lagos currently[when?] admits over 9,000 undergraduate students annually and enrolls over 57,000 students.
                    </p>
            </div>
            <div className='md:pt-10 pt-2 relative' >
                <h4 className='text-[24px] leading-[38.4px] font-medium' >Admissions</h4>
                {comments.map(comment => <AdmissionsCard />)}
            </div>
        </div>
    </div>
  )
}

export default ViewSchool