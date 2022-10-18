import React from "react";
import "./App.css";
import AllRoutes from "./config/routes";
import "react-toastify/dist/ReactToastify.css";
import "reactjs-popup/dist/index.css";
import { Slide, ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="min-h-screen">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
      />
      <AllRoutes />
    </div>
  );
}

export default App;
