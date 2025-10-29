import React, { useEffect, useRef, useState } from "react";
import { ScrollboxContainer } from "../.././Pages/PastWorks/components/ScrollboxContainer";
import { useProjectContext } from "../../App";
import { projectsData } from "../../Data/projectsData";
import { IoClose } from "react-icons/io5";

export function ShowProjectInfo() {
    const { currentProjectViewing, setCurrentProjectViewing } =
        useProjectContext();
    const [projData, setProjData] = useState<ProjectData | undefined>(
        undefined,
    );
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (currentProjectViewing !== "") {
            setProjData(
                projectsData.find(
                    (val) => val.projectName === currentProjectViewing,
                ),
            );

            // Prevent scrolling when showing content
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [currentProjectViewing]);

    // Exit using Escape key
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setCurrentProjectViewing("");
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <div
            className="fixed bottom-0 left-0 right-0 top-0 z-[25] bg-[#111111] bg-opacity-90 backdrop-blur-xl"
            style={{
                transition: "all .2s ease-in-out",
                opacity: currentProjectViewing === "" ? 0 : 1,
                pointerEvents: currentProjectViewing === "" ? "none" : "all",
            }}
            onClick={() => {
                setCurrentProjectViewing("");
            }}
        >
            <div className="ProjectInfo absolute bottom-0 left-0 right-0 top-[62px] overflow-auto pt-[25px]">
                <CloseBTN containerRef={containerRef} />
                <div
                    ref={containerRef}
                    className="mx-auto mb-6 w-[88%] max-w-[900px]"
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    {currentProjectViewing !== "" && (
                        <>
                            <ImageViewer projectData={projData} />
                            <div className="flex justify-between gap-2 pt-6">
                                <CreateTechnologies projectData={projData} />
                                {projData?.projectDate && (
                                    <div className="dateCreated shrink-0 text-sm text-white opacity-50">
                                        {projData?.projectDate}
                                    </div>
                                )}
                            </div>
                            <CreateProjectTitle projectData={projData} />
                            <CreatePageContent projectData={projData} />
                            <CreateLinks projectData={projData} />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

function CloseBTN(props: { containerRef?: React.RefObject<HTMLDivElement> }) {
    const [closeBTNPos, setCloseBTNPos] = useState({ x: 0, y: 0 });
    const { setCurrentProjectViewing } = useProjectContext();

    useEffect(() => {
        const handleResize = () => {
            let left =
                props.containerRef?.current?.getClientRects()[0].right || 0;

            console.log(window.innerWidth);

            if (window.innerWidth < 600) left = left - 15;

            // const top = window.innerWidth < 1200 ? 70 : 80;
            setCloseBTNPos({ x: left, y: 80 });
        };

        window.addEventListener("resize", handleResize);

        handleResize();
    }, []);

    return (
        <div
            className="fixed right-[80px] top-[80px] flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-full bg-[#1f265c] opacity-80 transition hover:opacity-100"
            style={{
                left: `${closeBTNPos.x}px`,
                top: `${closeBTNPos.y}px`,
                zIndex: 30,
            }}
            onClick={() => setCurrentProjectViewing("")}
        >
            <IoClose size={22} color="#525bf6" />
        </div>
    );
}

function CreateProjectTitle(props: { projectData?: ProjectData }) {
    return (
        <div className="mt-0 flex flex-col">
            <p className="mt-3 text-lg text-[#5594F2]">
                {props.projectData && props.projectData.projectType}
            </p>
            <p className="pb-2 text-2xl font-semibold text-white">
                {props.projectData && props.projectData.projectName}
            </p>
            <p className="whitespace-break-spaces pb-4 text-sm text-[#aaaaaa]">
                {props.projectData && props.projectData.projectDescription}
            </p>
        </div>
    );
}

function CreateTechnologies(props: { projectData?: ProjectData }) {
    return (
        <div className="flex flex-wrap">
            {props.projectData &&
                props.projectData.technologies.map((val) => (
                    <div
                        className="my-[2px] mr-1 flex-grow-0 select-none rounded-sm border bg-[#3b61f83a] px-3 text-sm text-white"
                        style={{ borderColor: "#3b61f870" }}
                        key={val}
                    >
                        {val}
                    </div>
                ))}
        </div>
    );
}

function CreateLinks(props: { projectData?: ProjectData }) {
    return (
        <>
            {props.projectData && props.projectData.projectLinks && (
                <>
                    {/* <p className="text font-semibold text-white">Links</p> */}
                    {props.projectData &&
                        props.projectData.projectLinks?.map((val, index) => (
                            <div
                                key={index} // I know it's generally bad to use index as a key, but I'm doing this since the position of the items will not change
                                className="mr-1 mt-3 inline-flex flex-grow-0 cursor-pointer select-none rounded border px-4 py-2 text-sm text-white"
                                style={{ borderColor: "#3bf8806f" }}
                            >
                                <a
                                    className="flex items-center justify-center gap-2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={val.linkURL}
                                >
                                    <div className="flex h-[16px] items-center justify-center text-[16px]">
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

function CreatePageContent(props: { projectData?: ProjectData }) {
    return (
        <>
            {props.projectData &&
                props.projectData.textBlocks.map((val, index) => {
                    const contentLines = val.content.split("\n");
                    const newContentLines = contentLines.map((line) => {
                        if (line.startsWith("- ")) {
                            return (
                                <li key={line} className="ml-[16px]">
                                    {line.slice(2)}
                                </li>
                            );
                        } else if (line === "") {
                            return <br key={line} />;
                        } else {
                            return <p key={line}>{line}</p>;
                        }
                    });
                    return (
                        <div key={index} style={{ display: "contents" }}>
                            <p className="text pb-1 font-semibold text-white">
                                {val.header}
                            </p>
                            <p className="text-sm text-[#aaaaaa]">
                                {newContentLines}
                            </p>
                        </div>
                    );
                })}
        </>
    );
}

//                             <p className="whitespace-break-spaces pb-4 text-sm text-[#aaaaaa]">

function ImageViewer(props: { projectData?: ProjectData }) {
    return (
        <div className="align-self-center mx-auto max-w-[88%] overflow-hidden rounded p-3 pb-1">
            <ScrollboxContainer
                mainTitle=""
                subTitle=""
                arrowsOnImage
                focusOnInit
            >
                {props.projectData &&
                    props.projectData.projectImages.map((val, index) => (
                        <div
                            key={index}
                            className="flex h-[inherit] w-[inherit] flex-shrink-0 items-center justify-center"
                            style={{
                                borderRadius: "8px",
                                overflow: "hidden",
                                border: "1px solid #424246",
                            }}
                        >
                            <img
                                // className="my-4"
                                src={`${process.env.PUBLIC_URL}/img/${val}`}
                                alt=""
                                style={{
                                    overflow: "hidden",
                                    scale: "1.004", // Add this to remove slight border edges around images
                                }}
                            />
                        </div>
                    ))}
            </ScrollboxContainer>
        </div>
    );
}
