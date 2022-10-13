import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLoader from "../components/Loader/PageLoader";

const AllRoutes = () => {
    const HomePage = lazy(() => import("../pages/HomePage"));
    const SchoolHomePage = lazy(() => import("../pages/school/HomePage"));
    const ViewSchool = lazy(() => import("../pages/ViewSchool"));
  return (
    <>
        <Suspense fallback={
            <PageLoader />
        }>
            <BrowserRouter>
                <Routes>
                    <Route 
                        path="/"
                        element={
                            <HomePage />
                        }
                    />
                    <Route 
                        path="/schools"
                        element={
                            <SchoolHomePage  />
                        }
                    />
                    <Route 
                        path="/schools/:id"
                        element={
                            <ViewSchool  />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </Suspense>
    </>
  )
}

export default AllRoutes