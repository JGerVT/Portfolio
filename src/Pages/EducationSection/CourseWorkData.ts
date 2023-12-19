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
}

export const ProgrammingData = {
    name: "Programming and Databases",
    data: [
        {
            CourseLocation: "Champlain College",
            CourseData: [
                {
                    courseName: "Applied Software Practice",
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
                    courseName: "C++ Programming I",
                    courseTime: "Spring - 2022",
                },
                {
                    courseName: "C++ Programming II",
                    courseTime: "Summer - 2022",
                },
                {
                    courseName: "Information Systems Analysis & Design",
                    courseTime: "Summer - 2021",
                },
                {
                    courseName: "Enterprise Database Systems",
                    courseTime: "Spring - 2021",
                },
                {
                    courseName: "Relational Database Design and SQL",
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
                    courseName: "Intro to Python",
                    courseTime: "Fall - 2020",
                },
            ],
        },
        {
            CourseLocation: "Udemy",
            CourseData: [
                {
                    courseName: "Understanding TypeScript",
                    courseTime: "Fall - 2023",
                },
            ],
        },
    ],
};


export const WebDevelopmentData = {
    name: "WebDevelopment",
    data: [
        {
            CourseLocation: "Champlain College",
            CourseData: [
                {
                    courseName: "Applied Software Practice",
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
                    courseName: "C++ Programming I",
                    courseTime: "Spring - 2022",
                },
                {
                    courseName: "C++ Programming II",
                    courseTime: "Summer - 2022",
                },
                {
                    courseName: "Information Systems Analysis & Design",
                    courseTime: "Summer - 2021",
                },
                {
                    courseName: "Enterprise Database Systems",
                    courseTime: "Spring - 2021",
                },
                {
                    courseName: "Relational Database Design and SQL",
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
                    courseName: "Intro to Python",
                    courseTime: "Fall - 2020",
                },
            ],
        },
        {
            CourseLocation: "Udemy",
            CourseData: [
                {
                    courseName: "Understanding TypeScript",
                    courseTime: "Fall - 2023",
                },
            ],
        },
    ],
};
