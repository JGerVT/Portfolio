import React from "react";
import Logo from "../../Resources/Logo.svg";

export default function Header() {
    return (
        <div className="fixed flex h-16 justify-center items-center bg-[#101219] w-full top-0 z-50">
            <div className="flex px-10 grow h-full">
                <LeftLogo />
                <Links />
            </div>
        </div>
    );
}

function Links() {
    return (
        <ul className="flex text-gray-300 h-full">
            <li className="flex cursor-pointer h-full items-center px-5 border-2 border-transparent border-b-blue-500">
                <p>Home</p>
            </li>
            <li className="flex cursor-pointer h-full items-center px-5 border-2  border-transparent">
                <p>About</p>
            </li>
            <li className="flex cursor-pointer h-full items-center px-5 border-2  border-transparent">
                <p>Education</p>
            </li>
            <li className="flex cursor-pointer h-full items-center px-5 border-2  border-transparent">
                <p>Past Works</p>
            </li>
            <li className="flex cursor-pointer h-full items-center px-5 text-white">
                <div className="cursor-pointer bg-[#3b61f8] rounded-full px-7 h-10 flex items-center">
                    <p>Contact</p>
                </div>
            </li>
        </ul>
    );
}

function LeftLogo() {
    return (
        <div className="flex grow text-white items-center space-x-4 ">
            <img src={Logo} alt="Logo" className="w-[38px]" />
            <div className="flex space-x-[5px] pb-1">
                <p className="text-[20px]">Jesse</p>
                <p className="text-[20px] text-[#4C6FF9]">Germain</p>
            </div>
        </div>
    );
}
