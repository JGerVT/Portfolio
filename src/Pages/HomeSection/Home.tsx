import React from "react";
import { HomeBackground } from "./HomeBackground";
import ProgrammerSVG from "../../Resources/ProgrammerSVG.svg";
import { SmoothScrollToElement } from "../../Utility/utility";

export default function Home() {
    return (
        <div
            id="Home"
            className="w-full relative max-w-[1920px] h-[100vh] min-h-[600px] max-h-[980px] bg-[#121723] pt-16 overflow-hidden items-center object-center justify-center"
        >
            <HomeBackground />
            <div
                id="Content"
                className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex text-white z-10 justify-between 
                w-[80%]  max-w-[1400px] px-14"
            >
                <div
                    id="leftHomeContent"
                    className="flex flex-col text-left space-y-3 w-[500px] flex-shrink-0"
                >
                    <p className="text-3xl text-[#3B61F8]">Jesse Germain</p>
                    <h1 className="text-4xl font-bold pb-4">
                        Full Stack Developer 
                        <span className="text-[#3B61F8]">&nbsp;&<br/>Software Developer</span>
                    </h1>
                    <p>
                        As a Full Stack Developer and Software Engineer, I'm
                        passionate about creating functional and user-friendly
                        applications. While I'm in the early stages of my
                        career, I'm eager to contribute my skills and learn from
                        experienced professionals in the field.
                    </p>

                    <div id="homeButtons" className="flex space-x-8 pt-8">
                        <button
                            className="w-[150px] h-[45px]  h-50px text-center flex justify-center items-center rounded-full bg-[#3B61F8] cursor-pointer"
                            onClick={() => {
                                SmoothScrollToElement("Contact");
                            }}
                        >
                            Contact Me
                        </button>
                        <button
                            className="w-[150px] h-[45px] h-50px text-center flex justify-center items-center rounded-full border border-[#3B61F8]  cursor-pointer"
                            onClick={() => {
                                SmoothScrollToElement("Projects");
                            }}
                        >
                            View Projects
                        </button>
                    </div>
                </div>


                <div id="rightHomeContent" className="flex flex-shrink-0 max-[1400px]:invisible">
                    <img
                        src={ProgrammerSVG}
                        className="min-w-[500px] pointer-events-none select-none"
                        alt="Programmer Icon"
                    />
                </div>
            </div>
        </div>
    );
}
