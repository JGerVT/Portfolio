import React from "react";
import CourseWork from "./CourseWork";
import graduation from "../../Resources/graduate.svg";
import Champlain_College_seal from "../../Resources/Champlain_College_seal.png";
import CCV_seal from "../../Resources/ccvSVG.png";
import DegreesBlob from "../../Resources/degreesBlob.svg";

export function Education() {
    return (
        <div
            id="EducationSection"
            className="flex w-full bg-[#121723] justify-center pt-14 text-left pb-14 mt-10"
        >
            <div className=" flex flex-1 max-w-[1400px] px-14 w-[80%] justify-between space-x-20">
                <div
                    id="EducationCourseWork"
                    className="flex flex-[1.5] flex-col"
                >
                    <p className="text-lg text-[#5594F2]">Education</p>
                    <p className="text-2xl text-white font-semibold pb-4">
                        Relevant Course Work
                    </p>
                    <CourseWork />
                </div>
                <Degrees/>
            </div>
        </div>
    );
}


function Degrees() {
    return <div
        id="EducationDegrees"
        className="relative flex flex-1 h-[420px] rounded-lg bg-[#0E233C] p-6 flex-col overflow-hidden"
    >
        <img src={DegreesBlob} className="absolute max-w-none left-[-200px] top-[50px] z-0" alt="" />
        <div className="flex space-x-4 h-[23px] mb-6 items-center z-10">
            <img
                src={graduation}
                alt="Graduation Icon"
                className="w-[20px]" />
            <p className="text-white font-bold text-lg">Degrees</p>
        </div>

        <div className="flex flex-1 flex-col justify-between mb-8 z-10">
            <div className="flex space-x-4">
                <img
                    src={Champlain_College_seal}
                    className="w-[70px] object-scale-down object-top pt-2"
                    alt="Champlain College Seal" />
                <div className="text-white">
                    <div className="flex space-x-2">
                        <p className="font-bold">
                            Champlain College
                        </p>
                    </div>
                    <p>(Aug 2020 - Dec 2022)</p>
                    <div className="flex space-x-2">
                        <p className="font-bold">Degree: </p>
                        <p>Bachelors of Science (BS)</p>
                    </div>
                    <div className="flex space-x-2">
                        <p className="font-bold">Major: </p>
                        <p>Software Development</p>
                    </div>
                    <div className="flex space-x-2">
                        <p className="font-bold">GPA: </p>
                        <p>4.0</p>
                    </div>
                </div>
            </div>

            <div className="border-b opacity-[.1]" />

            <div className="flex space-x-4">
                <img
                    src={CCV_seal}
                    className="w-[70px] object-scale-down object-top pt-2"
                    alt="Champlain College Seal" />
                <div className="text-white">
                    <div className="flex space-x-2">
                        <p className="font-bold">
                            Community College of Vermont
                        </p>
                    </div>
                    <p>(Aug 2017 - May 2020)</p>
                    <div className="flex space-x-2">
                        <p className="font-bold">Degree: </p>
                        <p>Associate of Arts (AA)</p>
                    </div>
                    <div className="flex space-x-2">
                        <p className="font-bold">Major: </p>
                        <p>Liberal Studies</p>
                    </div>
                    <div className="flex space-x-2">
                        <p className="font-bold">GPA: </p>
                        <p>3.9</p>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

