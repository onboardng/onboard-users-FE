import React, { useEffect } from "react";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "reactjs-popup/dist/index.css";
import { useDispatch } from "react-redux";
import ReactGA from 'react-ga4'

import { setLoginUser } from "./redux/slices/auth";
import AllRoutes from "./config/routes";
import "./App.css";

ReactGA.initialize("G-NMTGMDBSX2")

function App() {
  const dispatch = useDispatch();

  const getUser = () => {
    const data = localStorage.getItem('user')
    if(!data) return
    const user = JSON.stringify(data)
    dispatch(setLoginUser(user))
  };

  useEffect(() => {
    getUser()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

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
