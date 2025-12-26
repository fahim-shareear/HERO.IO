import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { getInstalledApps, saveInstalledApps } from '../Utilities/utilities';
import { toast } from 'react-toastify';

const Installation = () => {
    const [installedApps, setInstalledApps] = useState([]);
    const [sortOrder, setSortOrder] = useState('desc'); // 'desc' = largest to smallest, 'asc' = smallest to largest

    useEffect(() => {
        const apps = getInstalledApps();
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setInstalledApps(apps);
    }, []);

    const handleUninstall = (id) => {
        const updated = installedApps.filter(app => app.id !== id);
        setInstalledApps(updated);
        saveInstalledApps(updated);
        toast.success("Your app has been uninstalled");
    };

    const handleSortBySize = () => {
        const newOrder = sortOrder === 'desc' ? 'asc' : 'desc';
        setSortOrder(newOrder);

        const sortedApps = [...installedApps].sort((a, b) => {
            const sizeA = parseFloat(a.size);
            const sizeB = parseFloat(b.size);

            return newOrder === 'desc' ? sizeB - sizeA : sizeA - sizeB;
        });

        setInstalledApps(sortedApps);
    };

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

                    <button
                        onClick={handleSortBySize}
                        className="flex items-center gap-1 border border-gray-400 bg-gray-200 text-black px-3 py-1.5 rounded text-sm hover:bg-gray-300 transition"
                    >
                        Sort by size {sortOrder === 'desc' ? '↓' : '↑'}
                        <ChevronDown size={14} className="ml-1" />
                    </button>
                </div>

                {/* Installed apps list */}
                {installedApps.length === 0 ? (
                    <p className="text-center text-black mt-10">No apps installed yet</p>
                ) : (
                    <div className="space-y-2">
                        {installedApps.map(app => (
                            <div
                                key={app.id}
                                className="flex items-center justify-between bg-gray-200 px-3 py-2 rounded"
                            >
                                <div className="flex items-center gap-3">
                                    <img
                                        src={app.image}
                                        alt={app.title}
                                        className="w-12 h-12 object-contain rounded"
                                    />

                                    <div>
                                        <h3 className="font-semibold text-black text-sm leading-tight">
                                            {app.title}
                                        </h3>
                                        <div className="text-xs text-black flex gap-2 mt-1">
                                            <span className="text-green-600 font-medium">⬇ {app.downloads}</span>
                                            <span>⭐ {app.ratingAvg}</span>
                                            <span>{app.size} MB</span>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleUninstall(app.id)}
                                    className="bg-[#0abb83] hover:bg-[#09a56f] text-white font-semibold px-3 py-1.5 rounded text-xs transition"
                                >
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