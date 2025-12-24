import Navbar from "../Mainpages/Navbar";
import React from 'react';
import { Outlet } from 'react-router';
import Footer from "../Mainpages/Footer";

const Root = () => {
    return (
        <div className="lg:max-w-10/12 mx-auto bg-gray-200">
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default Root;