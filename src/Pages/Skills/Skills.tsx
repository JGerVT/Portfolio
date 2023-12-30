import React from "react";
import ParentSection from "../../Components/ParentSection";

const SkillsData = {
    leftSection: [
        { header: "Web Development" },
        { name: "JavaScript / TypeScript", amt: 65 },
        { name: "React / React Native", amt: 60 },
        { name: "Tailwind CSS", amt: 60 },
        { name: "styled-components", amt: 60 },
        { header: "Design", needsPaddingTop: true },
        { name: "Adobe Xd", amt: 80 },
        { name: "Figma", amt: 45 },
        // { name: "Affinity Designer", amt: 25 },
    ],
    rightSection: [
        { header: "Programming" },
        { name: "Python / PyQt", amt: 60 },
        // { name: "PyQt", amt: 65 },
        { name: "C#", amt: 40 },
        { name: "C/C++", amt: 25 },
        { name: "Java", amt: 30 },
        { header: "Database", needsPaddingTop: true },
        { name: "JSON", amt: 90 },
        { name: "SQL", amt: 55 },
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
        <ParentSection sectionID="Skills" paddingY="90px">
            <div className="flex flex-1 flex-col text-left pb-[15px]">
                <p className="text-lg text-[#5594F2]">Skills</p>
                <div>
                    <div id="SkillsContainer" className=" flex space-x-20 
                        max-[1000px]:flex-col max-[1000px]:space-x-0 max-[1000px]:space-y-6">
                        <div className="leftContainer flex flex-1 flex-col ">
                            {CreateSkills(SkillsData.leftSection)}
                        </div>
                        <div className="rightContainer flex flex-1 flex-col">
                            {CreateSkills(SkillsData.rightSection)}
                        </div>
                    </div>
                    <p className="absolute text-[14px] text-gray-500 mt-4">
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
