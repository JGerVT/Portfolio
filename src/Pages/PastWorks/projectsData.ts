import InspireCanvasScreenshot from "../../Resources/SoftwareDesign/InspireCanvas.png";
import PortfolioScreenshot from "../../Resources/SoftwareDesign/portfolioScreenshot.png";
import HabitTracker from "../../Resources/SoftwareDesign/habitTracker.png";
import VGMDB from "../../Resources/SoftwareDesign/videoGameDatabase.png";

export interface ProjectData {
    projectScreenshot: string;
    projectType: string;
    projectName: string;
    projectText: string;
    links: {name: string, link: string}[]
    screenshots: never[];
}
export const projectsData: ProjectData[] = [
    {
        projectScreenshot: PortfolioScreenshot,
        projectType: "Website (React)",
        projectName: "Portfolio Website",
        projectText: "This project is the project that you are currently looking at.",
        links:[
            {
                name: "Website",
                link: "http://localhost:3000/"
            },
            {
                name: "GitHub",
                link: "https://github.com/JGerVT/"
            },
        ],
        screenshots: []
    },
    {
        projectScreenshot: HabitTracker,
        projectType: "Software (React / Electron)",
        projectName: "HabitTracker",
        projectText: "Habit Tracker is an app that allows you to track progress for habits, while visually displaying that progress on a monthly heatmap per task.",
        links:[
            {
                name: "GitHub",
                link: "https://github.com/JGerVT/InspireCanvas"
            }
        ],
        screenshots: []
    },
    {
        projectScreenshot: InspireCanvasScreenshot,
        projectType: "Software (PyQt)",
        projectName: "Inspire Canvas",
        projectText: "Inspire Canvas is an application that enables users to arrange, resize, and reposition Images, Text, and Files on a two-dimensional canvas.",
        links:[
            {
                name: "GitHub",
                link: "https://github.com/JGerVT/InspireCanvas"
            }
        ],
        screenshots: []
    },
    {
        projectScreenshot: VGMDB,
        projectType: "Website (React / Node)",
        projectName: "VGDB",
        projectText: "VGDB (Video Game Database) is a website that allows users to Organize, Rate, and Catalogue their favorite games.",
        links:[
            {
                name: "GitHub",
                link: "https://github.com/JGerVT/InspireCanvas"
            }
        ],
        screenshots: []
    },
    {
        projectScreenshot: VGMDB,
        projectType: "Website (React / Node)",
        projectName: "Realtor.com Clone",
        projectText: "Realtor.com Clone is recreation of the realtor.com website.",
        links:[
            {
                name: "GitHub",
                link: "https://github.com/JGerVT/InspireCanvas"
            }
        ],
        screenshots: []
    },
];
