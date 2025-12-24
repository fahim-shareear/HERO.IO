import React, { useState } from 'react';
import Applogo from "../../assets/logo.png";
import { Link } from 'react-router';
import Gitlogo from "../../assets/github-mark-white.svg";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="sticky top-0 z-100 bg-white rounded-b-[13px]">
            <div className="flex items-center justify-between p-3">
                <div className="flex items-center justify-center gap-2">
                    <button onClick={() => setOpen(!open)} className='cursor-pointer lg:hidden'>
                        {open? <X className="text-black"></X> : <Menu className="text-black"></Menu>}
                    </button>
                    <div className="flex items-center justify-center gap-2">
                        <img src={Applogo} alt="applogo"  width={50} height={50}/>
                        <h1 className="font-bold uppercase text-purple-400 text-[18px]">hero.io</h1>
                    </div>
                    <div className={`flex items-start flex-col bg-white text-purple-500 rounded-r-full ${open? "w-35" : "w-3"} left-0 top-21 absolute shadow-xl transition-all duration-400 linear overflow-hidden`}>
                        <Link className={`font-bold text-[13px] lg:hidden p-1 w-20 m-2 p-1 rounded-[10px] hover:bg-purple-500 hover:text-white transform transition-all duration-400 linear cursor-pointer ${open? "opacity-100" : "opacity-0"}`} to={"/"}>Home</Link>
                        <Link className={`font-bold text-[13px] lg:hidden p-1 w-20 m-2 p-1 rounded-[10px] hover:bg-purple-500 hover:text-white transform transition-all duration-400 linear cursor-pointer ${open? "opacity-100" : "opacity-0"}`} to={"/apps"}>Apps</Link>
                        <Link className={`font-bold text-[13px] lg:hidden p-1 w-20 m-2 p-1 rounded-[10px] hover:bg-purple-500 hover:text-white transform transition-all duration-400 linear cursor-pointer ${open? "opacity-100" : "opacity-0"}`} to={"/installation"}>Installation</Link>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Link className="font-bold text-[17px] text-black m-1 hidden lg:flex p-3 rounded-md hover:bg-purple-500 transform transition-all duration-400 linear cursor-pointer" to={"/"}>Home</Link>
                    <Link className="font-bold text-[17px] text-black m-1 hidden lg:flex p-3 rounded-md hover:bg-purple-500 transform transition-all duration-400 linear cursor-pointer" to={"/apps"}>Apps</Link>
                    <Link className="font-bold text-[17px] text-black m-1 hidden lg:flex p-3 rounded-md hover:bg-purple-500 transform transition-all duration-400 linear cursor-pointer" to={"/installation"}>Installation</Link>
                </div>
                <Link to={"https://github.com/fahim-shareear"} target='_blank'>
                    <button className="flex items-center gap-2 bg-purple-500 p-2 rounded-md cursor-pointer w-40 h-10 btn border-none">
                        <img src={Gitlogo} alt="githubprofile" width={30} height={30}/>
                        <h1 className="font-bold p-2 text-white text-[17px]">Contribute</h1>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;