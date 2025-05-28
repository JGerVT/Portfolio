import React from "react";
import styled from "styled-components";
import { useProjectContext } from "../../../App";

const ProjectStyled = styled.div`
    outline: 2px solid transparent;
    margin: 2px;
    cursor: pointer;
    .infoContainer {
        transition: all 0.15s ease-in-out;
        background-color: transparent;
        border-radius: 8px;
    }

    .projInfo {
        transition: all 0.15s ease-in-out;
        opacity: 0;
        bottom: -4px;
    }

    .projInfo {
        opacity: 1;
        background-image: linear-gradient(360deg, black, transparent);
        margin-top: 0px;
        bottom: 0px;

        height: 150px;
    }
    
    &:hover {
        outline: 2px solid #5274ff;
        /* .infoContainer {
            backdrop-filter: blur(1.5px);
            background-color: #0000003e;
        } */
        .projInfo {
            opacity: 1;
            background-image: linear-gradient(360deg, black, transparent);
            margin-top: 0px;
            bottom: 0px;
            /* height: 200px; */
        }
    }
`;

export function Project(props: {
    projectScreenshot: string;
    projectType: string;
    projectName: string;
}) {
    const { setCurrentProjectViewing } = useProjectContext();

    return (
        <ProjectStyled
            className="relative w-[inherit] max-w-[398px] flex-shrink-0 rounded-lg bg-[#121723] text-white"
            onClick={() => {
                setCurrentProjectViewing(props.projectName);
            }}
        >
            <div className="overflow-hidden rounded-lg">
                <img
                    className="center h-[280px] bg-black object-cover"
                    src={`${process.env.PUBLIC_URL}/img/${props.projectScreenshot}`}
                    alt="Project Pic"
                />
            </div>
            <div className="infoContainer absolute bottom-0 left-0 right-0 top-0 overflow-hidden rounded-lg">
                <div className="projInfo absolute bottom-0 left-0 right-0 flex flex-col justify-between px-4 pb-[5px] pt-3">
                    <div className="absolute bottom-0">
                        <p className="text-[14px] text-[#6B8BFF]">
                            {props.projectType}
                        </p>
                        <p className="pb-2 text-[18px] font-bold">
                            {props.projectName}
                        </p>
                    </div>
                </div>
            </div>
        </ProjectStyled>
    );
}
