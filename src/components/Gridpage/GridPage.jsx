import React from 'react';
import Ratingicon from "../../assets/icon-ratings.png";
import Downloadicon from "../../assets/icon-downloads.png";

const GridPage = ({ app }) => {
    return (
        <div className="rounded-xl overflow-hidden bg-white shadow-sm transform transition duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
            {/* App Image */}
            <div className="p-3">
                <img 
                    src={app.image} 
                    alt={app.title} 
                    className="rounded-lg w-full aspect-square object-cover"
                />
            </div>

            {/* App Info */}
            <div className="p-2 flex flex-col items-center">
                {/* App title */}
                <h1 className="font-bold text-black truncate text-center text-sm sm:text-base">
                    {app.title}
                </h1>

                {/* Download + Rating */}
                <div className="flex items-center justify-between w-full mt-2 gap-2">
                    {/* Downloads */}
                    <div className="flex items-center gap-1 bg-gray-200 p-1 rounded-md sm:flex-1 justify-center">
                        <img src={Downloadicon} alt="downloadicon" className="w-4 h-4"/>
                        <p className="text-green-500 font-bold uppercase sm:text-xs lg:text-[18px]">{app.downloads}</p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 bg-gray-200 p-1 rounded-md sm:flex-1 justify-center">
                        <img src={Ratingicon} alt="ratingicon" className="w-4 h-4"/>
                        <p className="text-green-500 font-bold uppercase sm:text-xs lg:text-[18px]">{app.ratingAvg}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GridPage;
