import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLoader from "../components/Loader/PageLoader";

const AllRoutes = () => {
  const Welcome = lazy(() => import("../pages/Register/Welcome"));
  const Register = lazy(() => import("../pages/Register/Register"));
  const Login = lazy(() => import("../pages/Register/Login"));
  const SchoolHomePage = lazy(() => import("../pages/school/HomePage"));
  const SchoolSearchPage = lazy(() => import("../pages/school/SearchResult"));
  const ViewSchool = lazy(() => import("../pages/ViewSchool"));
  const ApplySchool = lazy(() => import("../pages/ApplySchool"));
  const ApplicationSuccessful = lazy(() => import("../pages/ApplicationSuccessful"));
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
