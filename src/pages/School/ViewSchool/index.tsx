import React from "react";
import AddSection from "../../../components/School/AdSection";
import Footer from "../../../components/School/Footer";
import Navbar from "../../../components/School/Navbar";
import Subscribe from "../../../components/School/Subscribe";
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
