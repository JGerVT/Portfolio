import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { CourseData, ProgrammingData, WebDevelopmentData } from "./CourseWorkData";

export default function CourseWork() {
    return (
        <div id="CourseWorkContainer" className="space-y-[10px]">
            <AccordionWrapper courseData={ProgrammingData} />
            <AccordionWrapper courseData={WebDevelopmentData} />
        </div>
    );
}

function AccordionWrapper(props: { courseData: CourseData }) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    return (
        <div className="CourseContainer min-h-[48px] bg-[#0E233C] rounded flex flex-col items-center overflow-hidden">
            <div
                onClick={() => {
                    setIsCollapsed(!isCollapsed);
                }}
                className="flex px-4 space-x-4 items-center w-full h-[48px] cursor-pointer select-none"
            >
                <FaChevronDown color="white" />
                <p className="text-white text-[17px] font-semibold">
                    {props.courseData.name}
                </p>
            </div>

            <div
                className="accordionWrapper w-full bg-black grid transition-all ease-in-out duration-200"
                style={{ gridTemplateRows: !isCollapsed ? "1fr" : "0fr" }}
            >
                <div className="accordionInnerContent overflow-hidden bg-black px-[20px]">
                    <CreateCourseWork courseData={ProgrammingData} />
                </div>
            </div>
        </div>
    );
}

function CreateCourseWork(props: { courseData: CourseData }) {
    return (
        <div className="py-[10px]">
            {props.courseData.data.map((data) => {
                return (
                    <div className="pb-2 ">
                        <p className="text-[#5594F2] text-[15px] font-semibold">
                            {data.CourseLocation}
                        </p>
                        {data.CourseData.map((courseData_) => {
                            return (
                                <div className="flex justify-between text-gray-300 text-[15px] space-y-[3px]">
                                    <p className=" pl-6">
                                        {courseData_.courseName}
                                    </p>
                                    <p className="text-white pl-6">
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
