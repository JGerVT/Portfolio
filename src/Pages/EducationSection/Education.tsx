import React from "react";
import CourseWork from "./CourseWork";
import graduation from "../../Resources/graduate.svg";
import Champlain_College_seal from "../../Resources/Champlain_College_seal.png";
import CCV_seal from "../../Resources/ccvSVG.png";
import DegreesBlob from "../../Resources/degreesBlob.svg";
import ParentSection from "../../Components/ParentSection";

export function Education() {
    return (
        <ParentSection
            sectionID="Education"
            backgroundColor="#121723"
            paddingY="0px"
        >
            <div className="flex flex-1 space-x-20 justify-between max-[1400px]:space-x-10 max-lg:flex-col max-lg:space-y-16 max-lg:space-x-0
                py-[90px] max-sm:py-[35px]
            ">
                <div
                    id="EducationCourseWork"
                    className="flex flex-[1.7] flex-col max-[1400px]:flex-[1.1]"
                >
                    <p className="text-lg text-[#5594F2]">Education</p>
                    <p className="text-2xl text-white font-semibold pb-4">
                        Course Work
                    </p>
                    <CourseWork />
                </div>
                <Degrees />
            </div>
        </ParentSection>
    );
}

function Degrees() {
    return (
        <div
            id="EducationDegrees"
            className="relative flex flex-1 sm:min-h-[460px]  rounded-lg bg-[#0E233C] p-6 flex-col overflow-hidden pointer-events-none max-sm:flex-auto"
        >
            <img
                src={DegreesBlob}
                className="absolute max-w-none left-[-200px] top-[50px] z-0"
                alt=""
            />
            <div className="flex space-x-4 h-[23px] mb-6 items-center z-10">
                <img
                    src={graduation}
                    alt="Graduation Icon"
                    className="w-[20px]"
                />
                <p className="text-white font-bold text-xl">Degrees</p>
            </div>

            <div className="flex flex-1 flex-col justify-between mb-4 z-10 max-[1000px]:space-y-4">
                <Degree
                    CollegeIcon={Champlain_College_seal}
                    CollegeName="Champlain College"
                    Date="(Aug 2020 - Dec 2022)"
                    Degree="Bachelors of Science (BS)"
                    Major="Software Development"
                    GPA="4.0 / 4.0"
                />
                <div className="border-b opacity-[.1]" />
                <Degree
                    CollegeIcon={CCV_seal}
                    CollegeName="Community College of Vermont"
                    Date="(Aug 2017 - May 2020)"
                    Degree="Associate of Arts (AA)"
                    Major="Liberal Studies"
                    GPA="3.9 / 4.0"
                />
            </div>
        </div>
    );

    function Degree(props: {
        CollegeIcon: string;
        CollegeName: string;
        Date: string;
        Degree: string;
        Major: string;
        GPA: string;
    }) {
        return (
            <div className="flex space-x-4">
                <img
                    src={props.CollegeIcon}
                    className="w-[70px] object-scale-down object-top pt-2"
                    alt="Champlain College Seal"
                />
                <div className="text-white space-y-[3px]">
                    <div className="flex space-x-2">
                        <p className="font-bold">{props.CollegeName}</p>
                    </div>
                    <p className="text-gray-300">{props.Date}</p>
                    <div className="flex space-x-2 max-sm:flex-col max-sm:space-x-0">
                        <p className="font-bold w-[70px]">Degree</p>
                        <p className="text-gray-300">{props.Degree}</p>
                    </div>
                    <div className="flex space-x-2 max-sm:flex-col max-sm:space-x-0">
                        <p className="font-bold w-[70px]">Major</p>
                        <p className="text-gray-300">{props.Major}</p>
                    </div>
                    <div className="flex space-x-2 max-sm:flex-col max-sm:space-x-0">
                        <p className="font-bold w-[70px]">GPA</p>
                        <p className="text-gray-300">{props.GPA}</p>
                    </div>
                </div>
            </div>
        );
    }
}
