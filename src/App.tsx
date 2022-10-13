import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/school/HomePage";
import SearchResult from "./pages/school/SearchResult";

function App() {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<SearchResult />} path="/search" />
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  );
}

export default App;

//temporary
const NotFound = () => {
  return (
    <>
      {" "}
      <div>You&apos;ve entered a black hole, find your way out</div>
    </>
  );
};
