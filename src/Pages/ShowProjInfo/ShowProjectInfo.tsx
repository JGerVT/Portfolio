import React, { useEffect, useState } from "react";
import { ScrollboxContainer } from "../.././Pages/PastWorks/components/ScrollboxContainer";
import { useProjectContext } from "../../App";
import { projectsData } from "../../Data/projectsData";

export function ShowProjectInfo() {
    const { currentProjectViewing, setCurrentProjectViewing } =
        useProjectContext();
    const [projData, setProjData] = useState<ProjectData | undefined>(
        undefined,
    );

    useEffect(() => {
        if (currentProjectViewing !== "") {
            setProjData(
                projectsData.find(
                    (val) => val.projectName === currentProjectViewing,
                ),
            );

            document.body.style.overflow = 'hidden';
        }
        else{
            document.body.style.overflow = 'unset';
        }
        
    }, [currentProjectViewing]);

    function CreateTechnologies() {
        return (
            <div className="flex flex-wrap pt-3">
                {projData &&
                    projData.technologies.map((val) => (
                        <div
                            className="my-[2px] mr-1 flex-grow-0 rounded-sm border bg-[#3b61f83a] px-3 text-sm text-white select-none"
                            style={{ borderColor: "#3b61f870" }}
                            key={val}
                        >
                            {val}
                        </div>
                    ))}
            </div>
        );
    }

    function CreateLinks() {
        return (
            <>
                {projData && projData.projectLinks && (
                    <>
                        {/* <p className="text font-semibold text-white">Links</p> */}
                        {projData &&
                            projData.projectLinks?.map((val, index) => (
                                <div
                                    key={index} // I know it's generally bad to use index as a key, but I'm doing this since the position of the items will not change
                                    className="my-1 mr-1 inline-flex flex-grow-0 cursor-pointer rounded-sm border bg-[#3bf83e3a] px-3 text-sm text-white select-none"
                                    style={{ borderColor: "#3bf8806f" }}
                                >
                                    <a className="flex items-center justify-center space-x-1" target="_blank" rel="noopener noreferrer" href={val.linkURL}>
                                        <div className="h-[15px]">
                                            {val.linkIcon}
                                        </div>
                                        <p>{val.linkName}</p>
                                    </a>
                                </div>
                            ))}
                    </>
                )}
            </>
        );
    }

    function CreatePageContent() {
        return (
            <>
                {projData &&
                    projData.textBlocks.map((val, index) => (
                        <div key={index} style={{display: "contents"}}>
                            <p className="text pb-2 font-semibold text-white">
                                {val.header}
                            </p>
                            <p className="pb-4 text-sm text-[#aaaaaa]">
                                {val.content}
                            </p>
                        </div>
                    ))}
            </>
        );
    }

    function CreateImageViewer() {
        return (
            <div className="min-h-[200px] overflow-hidden rounded p-4 pb-1">
                <ScrollboxContainer mainTitle="" subTitle="" arrowsOnImage>
                    {projData &&
                        projData.projectImages.map((val, index) => (
                            <div key={index} className="flex h-[inherit] w-[inherit] flex-shrink-0 items-center justify-center">
                                <img
                                    className="max-w-[800px] my-4"
                                    src={`${process.env.PUBLIC_URL}/img/${val}`}
                                    alt=""
                                />
                            </div>
                        ))}
                </ScrollboxContainer>
            </div>
        );
    }

    return (
        <div
            className="fixed bottom-0 left-0 right-0 top-16 z-[25] bg-[#000000ad] backdrop-blur"
            style={{
                transition: "all .1s ease-in-out",
                opacity:
                    currentProjectViewing === ""
                        ? 0
                        : 1,
                pointerEvents:
                    currentProjectViewing === ""
                        ? "none"
                        : "all",
            }}
            onClick={() => {
                setCurrentProjectViewing("");
            }}
        >
            <div
                id="projectInfoContainer"
                className="scroll fixed left-[50%] top-[0] z-50 w-[90%] max-w-[1000px] -translate-x-1/2 translate-y-[20px] justify-self-center overflow-y-auto rounded border bg-[#0c0c0c] p-4 pb-6" // -translate-y-1/2 top-[50%]
                style={{
                    border: "1px solid #ffffff2b"
                }}
                onClick={(e)=>{e.stopPropagation()}}
            >
                {CreateImageViewer()}
                <div className="px-6 flex flex-1 flex-col">
                    {CreateTechnologies()}
                    <p className="mt-3 text-lg text-[#5594F2]">
                        {projData && projData.projectType}
                    </p>
                    <p className="pb-2 text-2xl font-semibold text-white">
                        {projData && projData.projectName}
                    </p>
                    <p className="pb-4 text-sm text-[#aaaaaa]">
                        {projData && projData.projectDescription}
                    </p>

                    {CreatePageContent()}
                    <div className="flex items-center mt-2">
                        {CreateLinks()}
                        <div className="flex flex-1"/>
                        {projData?.projectDate && <p className="text-white opacity-30 text-sm">{projData?.projectDate}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}
