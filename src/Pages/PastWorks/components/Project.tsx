import React from "react";
import styled from "styled-components";

const ProjectStyled = styled.div`
    cursor: pointer;
    .infoContainer {
        transition: all 0.15s ease-in-out;
        background-color: transparent;
    }
    .projInfo {
        transition: all 0.15s ease-in-out;
        opacity: 0;
    }

    &:hover {
        .infoContainer {
            backdrop-filter: blur(1.5px);
            background-color: #0000003e;
        }

        .projInfo {
            opacity: 1;
            background-image: linear-gradient(360deg, black, transparent);
        }
    }
`;

export function Project(props: {
    projectScreenshot: string;
    projectType: string;
    projectName: string;
    projectText: string;
    projectLinks: { name: string; link: string }[];
}) {
    return (
        <ProjectStyled className="relative w-[398px] bg-[#121723] rounded-lg overflow-hidden text-white flex-shrink-0">
            <img
                className="h-[280px] bg-black object-cover center"
                src={props.projectScreenshot}
                alt="Project Pic"
            />
            <div className="infoContainer absolute bottom-0 right-0 top-0 left-0">
                <div className="projInfo absolute bottom-0 left-0 right-0 flex flex-col justify-between px-4 pt-3 pb-[5px]">
                    <div>
                        <p className="text-[14px] text-[#6B8BFF]">
                            {props.projectType}
                        </p>
                        <p className="text-[18px] font-bold pb-2">
                            {props.projectName}
                        </p>
                        {/* <p className="text-[13px]">{props.projectText}</p> */}
                    </div>
                    {/* <div className="ProjectLinks space-x-2">
                        {props.projectLinks.map((link, i) => (
                            <Link key={"PastWorkLink_" + i} link={link.link} name={link.name} />
                        ))}
                    </div> */}
                </div>
            </div>
        </ProjectStyled>
    );

    function Link(props: { name: string; link: string }) {
        if (
            props.name !== undefined ||
            props.name !== "" ||
            props.link !== undefined ||
            props.link !== ""
        ) {
            return (
                <button className="h-[26px] px-3 bg-[#3B61F8] rounded text-[12px] font">
                    {props.name}
                </button>
            );
        } else {
            return <></>;
        }
    }
}
