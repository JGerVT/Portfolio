import { useState } from "react";
import { SkillsData } from "../../../Data/skillsData";
import { HeaderText } from "./HeaderText";
import { FaInfoCircle } from "react-icons/fa";

function SkillInfo(props: { info: string }) {
    return (
        <div className="absolute right-[25px] top-[-10px] z-10 rounded-sm bg-[#0c2137] p-2">
            <p className="text-sm text-gray-300">{props.info}</p>
        </div>
    );
}

function Skill(props: {
    skillName: string;
    skillAmt: number;
    skillInfo?: string;
}) {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <div className="Skill relative mb-4 space-y-2 text-white">
            <div className="flex justify-between">
                <span className="flex items-center space-x-2">
                    <p className="text-gray-300">{props.skillName}</p>
                </span>
                <span className="flex items-center space-x-1">
                    <p className="text-gray-300">{props.skillAmt}%</p>
                    {props.skillInfo && (
                        <div
                            className="flex h-[24px] w-[24px] items-center justify-center rounded-full"
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                            style={{
                                lineHeight: "10px",
                                opacity: isHovering ? 0.5 : 0.25,
                                transition: "opacity 0.1s ease-in-out",
                            }}
                        >
                            <FaInfoCircle
                                className="text-[white]"
                                size={"16px"}
                            />
                        </div>
                    )}
                </span>
            </div>
            <div className="h-[8px] w-full rounded-full bg-[#262F47]">
                <div
                    className="h-[8px] rounded-full bg-[#3B61F8]"
                    style={{ width: `${props.skillAmt}%` }}
                />
            </div>
            {props.skillInfo && isHovering && (
                <SkillInfo info={props.skillInfo} />
            )}
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
                        <div className="mb-11 flex flex-1 flex-col">
                            {CreateSkills(val[0])}
                        </div>
                        <div className="mb-11 flex flex-1 flex-col">
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
                    <div className="skillsContainer mb-10 flex w-[inherit] flex-shrink-0 flex-col">
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
        info?: string;
        needsPaddingTop?: boolean;
    }[],
) {
    const FormattedData = data.map((data, i) => {
        if (data.header !== undefined) {
            return (
                <HeaderText
                    key={"Skills_Header_" + i} // Index is used to prevent repeat keys. The order will not change at runtime so it shouldn't be a problem
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
                    skillInfo={data.info}
                />
            );
        }
    });

    return FormattedData;
}
