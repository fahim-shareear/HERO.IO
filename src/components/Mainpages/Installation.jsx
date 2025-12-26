import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { getInstalledApps } from '../Utilities/utilities';

const Installation = () => {
    const [installedApps, setInstalledApps] = useState([]);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setInstalledApps(getInstalledApps());
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen py-6">
            <div className="max-w-6xl mx-auto px-3">

                {/* Banner */}
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-black leading-tight">Your Installed Apps</h1>
                    <p className="text-sm text-black mt-1">Explore all trending apps developed by us</p>
                </div>

                {/* Top bar */}
                <div className="flex items-center justify-between mb-3">
                    <h2 className="font-semibold text-black text-sm">
                        {installedApps.length} Apps Found
                    </h2>

                    <button className="flex items-center gap-1 border border-gray-400 bg-gray-200 text-black px-3 py-1.5 rounded text-sm">
                        Sort by size <ChevronDown size={14} />
                    </button>
                </div>

                {/* Installed apps list */}
                {installedApps.length === 0 ? (
                    <p className="text-center text-black mt-10">No apps installed yet</p>
                ) : (
                    <div className="space-y-2">
                        {installedApps.map(app => (
                            <div key={app.id} className="flex items-center justify-between bg-gray-200 px-3 py-2 rounded">
                                <div className="flex items-center gap-3">
                                    <img src={app.image} alt={app.title} className="w-12 h-12 object-contain" />

                                    <div>
                                        <h3 className="font-semibold text-black text-sm leading-tight">
                                            {app.title}
                                        </h3>
                                        <div className="text-xs text-black flex gap-2">
                                            <span className="text-green-600 font-medium">⬇ {app.downloads}</span>
                                            <span>⭐ {app.ratingAvg}</span>
                                            <span>{app.size} MB</span>
                                        </div>
                                    </div>
                                </div>

                                <button className="bg-[#0abb83] text-white font-semibold px-3 py-1.5 rounded text-xs">
                                    Uninstall
                                </button>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
};

export default Installation;
