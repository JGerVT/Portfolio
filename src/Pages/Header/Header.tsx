import React from "react";
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
    return (
        <ul className="flex text-gray-300 h-full">
            <Links title="Home" isSelected />
            <Links title="About" />
            <Links title="Education" />
            <Links title="Skills" />
            <Links title="Past Works" />
            <li className="flex cursor-pointer h-full items-center px-5 text-white">
                <div className="cursor-pointer bg-[#3b61f8] rounded-full px-7 h-[36px] flex items-center">
                    <p>Contact</p>
                </div>
            </li>
        </ul>
    );

    function Links(props: { title: string; isSelected?: boolean }) {
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
                    borderBottom: props.isSelected ? "2px solid #3b61f8" : "",
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
