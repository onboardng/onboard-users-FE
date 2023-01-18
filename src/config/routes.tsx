import React, { lazy, Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import PageLoader from "../components/Loader/PageLoader";
import { persistor } from "../redux/store";

const AllRoutes = () => {
  const Welcome = lazy(() => import("../pages/Authentication/Verify"));
  const Register = lazy(() => import("../pages/Authentication/Register"));
  const UserDetails = lazy(() => import("../pages/Authentication/BasicDetails"));
  const Profile = lazy(() => import("../pages/Authentication/Profile"));
  const Login = lazy(() => import("../pages/Authentication/Login"));
  const SchoolHomePage = lazy(() => import("../pages/School/HomePage"));
  const SchoolSearchPage = lazy(() => import("../pages/School/SearchResult"));
  const ViewSchool = lazy(() => import("../pages/School/ViewSchool"));
  const ApplySchool = lazy(() => import("../pages/School/ApplySchool"));
  const ApplicationSuccessful = lazy(() => import("../pages/School/ApplicationSuccessful"));
  const TrackSchoolBooking = lazy(() => import("../pages/School/TrackSchoolBooking"));
  const ForgotPassword = lazy(() => import("../pages/Authentication/ForgotPassword"));
  const ResetPassword = lazy(() => import("../pages/Authentication/ResetPassword"));
  const location = useLocation()

  // const options = { autoConfig: true, debug: false };
  // ReactPixel.init(pixelId, undefined, options)

  useEffect(() => {
    // const advancedMatchingOptions:AdvancedMatching = {};
    const options = { autoConfig: true, debug: false };
    import('react-facebook-pixel')
      .then((pixel) => pixel.default)
      .then((ReactPixel) => {
        ReactPixel.init('1866981493679392', undefined, options);
        // The next line might need to be enabled as per GDPR guidelines
        // ReactPixel.revokeConsent()
        ReactPixel.pageView();

        window.addEventListener('DOMContentLoaded', () => {
          ReactPixel.pageView();
        });
      });
  }, [location]);
  
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<SchoolHomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/verify" element={<Welcome />} />
            <Route path="/register" element={<Register />} />
            <Route path="/details" element={<UserDetails />} />
            <Route path="/user" element={<Profile />} />
            <Route path="/search" element={<SchoolSearchPage />} />
            <Route path="/schools/:id" element={<ViewSchool />} />
            <Route path="/schools/:id/apply" element={<ApplySchool />} />
            <Route path="/schools/success" element={<ApplicationSuccessful />} />
            <Route path="/booking/schools" element={<TrackSchoolBooking />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Routes>
      </Suspense>
    </PersistGate>
  );
};

export default AllRoutes;
