import React from 'react';
import Errorimg from "../../assets/error-404.png";
import { useNavigate } from 'react-router';
// import "./App.css";

const Pagenotfound = () => {
    const navigate = useNavigate();
    return (
        <div className="flex items-center justify-center flex-col h-screen text-center bg-gray-400">
            <img src={Errorimg} alt="pagenotfound" width={500} height={500} className="p-4"/>
            <h1 className="text-black font-bold text-4xl p-2">Oops Page not found!</h1>
            <p className="text-gray-300 font-semibold text-[15px] text-wrap">The page you are looking for is not available</p>
            <button className="rounded-xl bg-purple-600 text-white w-30 h-10 m-2 p-2 btn text-[18px] border-none" onClick={() => navigate(- 1)}>Go Back!</button>
        </div>
    );
};

export default Pagenotfound;