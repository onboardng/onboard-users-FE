import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import PageLoader from "../../../components/Loader/PageLoader";
import AddSection from "../../../components/school/AdSection";
import Footer from "../../../components/school/Footer";
import Navbar from "../../../components/school/Navbar";
import Subscribe from "../../../components/school/Subscribe";
import ViewSchoolComp from "../../../components/ViewSchool";
import Goback from "../../../components/ViewSchool/Goback";
import { useGetAUniversityQuery, useGetUniversityCoursesQuery } from "../../../redux/services";
import { IRootQueryParams, ListUniversitiesResponse, UniversityData } from "../../../utils/interfaces";

const initialQueryParams: IRootQueryParams = { page: 1, limit: 10 };
const ViewSchool = () => {
  const id = useParams().id as string;
  const { data, isLoading } = useGetAUniversityQuery(id);
  const { data: courseData, isLoading: courseLoading } = useGetUniversityCoursesQuery({ ...initialQueryParams, id })

  const university = useMemo<UniversityData>(() => data?.data.university, [data]);
  const universityCourses = useMemo<ListUniversitiesResponse>(() => {
    return courseData?.data?.courses.data;
  }, [courseData?.data?.courses.data]);

  if (isLoading || courseLoading) {
    return <PageLoader />;
  }
  return (
    <div className="bg-grey-600">
      <Navbar />
      <Goback isback />
      <ViewSchoolComp courses={universityCourses} university={university} />
      <AddSection />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default ViewSchool;
