import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLoader from "../components/Loader/PageLoader";
import Login from "../pages/Register/Login";
import Register from "../pages/Register/Register";
import Welcome from "../pages/Register/Welcome";

const AllRoutes = () => {
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
            <Route path="/apply/schools/:id" element={<ApplySchool />} />
            <Route path="/applicationsuccess/schools" element={<ApplicationSuccessful />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default AllRoutes;
