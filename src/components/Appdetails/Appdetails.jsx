import React, { useState, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Downloadlogo from "../../assets/icon-downloads.png";
import Ratingimg from "../../assets/icon-ratings.png";
import Reviewicon from "../../assets/icon-review.png";
import { getInstalledApps } from '../Utilities/utilities';
import { toast } from 'react-toastify';

const Appdetails = () => {
    const { id } = useParams();
    const apps = useLoaderData();
    const app = apps.find(a => a.id === Number(id));

    // অ্যাপ installed কিনা চেক করার ফাংশন
    const checkIfInstalled = () => {
        if (!app) return false;
        const installedApps = getInstalledApps();
        return installedApps.some(item => item.id === app.id);
    };

    const [isInstalled, setIsInstalled] = useState(checkIfInstalled);

    // real-time update: localStorage change হলে বা same tab-এ uninstall হলে
    useEffect(() => {
        const handleStorageChange = () => {
            setIsInstalled(checkIfInstalled());
        };

        // অন্য ট্যাব থেকে change হলে
        window.addEventListener('storage', handleStorageChange);

        // same tab-এ change হলে (Installation পেজ থেকে uninstall করলে)
        const interval = setInterval(() => {
            setIsInstalled(checkIfInstalled());
        }, 1000); // প্রতি ১ সেকেন্ডে চেক করবে (খুবই হালকা)

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            clearInterval(interval);
        };
    }, [app]); // app change হলে (যেমন অন্য id-এ গেলে) re-run

    const addtoLS = () => {
        const installedApps = getInstalledApps();
        const alreadyInstalled = installedApps.some(item => item.id === app.id);

        if (alreadyInstalled) {
            return;
        }

        const updatedApps = [...installedApps, app];
        localStorage.setItem("installedApps", JSON.stringify(updatedApps));
        toast.success("Your app has been Installed!");
        setIsInstalled(true);
    };

    const handleInstalledApp = () => {
        addtoLS();
    };

    // যদি app না পাওয়া যায় (ভুল id দিলে)
    if (!app) {
        return (
            <div className="min-h-screen bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-red-600 mb-4">404</h1>
                    <p className="text-xl text-black">App not found!</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-200 p-4 sm:p-6 md:p-8 lg:p-10">
            <div className="lg:max-w-11/12 mx-auto mt-10 bg-gray-200">
                <div className="lg:max-w-7/12 mx-auto mb-5">
                    <div className="app-head flex items-center gap-9 mb-5">
                        <div className="app-img">
                            <img
                                src={app.image}
                                alt={app.title}
                                className="w-32 h-32 sm:w-40 sm:h-40 object-contain rounded-lg shadow-lg"
                            />
                        </div>

                        <div className="side-details flex-1">
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

                            <div className="flex items-center gap-5 mt-5">
                                <div className="mr-4 text-center">
                                    <img src={Downloadlogo} alt="downloads" width={20} height={20} />
                                    <p className="font-bold text-black text-[15px] mb-3 mt-1">
                                        Downloads
                                    </p>
                                    <h3 className="uppercase font-bold text-2xl text-black">
                                        {app.downloads}
                                    </h3>
                                </div>

                                <div className="mr-4 text-center">
                                    <img src={Ratingimg} alt="rating" width={20} height={20} />
                                    <p className="font-bold text-black text-[15px] mb-3 mt-1">
                                        Average Rating
                                    </p>
                                    <h3 className="uppercase font-bold text-2xl text-black">
                                        {app.ratingAvg}
                                    </h3>
                                </div>

                                <div className="mr-4 text-center">
                                    <img src={Reviewicon} alt="reviews" width={20} height={20} />
                                    <p className="font-bold text-black text-[15px] mb-3 mt-1">
                                        Total Reviews
                                    </p>
                                    <h3 className="uppercase font-bold text-2xl text-black">
                                        {app.reviews}
                                    </h3>
                                </div>
                            </div>

                            <button
                                className={`p-3 rounded-md font-bold mt-6 cursor-pointer transition ${
                                    isInstalled
                                        ? "bg-gray-500 text-gray-300 cursor-not-allowed"
                                        : "bg-[#0abb83] text-white hover:bg-[#08a06e]"
                                }`}
                                onClick={handleInstalledApp}
                                disabled={isInstalled}
                            >
                                {isInstalled ? "Installed" : `Install Now (${app.size} MB)`}
                            </button>
                        </div>
                    </div>

                    <hr className="border-t border-gray-500" />

                    <div className="mt-8">
                        <h1 className="text-black font-bold text-2xl mb-4">
                            Description
                        </h1>
                        <p className="text-[15px] text-black text-left leading-relaxed">
                            {app.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appdetails;