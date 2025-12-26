import Navbar from "../Mainpages/Navbar";
import React from 'react';
import { Outlet } from 'react-router';
import Footer from "../Mainpages/Footer";
import { ToastContainer } from "react-toastify";

const Root = () => {
    return (
        <div className="lg:max-w-10/12 mx-auto bg-gray-200">
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
          <ToastContainer className="md:max-w-1/2"></ToastContainer>
        </div>
    );
};

export default Root;