import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import {
    CourseData,
    DatabaseData,
    EnglishData,
    MathData,
    ProgrammingData,
    WebDevelopmentData,
} from "./CourseWorkData";
import AccordionBlob from "../../Resources/courseWorkBlob.svg";

const data: CourseData[] = [
    ProgrammingData,
    WebDevelopmentData,
    DatabaseData,
    MathData,
    EnglishData,
];

export default function CourseWork() {
    return (
        <div id="CourseWorkContainer" className="space-y-[10px]">
            {data.map((data, i) => (
                <AccordionWrapper
                    courseData={data}
                    index={i}
                    key={"Accordion_" + data.name}
                />
            ))}
        </div>
    );
}

function AccordionWrapper(props: { courseData: CourseData; index: number }) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    return (
        <div className="CourseContainer min-h-[48px] bg-[#0E233C] rounded flex flex-col items-center overflow-hidden">
            <HeaderButton />
            <div
                className="accordionWrapper w-full bg-black grid transition-all ease-in-out duration-200"
                style={{ gridTemplateRows: !isCollapsed ? "1fr" : "0fr" }}
            >
                <div className="accordionInnerContent overflow-hidden bg-black px-[20px]">
                    <CreateCourseWork courseData={props.courseData} />
                </div>
            </div>
        </div>
    );

    function HeaderButton() {
        return (
            <div
                onClick={() => {
                    setIsCollapsed(!isCollapsed);
                }}
                className="relative flex px-1 space-x-4 items-center w-full h-[48px] cursor-pointer select-none overflow-hidden shrink-0"
            >
                <img
                    src={AccordionBlob}
                    alt=""
                    className={`absolute max-w-none left-[00px] select-none pointer-events-none`}
                    style={{ top: `${-150 - props.index * 58}px` }}
                />
                <FaChevronDown
                    className="shrink-0"
                    color="white"
                    style={{
                        transform: isCollapsed
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                    }}
                />
                <p className="text-white text-[17px] font-semibold z-10 whitespace-nowrap max-[450px]:text-[15px]">
                    {props.courseData.name}
                </p>
            </div>
        );
    }
}

function CreateCourseWork(props: { courseData: CourseData }) {
    return (
        <div className="py-[10px]">
            {props.courseData.data.map((data, i) => {
                return (
                    <div className="pb-2 " key={"CreateCourseWork_" + i}>
                        <p className="text-[#5594F2] text-[15px] font-semibold">
                            {data.CourseLocation}
                        </p>
                        {data.CourseData.map((courseData_, i) => {
                            return (
                                <div
                                    className="flex justify-between text-gray-300 text-[15px] space-y-[3px]"
                                    key={"CreateCourseWorkSub_" + i}
                                >
                                    {courseData_.link !== undefined ? (
                                        <a className="pl-6 cursor-pointer underline" href={courseData_.link!} target="_blank" rel="noopener noreferrer">
                                            {courseData_.courseName}
                                        </a>
                                    ) : (
                                        <p className="pl-6">
                                            {courseData_.courseName}
                                        </p>
                                    )}

                                    <p className="pl-6">
                                        {courseData_.courseTime}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}
