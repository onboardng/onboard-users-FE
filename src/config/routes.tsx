import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLoader from "../components/Loader/PageLoader";

const AllRoutes = () => {
  const Welcome = lazy(() => import("../pages/School/Authentication/Verify"));
  const Register = lazy(() => import("../pages/School/Authentication/Register"));
  const Login = lazy(() => import("../pages/School/Authentication/Login"));
  const SchoolHomePage = lazy(() => import("../pages/School/HomePage"));
  const SchoolSearchPage = lazy(() => import("../pages/School/SearchResult"));
  const ViewSchool = lazy(() => import("../pages/School/ViewSchool"));
  const ApplySchool = lazy(() => import("../pages/School/ApplySchool"));
  const ApplicationSuccessful = lazy(() => import("../pages/School/ApplicationSuccessful"));
  return (
    <>
      <Suspense fallback={<PageLoader />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SchoolHomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/register" element={<Register />} />
            <Route path="/search" element={<SchoolSearchPage />} />
            <Route path="/schools/:id" element={<ViewSchool />} />
            <Route path="/schools/:id/apply" element={<ApplySchool />} />
            <Route path="/schools/success" element={<ApplicationSuccessful />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default AllRoutes;
