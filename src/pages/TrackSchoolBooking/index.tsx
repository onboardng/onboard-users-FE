import React from 'react'
import Footer from '../../components/school/Footer'
import Navbar from '../../components/school/Navbar'
import TrackSchoolBookingComp from '../../components/TrackSchoolBookingComp'
import Goback from '../../components/ViewSchool/Goback'

const TrackSchoolBooking = () => {
  return (
    <div className="bg-grey-600">
        <Navbar />
        <Goback isback track />
        <TrackSchoolBookingComp />
        <Footer />
    </div>
  )
}

export default TrackSchoolBooking