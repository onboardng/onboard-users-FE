import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageLoader from "../../../components/Loader/PageLoader";
import AddSection from "../../../components/school/AdSection";
import Footer from "../../../components/school/Footer";
import Navbar from "../../../components/school/Navbar";
import Subscribe from "../../../components/school/Subscribe";
import ViewSchoolComp from "../../../components/ViewSchool";
import Goback from "../../../components/ViewSchool/Goback";
// import { useGetAllUniversityReviewsQuery, useGetAUniversityQuery, useGetUniversityCoursesQuery } from "../../../redux/services";
// import { IRootQueryParams, UniversityData } from "../../../utils/interfaces";
import { useHttpRequest } from "../../../hooks/useHttpRequest";

// const baseUrl = process.env.REACT_APP_BACKEND_API
const baseUrl = "https://app.onboard.com.ng/onboard/v1"

const ViewSchool = () => {
  const id = useParams().id as string;
  const [universityData, setUniversityData] = useState<any>()
  const {error, loading, sendRequest} = useHttpRequest()
  
  const getUniversityInfo = async(id: string) => {
    const headers = {
      'Content-Type': 'application/json',
    }
    try {
      const data = await sendRequest(`${baseUrl}/university/view/${id}`, 'GET', null, headers)
      if(data === undefined) return
      console.log(data)
      setUniversityData(data)
    } catch (error) {}
  }

  useEffect(() => {
    getUniversityInfo(id)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  if(loading) return <PageLoader />

  return (
    <div className="bg-grey-600">
      <Navbar />
      <Goback isback />
      {}
      <ViewSchoolComp data={universityData} />
      <AddSection />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default ViewSchool;
