export interface CourseData {
    name: string;
    data: CourseSource[];
}

export interface CourseSource {
    CourseLocation: string;
    CourseData: Course[];
}

export interface Course {
    courseName: string;
    courseTime: string;
    link?: string;
}

export const ProgrammingData = {
    name: "Programming",
    data: [
        {
            CourseLocation: "Champlain College",
            CourseData: [
                {
                    courseName: "Applied Software Practice",
                    courseTime: "Fall - 2022",
                },
                {
                    courseName: "Operating Systems Architecture ",
                    courseTime: "Fall - 2022",
                },
                {
                    courseName: "Linux/ Unix Programming I",
                    courseTime: "Fall - 2022",
                },
                {
                    courseName: "Data Structures & Algorithms",
                    courseTime: "Summer - 2022",
                },
                {
                    courseName: "C++ Programming II",
                    courseTime: "Spring - 2022",
                },
                {
                    courseName: "C++ Programming I",
                    courseTime: "Spring - 2022",
                },
                {
                    courseName: "Intro to Python",
                    courseTime: "Fall - 2020",
                },
            ],
        },
        {
            CourseLocation: "Community College of Vermont",
            CourseData: [
                {
                    courseName: "Java Programming",
                    courseTime: "Winter - 2018",
                },
            ],
        }
    ],
};


export const WebDevelopmentData = {
    name: "Web Development",
    data: [
        {
            CourseLocation: "Champlain College",
            CourseData: [
                {
                    courseName: "Usability Web/Software Design",
                    courseTime: "Spring - 2022",
                },
                {
                    courseName: "Web Page Development II",
                    courseTime: "Spring - 2022",
                },
                {
                    courseName: "Information Systems Analysis and Design",
                    courseTime: "Spring - 2021",
                },
            ],
        },
        {
            CourseLocation: "Community College of Vermont",
            CourseData: [
                {
                    courseName: "Programming for the Internet",
                    courseTime: "Winter - 2018",
                },
                {
                    courseName: "Website Development I",
                    courseTime: "Fall - 2018",
                }
            ],
        },
        {
            CourseLocation: "Udemy",
            CourseData: [
                {
                    courseName: "Understanding TypeScript",
                    courseTime: "Fall - 2023",
                    link: "https://www.udemy.com/course/understanding-typescript/" 
                },
                {
                    courseName: "React.js & Firebase Project - ReactJS 18, Firebase 9 Project",
                    courseTime: "Winter - 2024",
                    link: "https://www.udemy.com/course/reactjs-firebase-project/" 
                },
                {
                    courseName: "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
                    courseTime: "Spring - 2024",
                    link: "https://www.udemy.com/course/nodejs-the-complete-guide/" 
                },
            ],
        },
    ],
};

export const DatabaseData = {
    name: "Databases",
    data: [
        {
            CourseLocation: "Champlain College",
            CourseData: [
                {
                    courseName: "Data Structures & Algorithms",
                    courseTime: "Summer - 2022",
                },
                {
                    courseName: "Enterprise Database Systems",
                    courseTime: "Spring - 2021",
                },
                {
                    courseName: "Relational Database Design and SQL",
                    courseTime: "Spring - 2021",
                },
            ],
        },
    ],
}

export const MathData = {
    name: "Math",
    data: [
        {
            CourseLocation: "Champlain College",
            CourseData: [
                {
                    courseName: "Data Structures and Algorithms",
                    courseTime: "Summer - 2022",
                },
                {
                    courseName: "Discrete Mathematics",
                    courseTime: "Summer - 2021",
                },
            ],
        },
        {
            CourseLocation: "Community College of Vermont",
            CourseData: [
                {
                    courseName: "Physics I",
                    courseTime: "Spring - 2019",
                },
                {
                    courseName: "Calculus I",
                    courseTime: "Fall - 2018",
                },
                {
                    courseName: "Pre-Calculus Mathematics",
                    courseTime: "Fall - 2017",
                },
            ],
        }
    ],
}

export const EnglishData = {
    name: "Writing and Communication",
    data: [
        {
            CourseLocation: "Champlain College",
            CourseData: [
                {
                    courseName: "Small Group Communication ",
                    courseTime: "Spring - 2022",
                },
                {
                    courseName: "Social Interaction/Digital Age ",
                    courseTime: "Fall - 2021",
                },
            ],
        },
        {
            CourseLocation: "Community College of Vermont",
            CourseData: [
                {
                    courseName: "Intercultural Communication ",
                    courseTime: "Summer - 2020",
                },
                {
                    courseName: "Seminar in Educational Inquiry ",
                    courseTime: "Winter - 2020",
                },
                {
                    courseName: "Technical Writing & Research",
                    courseTime: "Fall - 2019",
                },
                {
                    courseName: "English Composition",
                    courseTime: "Summer - 2018",
                },
            ],
        }
    ],
}