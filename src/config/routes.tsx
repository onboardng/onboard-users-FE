import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLoader from "../components/Loader/PageLoader";

const AllRoutes = () => {
  const SchoolHomePage = lazy(() => import("../pages/school/HomePage"));
  const SchoolSearchPage = lazy(() => import("../pages/school/SearchResult"));
  const ViewSchool = lazy(() => import("../pages/ViewSchool"));
  return (
    <>
      <Suspense fallback={<PageLoader />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SchoolHomePage />} />
            <Route path="/search" element={<SchoolSearchPage />} />
            <Route path="/schools/:id" element={<ViewSchool />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default AllRoutes;
