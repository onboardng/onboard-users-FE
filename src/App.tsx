import React, { useEffect } from "react";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "reactjs-popup/dist/index.css";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import ReactGA from 'react-ga4'
import { AdvancedMatching } from 'react-facebook-pixel'

import { setLoginUser } from "./redux/slices/auth";
import AllRoutes from "./config/routes";
import "./App.css";

const pixelId = process.env.REACT_APP_PIXEL_ID as string
const ga = process.env.REACT_APP_GA_ID as string
ReactGA.initialize(ga)

function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  const getUser = () => {
    const data = localStorage.getItem('user')
    if(!data) return
    const user = JSON.stringify(data)
    dispatch(setLoginUser(user))
  };

  useEffect(() => {
    const advancedMatchingOptions:AdvancedMatching = {
      country: "*", ct: "*", db: "*", em: "*", fn: "*", ge: "*", ln: "*", ph: "*", st: "*", zp: "*"
    };
    const options = { autoConfig: true, debug: false };
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(pixelId, advancedMatchingOptions, options);
        // The next line might need to be enabled as per GDPR guidelines
        // ReactPixel.revokeConsent()
        ReactPixel.pageView();

        window.addEventListener('DOMContentLoaded', () => {
          ReactPixel.pageView();
        });
      });
  }, [location]);

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
