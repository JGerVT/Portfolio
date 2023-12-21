import React from "react";
import ParentSection from "../../Components/ParentSection";

const SkillsData = {
    leftSection: [
        { header: "Web Development" },
        { name: "JavaScript / TypeScript", amt: 65 },
        { name: "React / React Native", amt: 60 },
        { name: "Tailwind CSS", amt: 60 },
        { header: "Design", needsPaddingTop: true },
        { name: "Adobe Xd", amt: 80 },
        { name: "Figma", amt: 45 },
        { name: "Affinity Designer", amt: 25 },
    ],
    rightSection: [
        { header: "Programming", needsPaddingTop: true },
        { name: "Python", amt: 60 },
        { name: "PyQt", amt: 65 },
        { name: "C#", amt: 40 },
        { name: "Java", amt: 30 },
        { header: "Database", },
        { name: "JSON", amt: 90 },
        { name: "SQL", amt: 55 },
    ],
};

export default function Skills() {

    function CreateSkills(data: {header?: string, name?: string, amt?: number, needsPaddingTop?: boolean}[]){
        const FormattedData = data.map((data) => {
            if (data.header !== undefined) {
                return (
                    <HeaderText HeaderText={data.header} needsPaddingTop={data.needsPaddingTop}/>
                );
            } else if(data.name !== undefined && data.amt !== undefined) {
                return (
                    <Skill
                        skillName={data.name}
                        skillAmt={data.amt}
                    />
                );
            }
        })

        return FormattedData;
    }


    return (
        <ParentSection sectionID="Skills" paddingY="90px">
            <div className="flex flex-1 flex-col text-left">
                <p className="text-lg text-[#5594F2]">Skills</p>
                <div>
                    <div id="SkillsContainer" className=" flex space-x-20">
                        <div className="leftContainer flex flex-1 flex-col ">
                            {CreateSkills(SkillsData.leftSection)}
                        </div>
                        <div className="rightContainer flex flex-1 flex-col">
                            {CreateSkills(SkillsData.rightSection)}
                        </div>
                    </div>
                </div>
            </div>
        </ParentSection>
    );

    function HeaderText(props: { HeaderText: string, needsPaddingTop?: boolean }) {
        return (
            <p className="text-2xl text-white font-semibold pb-3"
                style={{paddingTop: props.needsPaddingTop? "13px": ""}}
            >
                {props.HeaderText}
            </p>
        );
    }

    function Skill(props: { skillName: string; skillAmt: number }) {
        return (
            <div className="Skill text-white space-y-2 mb-4">
                <div className="flex justify-between">
                    <p>{props.skillName}</p>
                    <p>{props.skillAmt}%</p>
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
