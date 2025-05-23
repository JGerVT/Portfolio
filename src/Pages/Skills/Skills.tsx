import React, { useEffect, useState } from "react";
import ParentSection from "../../Components/ParentSection";
import { ScrollboxContainer } from "../PastWorks/components/ScrollboxContainer";
import { TechnicalSkills } from "./components/TechnicalSkills";

export default function Skills() {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions(),
    );

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height,
        };
    }

    // Manage how many columns are displayed
    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <ParentSection sectionID="Skills" paddingY="0px">
            <div className="flex flex-1 flex-col py-[90px] text-left max-sm:py-[40px]">
                {/* <p className="text-lg text-[#5594F2]">Skills</p> */}
                <div>
                    <div
                        id="SkillsContainer"
                        className="flex max-[1000px]:flex-col max-[1000px]:space-x-0 max-[1000px]:space-y-6"
                    >
                        <ScrollboxContainer
                            mainTitle="Technical Skills"
                            subTitle=""
                        >
                            {TechnicalSkills(windowDimensions.width > 640)}
                        </ScrollboxContainer>
                    </div>
                    <p className="text-[14px] text-gray-500">
                        * These percentages reflect subjective self-assessments
                        of my current skill levels/comfortability and are not based on any
                        standardized metric.
                    </p>
                </div>
            </div>
        </ParentSection>
    );
}