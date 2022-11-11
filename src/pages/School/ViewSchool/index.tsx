import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
// import PageLoader from "../../../components/Loader/PageLoader";
import AddSection from "../../../components/school/AdSection";
import Footer from "../../../components/school/Footer";
import Navbar from "../../../components/school/Navbar";
import Subscribe from "../../../components/school/Subscribe";
import ViewSchoolComp from "../../../components/ViewSchool";
import Goback from "../../../components/ViewSchool/Goback";
import { useGetAllUniversityReviewsQuery, useGetAUniversityQuery, useGetUniversityCoursesQuery } from "../../../redux/services";
import { IRootQueryParams, UniversityData } from "../../../utils/interfaces";

const ViewSchool = () => {
  const id = useParams().id as string;
  const [ page, setPage ] = React.useState(1)
  const { data, isLoading } = useGetAUniversityQuery(id);
  const initialQueryParams: IRootQueryParams = { page, limit: 10 };
  const initialReviewQueryParams: IRootQueryParams = { page: 1, limit: 10 };
  const { data: courseData, isFetching: courseLoading } = useGetUniversityCoursesQuery({ ...initialQueryParams, id });
  const { data: reviewData, isLoading: reviewLoading } = useGetAllUniversityReviewsQuery({ id, ...initialReviewQueryParams });
  const university = useMemo<UniversityData>(() => data?.data?.university, [data]);
  const universityCourses = useMemo<any>(() => {
    return courseData?.data;
  }, [courseData?.data]);
  const reviews = useMemo<any>(() => {
    return reviewData?.data?.result
  },[reviewData?.data?.result])

  return (
    <div className="bg-grey-600">
      <Navbar />
      <Goback isback />
      <ViewSchoolComp page={page} setPage={setPage} isLoading={isLoading} courseLoading={courseLoading} reviewLoading={reviewLoading} id={id} reviews={reviews} courses={universityCourses} university={university} />
      <AddSection />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default ViewSchool;
