import React from "react";
import AddSection from "../../../components/school/AdSection";
import Footer from "../../../components/school/Footer";
import Navbar from "../../../components/school/Navbar";
import Subscribe from "../../../components/school/Subscribe";
import ViewSchoolComp from "../../../components/ViewSchool";
import Goback from "../../../components/ViewSchool/Goback";

const ViewSchool = () => {
  return (
    <div className="bg-grey-600">
      <Navbar />
      <Goback isback />
      <ViewSchoolComp />
      <AddSection />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default ViewSchool;
