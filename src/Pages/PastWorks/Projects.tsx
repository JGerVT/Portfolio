import React from "react";
import { projectsData } from "./projectsData";
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
                        projectScreenshot={data.projectScreenshot}
                        projectType={data.projectType}
                        projectName={data.projectName}
                        projectText={data.projectText}
                        projectLinks={data.links}
                    />
                ))}
            </ScrollboxContainer>
        </ParentSection>
    );
}
