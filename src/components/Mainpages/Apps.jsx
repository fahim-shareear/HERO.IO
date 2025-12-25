import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import GridPage from '../Gridpage/GridPage';
import { SearchIcon } from 'lucide-react';
import { useState } from 'react';
import Appnotfound from '../Errorpages/Appnotfound';

const Apps = () => {
    const apps = useLoaderData();
    const [searchText, setSearchText] = useState("");

    const filteredApps = apps.filter(app =>
        app.title.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className="mt-5 px-4">
            <div className="text-center mb-6">
                <h1 className="text-black font-bold text-4xl m-3">Our All Applicatons</h1>
                <p className="text-gray-400 font-semibold text-xl m-1">
                    Browse all apps available in our marketplace
                </p>
            </div>

            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-black 
                    font-bold lg:text-[20px] sm:text-md m-3">{filteredApps.length} Apps Found</h1>
                </div>
                <div className="flex items-center gap-1 border border-gray-500 rounded-md">
                    <span className="text-[15px] p-1 text-black"><SearchIcon></SearchIcon></span>
                    <input type="search" 
                    placeholder='Search apps' 
                    className="text-black w-30 p-1 focus:outline-none lg:w-50"
                    value={searchText}
                    name='search' onChange={(e) => setSearchText(e.target.value)}/>
                </div>
            </div>

            <Suspense fallback={<span className="loading loading-spinner text-error w-40 h-40"></span>}>
                {
                filteredApps.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
                        {filteredApps.map(app => (
                            <GridPage key={app.id} app={app} />
                        ))}
                    </div>
                ) : (
                    <div className="lg:max-w-11/12 mx-auto flex items-center justify-center p-10">
                        <Appnotfound></Appnotfound>
                    </div>
                )
            }
            </Suspense>
        </div>
    );
};

export default Apps;
