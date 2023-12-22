import React, { useState } from "react";
import ParentSection from "../../Components/ParentSection";
import ShinyOverlay from "../../Resources/shinyOverlay.png";
import { BiSolidRightArrow } from "react-icons/bi";
import { projectsData } from "./projectsData";

export default function PastWorks() {
    const [canScroll, setCanScroll] = useState<{
        canScrollLeft: boolean;
        canScrollRight: boolean;
    }>({ canScrollLeft: false, canScrollRight: true });

    return (
        <ParentSection
            sectionID="PastWorks"
            backgroundColor="#152b48"
            paddingY="70px"
            backgroundIMG={ShinyOverlay}
        >
            <div className="relative w-full h-full z-[1] pb-20">
                <div className="flex flex-[1.7] flex-col z-10">
                    <p className="text-lg text-[#5594F2]">Past Works</p>
                    {/* This div holds the projects title AND the scroll buttons */}
                    <div className="flex justify-between">
                        <p className="text-2xl text-white font-semibold pb-4">
                            Projects
                        </p>
                        <ScrollButtons />
                    </div>
                    <div
                        id="ProjectsContainer"
                        className="w-full flex space-x-[47px] overflow-x-hidden overflow-y-hidden pb-4"
                    >
                        {projectsData.map((data, i) => (
                            <Project
                                key={"Project_" + i}
                                projectScreenshot={data.projectScreenshot}
                                projectType={data.projectType}
                                projectName={data.projectName}
                                projectText={data.projectText}
                                projectLinks={data.links}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </ParentSection>
    );

    function ScrollButtons() {
        return (
            <div className="flex">
                <button
                    className="w-[25px] h-[25px] rounded-l flex justify-center items-center border border-[#3B61F8]"
                    style={{
                        backgroundColor: canScroll?.canScrollLeft
                            ? "#3B61F8"
                            : "transparent",
                    }}
                >
                    <BiSolidRightArrow color="white" className="rotate-180" />
                </button>
                <button
                    className="w-[25px] h-[25px] rounded-r flex justify-center items-center border border-[#3B61F8]"
                    style={{
                        backgroundColor: canScroll?.canScrollRight
                            ? "#3B61F8"
                            : "transparent",
                    }}
                >
                    <BiSolidRightArrow color="white" className="" />
                </button>
            </div>
        );
    }

    function Project(props: {
        projectScreenshot: string;
        projectType: string;
        projectName: string;
        projectText: string;
        projectLinks: { name: string; link: string }[];
    }) {
        return (
            <div className="w-[285px] bg-[#121723] rounded-lg overflow-hidden text-white flex-shrink-0">
                <img
                    className="h-[200px] bg-black object-cover"
                    src={props.projectScreenshot}
                    alt="Project Pic"
                />
                <div className="h-[200px] flex flex-col justify-between px-4 pt-3 pb-[14px]">
                    <div>
                        <p className="text-[14px] text-[#6B8BFF]">
                            {props.projectType}
                        </p>
                        <p className="text-[18px] font-bold">
                            {props.projectName}
                        </p>
                        <p className="text-[14px]">{props.projectText}</p>
                    </div>
                    <div className="ProjectLinks space-x-2">
                        {props.projectLinks.map((link, i) => (
                            <Link key={"PastWorkLink_" + i} link={link.link} name={link.name} />
                        ))}
                    </div>
                </div>
            </div>
        );

        function Link(props: { name: string; link: string }) {
            if (props.name !== undefined || props.name !== "" || props.link !== undefined || props.link !== "") {
                return (
                    <button className="h-[26px] px-3 bg-[#3B61F8] rounded text-[12px] font-semibold">
                        {props.name}
                    </button>
                );
            }
            else{
                return (<></>)
            }
        }
    }
}
