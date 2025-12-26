import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Downloadlogo from "../../assets/icon-downloads.png";
import Ratingimg from "../../assets/icon-ratings.png";
import Reviewicon from "../../assets/icon-review.png";
import { getInstalledApps } from '../Utilities/utilities';
import { toast } from 'react-toastify';

const Appdetails = () => {
    const {id} = useParams();
    const apps = useLoaderData();
    const app  = apps.find(a => a.id === Number(id));
    // console.log(app);
    const [isInstalled, setIsInstalled] = useState(
        getInstalledApps().some(item => item.id === app.id)
    );

    const addtoLS = () =>{
        const installedApps = getInstalledApps();
        const installed = installedApps.find(item => item.id === app.id);

        if(installed){
            return
        }

        const updatedApp = [...installedApps, app];
        localStorage.setItem("installedApps", JSON.stringify(updatedApp));
        toast("Your app has been Installed");
        setIsInstalled(true);
    }

    const handleInstalledApp = () =>{
        addtoLS(app)
    }

    return (
        <div className="bg-gray-200 p-4 sm:p-6 md:p-8 lg:p-10">

    

    <div className="lg:max-w-11/12 mx-auto mt-10 bg-gray-200">

        <div className="lg:max-w-7/12 mx-auto mb-5">

            <div className="app-head flex items-center gap-9 mb-5">

                <div className="app-img">
                    <img
                        src={app.image}
                        alt="applogo"
                        width={400}
                        height={400}
                    />
                </div>

                <div className="side-details">

                    <div className="title mb-5">
                        <h1 className="text-black font-bold text-3xl">
                            {app.title}
                        </h1>

                        <p className="text-[10px] text-black mt-2">
                            Developed by
                            <span className="font-bold text-purple-600 ml-2">
                                {app.companyName}
                            </span>
                        </p>
                    </div>

                    <hr className="border-t border-gray-500" />

                    <div>

                        <div className="flex items-center gap-5 mt-5">

                            <div className="mr-4">
                                <img
                                    src={Downloadlogo}
                                    width={20}
                                    height={20}
                                />
                                <p className="font-bold text-black text-[15px] mb-3 mt-1">
                                    Downloads
                                </p>
                                <h3 className="uppercase font-bold text-2xl text-black">
                                    {app.downloads}
                                </h3>
                            </div>

                            <div className="mr-4">
                                <img
                                    src={Ratingimg}
                                    width={20}
                                    height={20}
                                />
                                <p className="font-bold text-black text-[15px] mb-3 mt-1">
                                    Average Ranking
                                </p>
                                <h3 className="uppercase font-bold text-2xl text-black">
                                    {app.ratingAvg}
                                </h3>
                            </div>

                            <div className="mr-4">
                                <img
                                    src={Reviewicon}
                                    width={20}
                                    height={20}
                                />
                                <p className="font-bold text-black text-[15px] mb-3 mt-1">
                                    Total Reviews
                                </p>
                                <h3 className="uppercase font-bold text-2xl text-black">
                                    {app.reviews}
                                </h3>
                            </div>

                        </div>

                        <button
                            className="bg-[#0abb83] p-3 rounded-md font-bold mt-2 cursor-pointer"
                            onClick={()=> handleInstalledApp()}
                            disabled={isInstalled}
                        >
                            {isInstalled ? "Installed" : `Install Now (${app.size} MB)`}
                        </button>

                    </div>

                </div>

            </div>

            <hr className="border-t border-gray-500" />

            <div className="mt-5">
                <h1 className="text-black font-bold mb-4">
                    Description
                </h1>

                <p className="text-[15px] text-black text-left">
                    {app.description}
                </p>
            </div>

        </div>

    </div>

</div>

    );
};

export default Appdetails;