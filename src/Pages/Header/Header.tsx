import React, { useEffect, useState } from "react";
import Logo from "../../Resources/Logo.svg";

export default function Header() {
    return (
        <div className="fixed flex h-16 justify-center items-center bg-black w-full top-0 z-50">
            <div className="flex px-10 grow h-full">
                <LeftLogo />
                <Links />
            </div>
        </div>
    );
}

function Links() {
    const [selectedNav, setSelectedNav] = useState<string>("");


    useEffect(() => { //* Used for tracking the scroll position and setting the highlighted header bar.
        const Home = document.querySelector('#Home')
        const About = document.querySelector('#About')
        const Education = document.querySelector('#Education')
        const Skills = document.querySelector('#Skills')
        const PastWorks = document.querySelector('#PastWorks')
        const Contact = document.querySelector('#Contact')

        const handleScroll = () => {
            if(Home !== null && isInViewport(Home)){
                setNav("Home");
            }
            else if(About !== null && isInViewport(About)){
                setNav("About");
            }
            else if(Education !== null && isInViewport(Education)){
                setNav("Education");
            }
            else if(Skills !== null && isInViewport(Skills)){
                setNav("Skills");
            }
            else if(PastWorks !== null && isInViewport(PastWorks)){
                setNav("Past Works");
            }
            else if(Contact !== null && isInViewport(Contact)){
                setNav("Contact");
            }
            else{
                setNav("Contact"); 
            }
        };
      
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    function setNav(name: string){
        if (name != selectedNav){
            setSelectedNav(name)
        }
    }

    function isInViewport(el: Element | undefined) {
        if(el !== undefined){
            const rect = el.getBoundingClientRect();
            return (rect.bottom > 200) // Offset for scroll check is 200 px
        }
    }
    

    return (
        <ul className="flex text-gray-300 h-full">
            <Links title="Home" selectedNav={selectedNav} />
            <Links title="About" selectedNav={selectedNav}/>
            <Links title="Education" selectedNav={selectedNav}/>
            <Links title="Skills" selectedNav={selectedNav}/>
            <Links title="Past Works" selectedNav={selectedNav}/>
            <li className="flex cursor-pointer h-full items-center px-5 text-white">
                <div className="cursor-pointer bg-[#3b61f8] rounded-full px-7 h-[36px] flex items-center">
                    <p>Contact</p>
                </div>
            </li>
        </ul>
    );

    function Links(props: { title: string; selectedNav: string }) {
        function onClick(){
            if(props.title === "Home"){
                window.scroll({ top: 0, behavior: "smooth" });
            }
            else {
                // Jump to element with id of button name (Spaces are removed)
                if(document.querySelector('#'+ props.title)){
                    const elmnt = document.querySelector('#'+ props.title) as HTMLElement;
                    var topOfElement = elmnt.offsetTop - 64; // 64 is height of Header bar
                    window.scroll({ top: topOfElement, behavior: "smooth" });
                }

            }
        }

        return (
            <li
                id={`Link-${props.title}`}
                className="flex cursor-pointer h-full items-center px-5 border-2 border-transparent"
                style={{
                    borderBottom: props.selectedNav === props.title ? "2px solid #3b61f8" : "",
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
                <p className="text-[20px] text-[#4C6FF9]">Germain</p>
            </div>
        </div>
    );
}
