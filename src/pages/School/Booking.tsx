import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import PageLoader from '../../components/Loader/PageLoader';
import Footer from '../../components/school/Footer';
import Navbar from '../../components/school/Navbar';
import { RootState } from '../../redux/store';
import { useHttpRequest } from '../../hooks';

const url = process.env.REACT_BACKEND_API

const Booking = () => {
  const {authorization: {access_token}} = useSelector((store: RootState) => store.authStore);
  const {error, loading, sendRequest} = useHttpRequest();
  const [booking, setBooking] = useState(null);
    const { id } = useParams();

    const getApplication = async() => {
      try {
        const data = await sendRequest(`${url}/application/view/${id}`, "GET", null, {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${access_token}`
        })
        if(!data || data === undefined) return
        console.log(data)
      } catch (error) {}
    };

    useEffect(() => {
      getApplication()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    useEffect(() => {
      error && toast.error(`${error}`)
    },[error]);

    if(loading) return <PageLoader />

  return (
    <>
    <Navbar />
    <section className='py-5 px-2'></section>
    <Footer />
    </>
  )
}

export default Booking