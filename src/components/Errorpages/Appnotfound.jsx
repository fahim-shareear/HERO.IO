import React from 'react';
import Apperror from "../../assets/App-Error.png";
import { useNavigate } from 'react-router';


const Appnotfound = () => {
    const navigate = useNavigate();
    return (
        <div className="flex items-center justify-center flex-col py-10 gap-5">
            <img src={Apperror} alt="appnotfound"  width={400} height={400}/>
            <button className="p-2 font-bold text-[18px] bg-purple-500 text-white rounded-md cursor-pointer"
            onClick={() => navigate(- 1)}>Go Back!</button>
        </div>
    );
};

export default Appnotfound;