import React from "react";
import ParentSection from "../../Components/ParentSection";
import LogoSVG from "../../Resources/Logo.svg";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SmoothScrollToElement } from "../../Utility/utility";

export default function Footer() {
    return (
        <ParentSection
            sectionID="Footer"
            paddingY="50px"
            backgroundColor="black"
        >
            <div className="flex flex-1">
                <div className="flex flex-1 h-[250px] justify-between">
                    <Logo />
                    <Sitemap />
                    <Resources />
                    <Links />
                </div>
            </div>
        </ParentSection>
    );

    function Logo() {
        return (
            <div className="flex items-start text-white space-x-4 border-r ml-6 pr-[100px] border-white border-opacity-20 pt-2">
                <img src={LogoSVG} alt="Logo" className="w-[38px]" />
                <div className="mt-[2px] pl-1">
                    <p className="text-[20px] leading-3">Jesse</p>
                    <p className="text-[20px] text-blue-500">Germain</p>
                </div>
            </div>
        );
    }

    function Sitemap() {
        return (
            <div className="flex items-start text-gray-300 space-x-4 ml-6  pt-2">
                <div className="mt-1 pl-2">
                    <p className="text-blue-500">Sitemap</p>
                    <p
                        className="cursor-pointer hover:text-white"
                        onClick={() => {
                            SmoothScrollToElement("Home");
                        }}
                    >
                        Home
                    </p>
                    <p
                        className="cursor-pointer hover:text-white"
                        onClick={() => {
                            SmoothScrollToElement("About");
                        }}
                    >
                        About
                    </p>
                    <p
                        className="cursor-pointer hover:text-white"
                        onClick={() => {
                            SmoothScrollToElement("Education");
                        }}
                    >
                        Education
                    </p>
                    <p
                        className="cursor-pointer hover:text-white"
                        onClick={() => {
                            SmoothScrollToElement("Skills");
                        }}
                    >
                        Skills
                    </p>
                    <p
                        className="cursor-pointer hover:text-white"
                        onClick={() => {
                            SmoothScrollToElement("PastWorks");
                        }}
                    >
                        Past Works
                    </p>
                    <p
                        className="cursor-pointer hover:text-white"
                        onClick={() => {
                            SmoothScrollToElement("Contact");
                        }}
                    >
                        Contact
                    </p>
                </div>
            </div>
        );
    }
    function Resources() {
        return (
            <div className="flex items-start text-gray-300 space-x-4 ml-6  pt-2">
                <div className="mt-1 pl-2">
                    <p className="text-blue-500">Resources</p>
                    <a
                        className="hover:text-white"
                        href="https://react-icons.github.io/react-icons/"
                    >
                        React Icons
                    </a>
                </div>
            </div>
        );
    }

    function Links() {
        return (
            <div className="flex flex-col items-start text-gray-300 space-y-4 cursor-pointer ml-6  pt-2">
                <div className="w-[48px] h-[48px] rounded-full border-2 border-[#3b61f8] flex justify-center items-center">
                    <FaLinkedin color="white" size={"26px"} />
                </div>
                <div className="w-[48px] h-[48px] rounded-full border-2 border-[#3b61f8] flex justify-center items-center">
                    <FaGithub color="white" size={"26px"} />
                </div>
                <div className="w-[48px] h-[48px] rounded-full border-2 border-[#3b61f8] flex justify-center items-center">
                    <MdEmail color="white" size={"26px"} />
                </div>
            </div>
        );
    }
}