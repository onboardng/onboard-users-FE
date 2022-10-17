import React from "react";
import Footer from "../../components/School/Footer";
import Navbar from "../../components/School/Navbar";
import TrackSchoolBookingComp from "../../components/TrackSchoolBookingComp";
import Goback from "../../components/ViewSchool/Goback";

const TrackSchoolBooking = () => {
  return (
    <div className="bg-grey-600">
      <Navbar />
      <Goback isback track />
      <TrackSchoolBookingComp />
      <Footer />
    </div>
  );
};

export default TrackSchoolBooking;
