import React from 'react'
import ApplySchoolCom from '../../components/ApplySchool'
import Navbar from '../../components/Navbar'
import Footer from '../../components/school/Footer'
import Goback from '../../components/ViewSchool/Goback'

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