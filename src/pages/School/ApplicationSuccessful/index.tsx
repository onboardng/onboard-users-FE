import React from 'react'
import ApplicationSuccessSchool from '../../../components/ApplicationSuccessSchool'
import Navbar from '../../../components/School/Navbar'
import Footer from '../../../components/School/Footer'

const ApplicationSuccessful = () => {
  return (
    <div className="bg-grey-600" >
        <Navbar />
        <ApplicationSuccessSchool />
        <Footer />
    </div>
  )
}

export default ApplicationSuccessful