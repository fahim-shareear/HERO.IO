import React from 'react';
import { Link, useLoaderData } from 'react-router';
import GridPage from '../Gridpage/GridPage';
import Bannerimg from "../../assets/hero.png";
import Counter from '../counter/Counter';
const Home = () => {
    // const apps = useLoaderData();
    // const apps = use(useLoaderData());
    // console.log(apps);
    const apps = useLoaderData();
    return (
        <div>
            <div className="mt-5">

                <div className="banner mx-auto lg:max-w-8/12 text-center">
                    <h1 className="font-semibold text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl m-3 md:text-[40px]">We Build <span className="text-purple-700 font-bold">Productive</span> Applications</h1>
                    <p className="text-gray-500 m-3 text-sm sm:text-base md:text-lg">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br/>Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                </div>

                <div className="banner-img lg:max-w-8/12 mx-auto flex items-center justify-center">
                    <div>
                        
                    </div>
                    <img src={Bannerimg} alt="bannerimg"/>
                </div>
{/* Counter section */}
                <div className="bg-linear-to-r from-purple-600 to-purple-500 text-white py-8">
                    <h2 className="text-3xl font-bold text-center mb-12 p-2">Trusted By Millions, Built For you</h2>
                    <div className="flex flex-col lg:flex-row md:flex-col items-center gap-12 justify-center">
                        <div className="text-center">
                            <p className="text-sm opacity-80">Total Downloads</p>
                            <h3 className="text-4xl font-bold">
                                <Counter end={29600000} suffix="+"></Counter>
                                <p className="text-sm opacity-70">21% More Than Last Month</p>
                            </h3>
                        </div>

                        <div className="text-sm text-center">
                            <p>Total Reviews</p>
                            <h3 className="text-4xl font-bold opacity-90">
                                <Counter end={906000} suffix='+'/>
                            </h3>
                            <p className="text-sm opacity-70">Best Quality Assured</p>
                        </div>

                        <div className="text-center">
                            <p className="text-sm opacity-80">Active Apps</p>
                            <h3 className="text-4xl font-bold">
                                <Counter end={132} suffix='+'/>
                            </h3>
                            <p className="text-sm opacity-70">31 More Will Launch</p>
                        </div>
                    </div>

                </div>

                {/* Appsgrid Section */}
                <div>
                    <div className="text-center mx-auto mt-3">
                        <h1 className="text-black font-bold text-4xl m-3">Trending Apps</h1>
                        <p className="text-gray-400 font-semibold text-xl m-1">Explore all the trending apps on the marketplace developed by us</p>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 m-1">
                            {
                                apps.slice(0, 8).map(app => <GridPage key={app.id} app={app}></GridPage>)
                            }
                    </div>

                    <div className="flex items-center justify-center">
                        <Link to={"/apps"}>
                            <button className="bg-purple-500 font-bold text-sm rounded p-2 w-30 btn border-none m-2 text-white">See All</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;