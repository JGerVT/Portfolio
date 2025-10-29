import { FaGithub } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";

export const projectsData: ProjectData[] = [
    {
        projectName: "CloudNote",
        projectImages: [
            "CloudNote/cloudnote_1.png",
            "CloudNote/cloudnote_2.png",
            "CloudNote/cloudnote_3.png",
            "CloudNote/cloudnote_4.png",
        ],
        projectDescription:
            "CloudNote is a React/TypeScript web application that syncs notes directly to the cloud using Supabase. Built with Node.js and Express for the backend, this project demonstrates full-stack development skills including REST API integration and real-time data synchronization.",
        projectType: "Website",
        projectTypeDisplay: "Website (React / TypeScript)",
        technologies: [
            "React",
            "TypeScript",
            "Node.js",
            "Express",
            "Zustand",
            "Tailwind CSS",
        ],
        textBlocks: [
            {
                header: "What I learned",
                content: `- Implemented full‑stack user authentication & authorization with Supabase Auth (email/password & OAuth).  
- Built a Node.js / Express backend that handles login, token verification, and secure CRUD endpoints.  
- Integrated the backend with Supabase’s PostgreSQL database for persistent storage.  
- Added a client‑side cache (e.g., IndexedDB/localStorage) to serve data instantly and reduce network calls.  
- Designed conflict‑resolution logic that merges cached changes with remote updates while maintaining the latest version.  
`,
            },
        ],
        projectLinks: [
            {
                linkIcon: <FaGithub />,
                linkName: "GitHub",
                linkURL: "https://github.com/JGerVT/cloudnote",
            },
            {
                linkIcon: <FaGithub />,
                linkName: "Backend GitHub",
                linkURL:
                    "https://github.com/JGerVT/cloudnote/tree/implementing-account-management/node_server",
            },
        ],
        projectDate: "Jun, 2025 - ",
    },
    {
        projectName: "Habit Tracker",
        projectImages: [
            "HabitTrackerV2/habit-tracker-v2_1.png",
            "HabitTrackerV2/habit-tracker-v2_2.png",
            "HabitTrackerV2/habit-tracker-v2_0.png",
            "HabitTrackerV2/habit-tracker-v2_3.png",
            "HabitTrackerV2/habit-tracker-v2_4.png",
            "HabitTrackerV2/habit-tracker-v2_6.png",
            "HabitTrackerV2/habit-tracker-v2_7.png",
        ],
        projectDescription:
            "Habit Tracker is an Electron application that allows users to effectively monitor and visualize their progress towards building positive habits on a monthly heatmap. This desktop application demonstrates advanced React and TypeScript skills with over a year of iterative development, showcasing performance optimization and state management expertise.",
        projectType: "Software",
        projectTypeDisplay: "Software (React / Electron)",
        technologies: [
            "Electron",
            "React",
            "TypeScript",
            "Node.js",
            "Zustand",
            "Tailwind CSS",
            "styled-components",
        ],
        textBlocks: [
            {
                header: "What I learned",
                content: `- Best practices with React, TypeScript, and Electron
- Node.js backend software development with Electron
- Structuring a large-scale application with organized, modular code
- Effective usage of React hooks and state management with Context API and Zustand
- Performance optimization techniques, such as memoization and lowering the state
- Data fetching and API integration with Supabase and Cloudflare Workers (In progress)
`,
            },
        ],
        projectLinks: [
            {
                linkIcon: <FaGithub />,
                linkName: "GitHub",
                linkURL: "https://github.com/JGerVT/Habit-Tracker-V2",
            },
        ],
        projectDate: "Jan, 2024 - ",
    },
    {
        projectName: "Random Image Selector",
        projectImages: [
            "RandomImageSelector/Random_File_Selector_1.png",
            "RandomImageSelector/Random_File_Selector_4.png",
            "RandomImageSelector/Random_File_Selector_2.png",
            "RandomImageSelector/Random_File_Selector_3.png",
        ],
        projectDescription:
            "Random Image Selector is a lightweight, easy-to-use application that helps you select and display random images from your computer. Whether you're looking for inspiration or need a random image for a project, this tool makes it effortless.",
        projectType: "Software",
        projectTypeDisplay: "Software (React / Tauri)",
        technologies: [
            "Tauri",
            "React",
            "TypeScript",
            "Rust",
            "Tailwind CSS",
            "styled-components",
        ],
        textBlocks: [
            {
                header: "Key Features",
                content: `- Random Image Selection: Selects images randomly from specified folders from your system.
- Supports Various Formats: Compatible with .jpg, .png, .webp, and more.
- Simple User Interface: Easy-to-navigate interface with minimal setup required.
- 4 Panels Shown: Set 1-4 panels to provide random images on each randomization.
- Favorite Images: Save images for later by favoriting them.
- History: View previously seen images on the left sidebar and drag them back to the panel to view them again.
`,
            },
            {
                header: "What I learned",
                content: `- Familiarized myself with the basics of Tauri and Rust with front-end technologies like React and TypeScript
- Practiced best practices with React and TypeScript
- How to plan a project for quick and effective development (1 week of work)
`,
            },
        ],
        projectDate: "Apr, 2025",
        projectLinks: [
            {
                linkIcon: <FaGithub />,
                linkName: "GitHub",
                linkURL: "https://github.com/JGerVT/Random-Image-Selector",
            },
            {
                linkIcon: <FaDownload size={"15px"} className="pb-[1px]" />,
                linkName: "Download",
                linkURL:
                    "https://github.com/JGerVT/Random-Image-Selector/releases/tag/Release",
            },
        ],
    },
    {
        projectName: "Clipboard Translator",
        projectImages: ["ClipboardTranslator/Clipboard_Translator.png"],
        projectDescription:
            "Clipboard Translator is a simple Electron application that translates any copied text to your target language, utilizing the Google Translate API.",
        projectType: "Software",
        projectTypeDisplay: "Software (React / Electron)",
        technologies: [
            "Electron",
            "React",
            "TypeScript",
            "Node.js",
            "Tailwind CSS",
            "styled-components",
        ],
        textBlocks: [
            {
                header: "What I learned",
                content: `- Learned how to integrate 3rd party libraries to communicate with APIs
- Familiarized myself with regular expressions
- Planned and designed the software for a swift development cycle
- Developed well-structured project architecture with efficient backend and frontend communication.
- Utilized Zustand for state management to maintain an organized and clean codebase.

`,
            },
        ],
        projectDate: "Apr, 2025",
        projectLinks: [
            {
                linkIcon: <FaGithub />,
                linkName: "GitHub",
                linkURL: "https://github.com/JGerVT/clipboard-translator",
            },
            {
                linkName: "Download",
                linkIcon: <FaDownload size={"15px"} className="pb-[1px]" />,
                linkURL:
                    "https://github.com/JGerVT/clipboard-translator/releases/tag/Releases",
            },
        ],
    },
    {
        projectName: "Portfolio Website",
        projectImages: ["PortfolioWebsite/portfolioScreenshot.png"],
        projectDescription:
            "A responsive single-page portfolio website showcasing my projects and skills with modern React/TypeScript architecture and clean, professional design.",
        projectType: "Website",
        projectTypeDisplay: "Website (React/TypeScript)",
        technologies: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "styled-components",
        ],
        textBlocks: [
            {
                header: "What I learned",
                content: `- Developed a professional portfolio showcasing modern React/TypeScript development practices
- Implemented responsive design for cross-device compatibility
`,
            },
        ],
        projectLinks: [
            {
                linkIcon: <FaGithub />,
                linkName: "GitHub",
                linkURL: "https://github.com/JGerVT/Portfolio",
            },
            {
                linkIcon: <FaGithub />,
                linkName: "Demo",
                linkURL: "https://jgervt.github.io/Portfolio/",
            },
        ],
        projectDate: "Jan, 2024 - ",
    },
    // {
    //     projectName: "VGDB",
    //     projectImages: ["VGDB/videoGameDatabase.png"],
    //     projectDescription:
    //         "VGDB (Video Game Database) is a website that allows users to Organize, Rate, and Catalogue their favorite games.",
    //     projectType: "Website",
    //     projectTypeDisplay: "Website (React / TypeScript)",
    //     technologies: [
    //         "React",
    //         "TypeScript",
    //         "Tailwind CSS",
    //         "styled-components",
    //         "Axios",
    //     ],
    //     textBlocks: [],
    //     projectLinks: [
    //         {
    //             linkName: "GitHub",
    //             linkURL: "",
    //         },
    //     ],
    //     projectDate: "Jan, 2024 - ",
    // },
    {
        projectName: "Inspire Canvas",
        projectImages: ["InspireCanvas/InspireCanvas.png"],
        projectDescription:
            "Inspire Canvas is a desktop application that enables users to arrange, resize, and reposition images, text, and files on a draggable canvas. Features include layer management, multiple export formats, and intuitive user controls for creative projects.",
        projectType: "Software",
        projectTypeDisplay: "Software (Python / PyQt)",
        technologies: ["Python", "PyQt"],
        textBlocks: [],
        projectLinks: [
            {
                linkIcon: <FaGithub />,
                linkName: "GitHub",
                linkURL: "https://github.com/JGerVT/InspireCanvas",
            },
            {
                linkIcon: <FaDownload size={"15px"} className="pb-[1px]" />,
                linkName: "Download",
                linkURL:
                    "https://github.com/JGerVT/InspireCanvas/releases/tag/v0.1.1",
            },
        ],
        projectDate: "Oct, 2022 - Dec, 2023",
    },
];
