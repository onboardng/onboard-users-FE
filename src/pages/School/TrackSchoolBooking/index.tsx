import React, { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import PageLoader from '../../../components/Loader/PageLoader'
import Footer from '../../../components/school/Footer'
import Navbar from '../../../components/school/Navbar'
import TrackSchoolBookingComp from '../../../components/TrackSchoolBookingComp'
import Goback from '../../../components/ViewSchool/Goback'
import { useSearchApplicationMutation } from '../../../redux/services'

const TrackSchoolBooking = () => {
  const id = useParams().id as string;
  const [ searchApplication, { isLoading, data } ] = useSearchApplicationMutation();
  useEffect(()=> {
    searchApplication({ tracking_id: id });
  },[id, searchApplication ])
  const applicationData = useMemo<any>(() => data?.data, [data?.data]);
  return (
    <div className="bg-grey-600">
        <Navbar />
        <Goback isback track />
        {isLoading ? <PageLoader /> : <TrackSchoolBookingComp data={applicationData} />}
        <Footer />
    </div>
  )
}

export default TrackSchoolBooking