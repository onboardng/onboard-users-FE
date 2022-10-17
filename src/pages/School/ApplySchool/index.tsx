import React from 'react'
import ApplySchoolCom from '../../../components/ApplySchool'
import Navbar from '../../../components/School/Navbar'
import Footer from '../../../components/School/Footer'
import Goback from '../../../components/ViewSchool/Goback'

const ApplySchool = () => {
  return (
    <div className="bg-grey-600">
      <Navbar />
      <Goback isback />
      <ApplySchoolCom />
      <Footer />
    </div>
  )
}

export default ApplySchool