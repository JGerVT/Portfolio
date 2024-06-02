import React from "react";
import { SkillsData } from "../../../Data/skillsData";
import { HeaderText } from "./HeaderText";

function Skill(props: { skillName: string; skillAmt: number; }) {
    return (
        <div className="Skill mb-4 space-y-2 text-white">
            <div className="flex justify-between">
                <p className="text-gray-300">{props.skillName}</p>
                <p className="text-gray-300">{props.skillAmt}%</p>
            </div>
            <div className="h-[8px] w-full rounded-full bg-[#262F47]">
                <div
                    className="h-[8px] rounded-full bg-[#3B61F8]"
                    style={{ width: `${props.skillAmt}%` }} />
            </div>
        </div>
    );
}


export function TechnicalSkills(renderTwoColumns: boolean) {
    const skills = Object.values(SkillsData);

    if (renderTwoColumns) {
        // To render 2 columns, I have to group the data by 2s, i.e. [[frontendData, backendData], [databaseData, stylingData], etc...]
        const groupedData: any[] = [];
        skills.forEach((element, index) => {
            if (!groupedData[Math.floor(index / 2)]) {
                groupedData[Math.floor(index / 2)] = [];
            }
            groupedData[Math.floor(index / 2)][index % 2] = element;
        });

        return (
            <>
                {groupedData.map((val, index) => (
                    <div className="skillsContainer flex w-[100%] flex-shrink-0 space-x-10 max-sm:w-[100%]">
                        <div className="flex flex-1 flex-col">
                            {CreateSkills(val[0])}
                        </div>
                        <div className="flex flex-1 flex-col">
                            {CreateSkills(val[1])}
                        </div>
                    </div>
                ))}
            </>
        );
    } else {
        return (
            <>
                {skills.map((val) => (
                    <div className="skillsContainer flex w-[inherit] flex-shrink-0 flex-col">
                        {CreateSkills(val)}
                    </div>
                ))}
            </>
        );
    }
}

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
                    key={"Skills_Header_" + i} // Index is used to prevent repeat keys. The order will not change at runtime so it shouldn't be a problem
                    HeaderText={data.header}
                    needsPaddingTop={data.needsPaddingTop} />
            );
        } else if (data.name !== undefined && data.amt !== undefined) {
            return (
                <Skill
                    key={"Skill_" + i}
                    skillName={data.name}
                    skillAmt={data.amt} />
            );
        }
    });

    return FormattedData;
}
