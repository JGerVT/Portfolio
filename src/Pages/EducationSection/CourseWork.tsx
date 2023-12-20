import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { CourseData, DatabaseData, EnglishData, MathData, ProgrammingData, WebDevelopmentData } from "./CourseWorkData";
import AccordionBlob from '../../Resources/courseWorkBlob.svg'

const data: CourseData[] = [ProgrammingData, WebDevelopmentData, DatabaseData, MathData, EnglishData]

export default function CourseWork() {
    return (
        <div id="CourseWorkContainer" className="space-y-[10px]">
            {
                data.map((data, i)=>
                    <AccordionWrapper courseData={data} index={i} key={"Accordion_" + data.name} />
                )
            }
            
        </div>
    );
}

function AccordionWrapper(props: { courseData: CourseData, index: number }) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    return (
        <div className="CourseContainer min-h-[48px] bg-[#0E233C] rounded flex flex-col items-center overflow-hidden">
            <HeaderButton/>
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
        console.log(props.index);
        

        return <div
            onClick={() => {
                setIsCollapsed(!isCollapsed);
            } }
            className="relative flex px-1 space-x-4 items-center w-full h-[48px] cursor-pointer select-none overflow-hidden"
        >
            <img src={AccordionBlob} alt="" className={`absolute max-w-none left-[00px] select-none pointer-events-none`}
                style={{top: `${-150 - (props.index * 58)}px`}}
        />
            <FaChevronDown color="white" style={{transform: isCollapsed ? "rotate(180deg)" : "rotate(0deg)"}}/>
            <p className="text-white text-[17px] font-semibold z-10">
                {props.courseData.name}
            </p>
        </div>;
    }
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
