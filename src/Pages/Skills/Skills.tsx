import React from "react";
import ParentSection from "../../Components/ParentSection";
import { ScrollboxContainer } from "../PastWorks/components/ScrollboxContainer";

const SkillsData = {
    frontEnd: [
        { header: "Front-End" },
        { name: "HTML5", amt: 75 },
        { name: "JSX", amt: 75 },
        { name: "TypeScript / JavaScript", amt: 70 },
        { name: "React / React Native", amt: 60 },
        { name: "EJS", amt: 20 },

    ],
    backEnd:[
        { header: "Backend" },
        { name: "Electron JS", amt: 65 },
        { name: "Node.JS", amt: 45 },
        { name: "Python", amt: 40 },
        { name: "Express.js", amt: 35 },
        { name: "Axios", amt: 35 }
    ],
    programming: [
        { header: "Programming" },
        { name: "Python", amt: 60 },
        { name: "C#", amt: 40 },
        { name: "Java", amt: 30 },
        { name: "C/C++", amt: 15 },
    ],
    styling: [
        { header: "Styling" },
        { name: "styled-components", amt: 85 },
        { name: "Tailwind CSS", amt: 80 },
        { name: "Qt / PyQt", amt: 70 },
        { name: "CSS", amt: 60 },
        { name: "SCSS", amt: 45 },
    ],
    design: [
        { header: "Design"},
        { name: "Adobe Xd", amt: 80 },
        { name: "Figma", amt: 65 },
        { name: "Affinity Photo / Designer", amt: 25 },
    ],
    database: [
        { header: "Database" },
        { name: "JSON", amt: 100 },
        { name: "PostgreSQL", amt: 35 },
        { name: "Microsoft SQL", amt: 30 },
        // { name: "NoSQL", amt: 35 },
    ],
    cloudPlatforms: [
        { header: "Cloud Platforms" },
        { name: "Supabase", amt: 35 },
        { name: "Google Cloud", amt: 10 },
    ],
    otherTools: [
        { header: "Other Tools" },
        // { name: "npm", amt: 50 },
        { name: "Git", amt: 35},
        { name: "Unity Engine", amt: 25},
    ],
};

export default function Skills() {
    function CreateSkills(
        data: {
            header?: string;
            name?: string;
            amt?: number;
            needsPaddingTop?: boolean;
        }[]
    ) {
        const FormattedData = data.map((data, i) => {
            if (data.header !== undefined) {
                return (
                    <HeaderText
                        key={"Skills_Header_" + i}
                        HeaderText={data.header}
                        needsPaddingTop={data.needsPaddingTop}
                    />
                );
            } else if (data.name !== undefined && data.amt !== undefined) {
                return (
                    <Skill
                        key={"Skill_" + i}
                        skillName={data.name}
                        skillAmt={data.amt}
                    />
                );
            }
        });

        return FormattedData;
    }

    return (
        <ParentSection sectionID="Skills" paddingY="0px">
            <div className="flex flex-1 flex-col text-left py-[90px] max-sm:py-[40px]">
                {/* <p className="text-lg text-[#5594F2]">Skills</p> */}
                <div>
                    <div
                        id="SkillsContainer"
                        className=" flex space-x-20 
                        max-[1000px]:flex-col max-[1000px]:space-x-0 max-[1000px]:space-y-6"
                    >
                        <ScrollboxContainer mainTitle="Technical Skills" subTitle="">
                            <div className="skillsContainer flex flex-shrink-0 w-[inherit] space-x-14">
                                <div className="flex flex-1 flex-col">
                                    {CreateSkills(SkillsData.frontEnd)}
                                </div>
                                <div className="flex  flex-1  flex-col">
                                    {CreateSkills(SkillsData.backEnd)}
                                </div>
                            </div>
                            <div className="skillsContainer flex flex-shrink-0 w-[inherit] space-x-14">
                                <div className="flex flex-1 flex-col">
                                    {CreateSkills(SkillsData.programming)}
                                </div>
                                <div className="flex  flex-1  flex-col">
                                    {CreateSkills(SkillsData.styling)}
                                </div>
                            </div>
                            <div className="skillsContainer flex flex-shrink-0 w-[inherit] space-x-14">
                                <div className="flex flex-1 flex-col">
                                    {CreateSkills(SkillsData.database)}
                                </div>
                                <div className="flex  flex-1  flex-col">
                                    {CreateSkills(SkillsData.design)}
                                </div>
                            </div>
                            <div className="skillsContainer flex flex-shrink-0 w-[inherit] space-x-14">
                                <div className="flex flex-1 flex-col">
                                    {CreateSkills(SkillsData.otherTools)}
                                </div>
                                <div className="flex flex-1 flex-col">
                                    {CreateSkills(SkillsData.cloudPlatforms)}
                                </div>
                            </div>
                        </ScrollboxContainer>

                        {/* <div className="leftContainer flex flex-1 flex-col ">
                            {CreateSkills(SkillsData.leftSection)}
                        </div>
                        <div className="rightContainer flex flex-1 flex-col">
                            {CreateSkills(SkillsData.rightSection)}
                        </div> */}
                    </div>
                    <p className="text-[14px] text-gray-500 mt-4">
                        * These percentages reflect subjective self-assessments
                        of my current skill levels and are not based on any
                        standardized metric.
                    </p>
                </div>
            </div>
        </ParentSection>
    );

    function HeaderText(props: {
        HeaderText: string;
        needsPaddingTop?: boolean;
    }) {
        return (
            <p
                className="text-2xl text-white font-semibold pb-3"
                style={{ paddingTop: props.needsPaddingTop ? "13px" : "" }}
            >
                {props.HeaderText}
            </p>
        );
    }

    function Skill(props: { skillName: string; skillAmt: number }) {
        return (
            <div className="Skill text-white space-y-2 mb-4">
                <div className="flex justify-between">
                    <p className="text-gray-300">{props.skillName}</p>
                    <p className="text-gray-300">{props.skillAmt}%</p>
                </div>
                <div className="w-full h-[8px] bg-[#262F47] rounded-full">
                    <div
                        className="h-[8px] bg-[#3B61F8] rounded-full"
                        style={{ width: `${props.skillAmt}%` }}
                    />
                </div>
            </div>
        );
    }
}
