import React, { useEffect, useState } from "react";
import Logo from "../../Resources/Logo.svg";
import { SmoothScrollToElement, getCoords } from "../../Utility/utility";

export default function Header() {
    return (
        <div className="fixed flex h-16 justify-center items-center bg-black w-full top-0 z-50">
            <div className="flex px-10 grow h-full">
                <LeftLogo />
                <LinksSection />
            </div>
        </div>
    );
}

function LinksSection() {
    const [selectedNav, setSelectedNav] = useState<string>("");
    const scrollPosOffset = -300;

    useEffect(() => { //* Used for tracking the scroll position and setting the highlighted header bar.
        const About = document.querySelector('#About')
        const Education = document.querySelector('#Education')
        const Skills = document.querySelector('#Skills')
        const Projects = document.querySelector('#Projects')
        const Contact = document.querySelector('#Contact')

        const handleScroll = () => {
            const scrollPos = document.documentElement.scrollTop;

            // For each section, check if scroll is before next section.
            if(About !== null && scrollPos <= getCoords(About).top + scrollPosOffset){
                setSelectedNav("Home");
            }
            else if(Education !== null && scrollPos <= getCoords(Education).top + scrollPosOffset){
                setSelectedNav("About");
            }
            else if(Skills !== null && scrollPos <= getCoords(Skills).top + scrollPosOffset){
                setSelectedNav("Education");
            }
            else if(Projects !== null && scrollPos <= getCoords(Projects).top + scrollPosOffset){
                setSelectedNav("Skills");
            }
            else if(Contact !== null && scrollPos <= getCoords(Contact).top + scrollPosOffset){
                setSelectedNav("Projects");
            }
            // else if(Contact !== null && scrollPos >= getCoords(Contact).top + scrollPosOffset){
            //     setSelectedNav("Contact");
            // }
            else{
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
        <ul className="flex text-gray-300 h-full">
            <Links title="Home" selectedNav={selectedNav} />
            <Links title="About" selectedNav={selectedNav}/>
            <Links title="Education" selectedNav={selectedNav}/>
            <Links title="Skills" selectedNav={selectedNav}/>
            <Links title="Projects" selectedNav={selectedNav}/>
            <li className="flex cursor-pointer h-full items-center px-5 text-white" onClick={() => {SmoothScrollToElement("Contact")}}>
                <div className="cursor-pointer bg-[#3b61f8] rounded-full px-7 h-[36px] flex items-center">
                    <p>Contact</p>
                </div>
            </li>
        </ul>
    );

    function Links(props: { title: string; selectedNav: string }) {
        function onClick(){
            SmoothScrollToElement(props.title);
        }

        return (
            <li
                id={`Link-${props.title}`}
                className="flex cursor-pointer h-full items-center px-5 border-2 border-transparent"
                style={{
                    borderBottom: props.selectedNav === props.title ? "2px solid #3b61f8" : "",
                    color: props.selectedNav === props.title ? "white" : ""
                }}
                onClick={onClick}
            >
                <p>{props.title}</p>
            </li>
        );
    }
}

function LeftLogo() {
    return (
        <div
            className="flex grow text-white items-center space-x-4 cursor-pointer"
            onClick={() => {}}
        >
            <img src={Logo} alt="Logo" className="w-[38px]" />
            <div className="flex space-x-[5px] pb-1">
                <p className="text-[20px]">Jesse</p>
                <p className="text-[20px] text-blue-500">Germain</p>
            </div>
        </div>
    );
}