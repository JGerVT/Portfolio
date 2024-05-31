import React from "react";
import { HomeBackground } from "./HomeBackground";
import ProgrammerSVG from "../../Resources/ProgrammerSVG.svg";
import { SmoothScrollToElement } from "../../Utility/utility";
import ParentSection from "../../Components/ParentSection";

export default function Home() {
    return (
        <div
            id="Home"
            className="w-full relative max-w-[1920px] h-[100vh] min-h-[600px] max-h-[980px] bg-[#121723] overflow-hidden"
        >
            <HomeBackground />
            <div className="flex h-full items-center">
                <ParentSection sectionID="HomeSection" key={"Home"}>
                    <div className="flex justify-between min-h-[383px]">
                        <div
                            id="leftHomeContent"
                            className="flex flex-col text-left space-y-3 max-w-[520px] z-10 text-white"
                        >
                            <p className="text-2xl text-[#3B61F8]">
                                Welcome to my Portfolio
                            </p>
                            <h1 className="text-4xl font-bold pb-4">
                                I'm a Full Stack Developer
                                <span className="text-[#3B61F8]">
                                    &nbsp;&
                                    <br />
                                    Software Developer
                                </span>
                            </h1>
                            <p className="text-[#c4c4c4]">
                                As a Full Stack Developer and Software Engineer,
                                I'm passionate about creating functional and
                                user-friendly applications. While I'm in the
                                early stages of my career, I'm eager to
                                contribute my skills and learn from experienced
                                professionals in the field.
                            </p>

                            <div
                                id="homeButtons"
                                className="flex space-x-8 pt-8 max-[450px]:flex-col max-[450px]:space-x-0 max-[450px]:space-y-4 "
                            >
                                <button
                                    className="min-w-[150px] h-[45px]  h-50px text-center flex justify-center items-center rounded-full bg-[#3B61F8] cursor-pointer"
                                    onClick={() => {
                                        SmoothScrollToElement("Contact");
                                    }}
                                >
                                    Contact Me
                                </button>
                                <button
                                    className="min-w-[150px]  h-[45px] h-50px text-center flex justify-center items-center rounded-full border border-[#3B61F8]  cursor-pointer"
                                    onClick={() => {
                                        SmoothScrollToElement("Projects");
                                    }}
                                >
                                    View Projects
                                </button>
                            </div>
                        </div>

                        <div
                            id="rightHomeContent"
                            className="flex flex-shrink-0 max-xl:hidden z-10"
                        >
                            <img
                                src={ProgrammerSVG}
                                className="min-w-[500px] pointer-events-none select-none"
                                alt="Programmer Icon"
                            />
                        </div>
                    </div>
                </ParentSection>
            </div>
        </div>
    );
}
