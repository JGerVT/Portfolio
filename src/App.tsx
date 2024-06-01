import React, { createContext, useContext, useState } from "react";
import "./App.css";
import "./fonts.css";
import Header from "./Pages/Header/Header";
import Home from "./Pages/HomeSection/Home";
import AboutMe from "./Pages/AboutMe/AboutMe";
import { Education } from "./Pages/EducationSection/Education";
import Skills from "./Pages/Skills/Skills";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Pages/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Projects from "./Pages/PastWorks/Projects";
import { ShowProjectInfo } from "./Pages/ShowProjInfo/ShowProjectInfo";
import { FaGithub } from "react-icons/fa6";
import { BiGlobe } from "react-icons/bi";
import { projectsData } from "./Data/projectsData";

function App() {
    return (
        <ProjectProvider>
            <div className="relative">
                <ShowProjectInfo />
                <div className="App flex flex-col items-center bg-[#101219]">
                    <Header />
                    <Home />
                    <AboutMe />
                    <Projects />
                    <Education />
                    <Skills />
                    <Contact />
                    <Footer />
                </div>
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </div>
        </ProjectProvider>
    );
}

export default App;


type ProjectContextType = {
    currentProjectViewing: string;
    setCurrentProjectViewing: React.Dispatch<React.SetStateAction<string>>;
}

// Project Context
const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export function ProjectProvider(props: { children: React.ReactNode}) {
    const [currentProjectViewing, setCurrentProjectViewing] = useState("");

    return (
        <ProjectContext.Provider value={{currentProjectViewing: currentProjectViewing, setCurrentProjectViewing: setCurrentProjectViewing}}>
            {props.children}
        </ProjectContext.Provider>
    );
}

export const useProjectContext = () => {
    const context = useContext(ProjectContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
