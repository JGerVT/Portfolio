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
                <div className="flex flex-1 h-[250px] justify-between max-[1000px]:flex-col max-[1000px]:h-auto max-[1000px]:space-y-6">
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
            <div className="flex items-start text-white space-x-4 border-r pr-[140px] border-white border-opacity-20 pt-2  max-[1000px]:pr:0 max-[1000px]:border-opacity-0">
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
            <div className="flex items-start text-gray-300 space-x-4 ml-6  pt-2 max-[1000px]:ml-0">
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
                            SmoothScrollToElement("Projects");
                        }}
                    >
                        Projects
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
            <div className="flex items-start text-gray-300 space-x-4 ml-6  pt-2 max-[1000px]:ml-0">
                <div className="mt-1 pl-2 flex flex-col">
                    <p className="text-blue-500">Attributions</p>
                    <a
                        href="https://www.vecteezy.com/free-vector/coder"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Coder Vectors by Vecteezy
                    </a>
                    <a
                        className="hover:text-white"
                        href="https://react-icons.github.io/react-icons/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        React Icons
                    </a>
                </div>
            </div>
        );
    }

    function Links() {
        return (
            <div className="flex flex-col items-start text-gray-300 space-y-4 cursor-pointer ml-6  pt-2 max-[1000px]:ml-0 max-[1000px]:flex-row max-[1000px]:space-y-0 max-[1000px]:space-x-6">
                <a
                    className="w-[48px] h-[48px] rounded-full border-2 border-[#3b61f8] flex justify-center items-center"
                    href="https://www.linkedin.com/in/jesse-germain-a6351126b/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin color="white" size={"26px"} />
                </a>
                <a
                    className="w-[48px] h-[48px] rounded-full border-2 border-[#3b61f8] flex justify-center items-center"
                    href="https://github.com/JGerVT"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub color="white" size={"26px"} />
                </a>
                <div className="w-[48px] h-[48px] rounded-full border-2 border-[#3b61f8] flex justify-center items-center">
                    <MdEmail color="white" size={"26px"} />
                </div>
            </div>
        );
    }
}
