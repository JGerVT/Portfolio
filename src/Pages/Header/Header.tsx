import React, { useEffect, useState } from "react";
import Logo from "../../Resources/Logo.svg";
import { SmoothScrollToElement, getCoords } from "../../Utility/utility";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
    return (
        <nav className="fixed flex h-16 justify-center items-center bg-black w-full top-0 z-50">
            <div className="flex px-10 grow h-full max-sm:px-4 justify-between">
                <LeftLogo />
                <ul className=" text-gray-300 h-full hidden lg:flex">
                    <LinksSection />
                </ul>
                <LinksSectionDropDown />
            </div>
        </nav>
    );
}

function LinksSectionDropDown() {
    const [isCollapsed, setIsCollapsed] = useState(true);

    return (
        <button className="hidden max-lg:flex w-[40px] justify-center items-center" onClick={()=>{setIsCollapsed(!isCollapsed)}}>
            <GiHamburgerMenu color="#3B61F8" size={"20px"} />
            <div className="dropdownWrapper absolute top-full right-0 grid transition-all ease-in-out duration-200"
                style={{ gridTemplateRows: !isCollapsed ? "1fr" : "0fr" }}
            >

                <div className="dropDown overflow-hidden w-[250px] bg-[#101219] rounded-bl-lg">
                    <ul className="flex flex-col text-gray-300 h-full my-2 px-6 mb-[20px]">
                        <LinksSection />
                    </ul>
                </div>
            </div>
        </button>
    );
}

function LinksSection() {
    const [selectedNav, setSelectedNav] = useState<string>("");
    const scrollPosOffset = -300;

    useEffect(() => {
        //* Used for tracking the scroll position and setting the highlighted header bar.
        const About = document.querySelector("#About");
        const Education = document.querySelector("#Education");
        const Skills = document.querySelector("#Skills");
        const Projects = document.querySelector("#Projects");
        const Contact = document.querySelector("#Contact");

        const handleScroll = () => {
            const scrollPos = document.documentElement.scrollTop;

            // For each section, check if scroll is before next section.
            if (
                About !== null &&
                scrollPos <= getCoords(About).top + scrollPosOffset
            ) {
                setSelectedNav("Home");
            } else if (
                Education !== null &&
                scrollPos <= getCoords(Education).top + scrollPosOffset
            ) {
                setSelectedNav("About");
            } else if (
                Skills !== null &&
                scrollPos <= getCoords(Skills).top + scrollPosOffset
            ) {
                setSelectedNav("Education");
            } else if (
                Projects !== null &&
                scrollPos <= getCoords(Projects).top + scrollPosOffset
            ) {
                setSelectedNav("Skills");
            } else if (
                Contact !== null &&
                scrollPos <= getCoords(Contact).top + scrollPosOffset
            ) {
                setSelectedNav("Projects");
            } else {
                setSelectedNav("");
            }
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        // <ul className="flex text-gray-300 h-full max-[1000px]:hidden">
        <>
            <Links title="Home" selectedNav={selectedNav} />
            <Links title="About" selectedNav={selectedNav} />
            <Links title="Education" selectedNav={selectedNav} />
            <Links title="Skills" selectedNav={selectedNav} />
            <Links title="Projects" selectedNav={selectedNav} />
            <li
                className="flex flex-1 h-full cursor-pointer items-center px-5 text-white max-lg:h-[50px]"
                onClick={() => {
                    SmoothScrollToElement("Contact");
                }}
            >
                <div className="cursor-pointer bg-[#3b61f8] rounded-full px-7 h-[36px] flex items-center max-lg:mb-[20px]">
                    <p>Contact</p>
                </div>
            </li>
        </>
        // </ul>
    );
}
function Links(props: { title: string; selectedNav: string }) {
    function onClick() {
        SmoothScrollToElement(props.title);
    }

    return (
        <li
            id={`Link-${props.title}`}
            className="flex flex-shrink-0 cursor-pointer h-full items-center px-5 border-transparent lg:border-b-2 lg:border-l-0 max-lg:border-l-2  max-lg:h-[50px]"
            style={{
                borderColor:
                    props.selectedNav === props.title
                        ? "#3b61f8"
                        : "transparent",
                color: props.selectedNav === props.title ? "white" : "",
            }}
            onClick={onClick}
        >
            <p>{props.title}</p>
        </li>
    );
}

function LeftLogo() {
    return (
        <div
            className="flex text-white items-center space-x-4"
            onClick={() => {}}
        >
            <img src={Logo} alt="Logo" className="w-[38px]" />
            <div className="flex space-x-[5px] pb-1 max-[350px]:hidden">
                <p className="text-[20px]">Jesse</p>
                <p className="text-[20px] text-blue-500">Germain</p>
            </div>
        </div>
    );
}
