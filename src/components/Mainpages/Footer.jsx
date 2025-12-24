import React from 'react';
import Applogo from "../../assets/logo.png";
import { FacebookIcon, GithubIcon, InstagramIcon, Twitch, TwitterIcon } from 'lucide-react';

const Footer = () => {
    return (
        <div className="bg-[#001931] h-36 rounded-t-md mt-3">
            <div className="flex items-center justify-between">

                <div className="m-3">
                    <div className="flex items-center justify-center gap-2">
                        <img src={Applogo} alt="applogo"  width={50} height={50}/>
                        <h1 className="font-bold uppercase text-purple-400 text-[18px]">hero.io</h1>
                    </div>
                </div>

                <div className="m3">
                    <h1 className="font-bold text-[19px] p-2">Social Links</h1>
                    <div className="flex items-center justify-center gap-2 p-2">
                        <GithubIcon></GithubIcon>
                        <FacebookIcon></FacebookIcon>
                        <Twitch></Twitch>
                        <TwitterIcon></TwitterIcon>
                        <InstagramIcon></InstagramIcon>
                    </div>
                </div>
                
            </div>

            <hr  className="border border-white max-w-11/12 mx-auto mt-3"/>

            <div className="text-center mt-2">
                <h1 className="text-[18px] font-bold">All rights reserved to &copy; Hero.io</h1>
            </div>
        </div>
    );
};

export default Footer;