import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import PageLoader from "../../../components/Loader/PageLoader";
import AddSection from "../../../components/school/AdSection";
import Footer from "../../../components/school/Footer";
import Navbar from "../../../components/school/Navbar";
import Subscribe from "../../../components/school/Subscribe";
import ViewSchoolComp from "../../../components/ViewSchool";
import Goback from "../../../components/ViewSchool/Goback";
import { useGetAUniversityQuery } from "../../../redux/services";
import { UniversityData } from "../../../utils/interfaces";

const ViewSchool = () => {
  const id = useParams().id as string;
  const { data, isLoading } = useGetAUniversityQuery(id);

  const university = useMemo<UniversityData>(() => data?.data.university, [data]);

  if (isLoading) {
    return <PageLoader />;
  }
  return (
    <div className="bg-grey-600">
      <Navbar />
      <Goback isback />
      <ViewSchoolComp university={university} />
      <AddSection />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default ViewSchool;
