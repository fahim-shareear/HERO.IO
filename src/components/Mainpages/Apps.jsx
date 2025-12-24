import React from 'react';
import { useLoaderData } from 'react-router';
import GridPage from '../Gridpage/GridPage';

const Apps = () => {
    const apps = useLoaderData();

    return (
        <div className="mt-5 px-4">
            <div className="text-center mb-6">
                <h1 className="text-black font-bold text-4xl m-3">Our All Applicatons</h1>
                <p className="text-gray-400 font-semibold text-xl m-1">
                    Browse all apps available in our marketplace
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
                {apps.map(app => (
                    <GridPage key={app.id} app={app} />
                ))}
            </div>
        </div>
    );
};

export default Apps;
