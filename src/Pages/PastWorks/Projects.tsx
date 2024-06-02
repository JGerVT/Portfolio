import React from "react";
import { projectsData } from "../../Data/projectsData";
import { Project } from "./components/Project";
import { ScrollboxContainer } from "./components/ScrollboxContainer";
import ParentSection from "../../Components/ParentSection";
import ShinyOverlay from "../../Resources/shinyOverlay.png";

export default function Projects() {
    return (
        <ParentSection
            sectionID="Projects"
            backgroundColor="#0d151f"
            paddingY="50px"
            backgroundIMG={ShinyOverlay}
            backgroundOpacity={60}
        >
            <ScrollboxContainer mainTitle="Past Works" subTitle="Projects">
                {projectsData.map((data, i) => (
                    <Project
                        key={"Project_" + i}
                        projectScreenshot={data.projectImages[0]}
                        projectType={data.projectTypeDisplay}
                        projectName={data.projectName}
                    />
                ))}
            </ScrollboxContainer>
            <div className="mb-20"/>
        </ParentSection>
    );
}
