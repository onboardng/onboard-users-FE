import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import PageLoader from "../components/Loader/PageLoader";
import { persistor } from "../redux/store";

const AllRoutes = () => {
  const Welcome = lazy(() => import("../pages/Authentication/Verify"));
  const Register = lazy(() => import("../pages/Authentication/Register"));
  const UserDetails = lazy(() => import("../pages/Authentication/BasicDetails"));
  const Login = lazy(() => import("../pages/Authentication/Login"));
  const SchoolHomePage = lazy(() => import("../pages/School/HomePage"));
  const SchoolSearchPage = lazy(() => import("../pages/School/SearchResult"));
  const ViewSchool = lazy(() => import("../pages/School/ViewSchool"));
  const ApplySchool = lazy(() => import("../pages/School/ApplySchool"));
  const ApplicationSuccessful = lazy(() => import("../pages/School/ApplicationSuccessful"));
  const TrackSchoolBooking = lazy(() => import("../pages/School/TrackSchoolBooking"));
  const ForgotPassword = lazy(() => import("../pages/Authentication/ForgotPassword"));
  const ResetPassword = lazy(() => import("../pages/Authentication/ResetPassword"));
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Suspense fallback={<PageLoader />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SchoolHomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/verify" element={<Welcome />} />
            <Route path="/register" element={<Register />} />
            <Route path="/details" element={<UserDetails />} />
            <Route path="/search" element={<SchoolSearchPage />} />
            <Route path="/schools/:id" element={<ViewSchool />} />
            <Route path="/schools/:id/apply" element={<ApplySchool />} />
            <Route path="/schools/success" element={<ApplicationSuccessful />} />
            <Route path="/booking/schools/:id" element={<TrackSchoolBooking />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </PersistGate>
  );
};

export default AllRoutes;
