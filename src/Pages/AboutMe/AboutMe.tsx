import React from "react";
import Placeholder from "../../Resources/placeholderProfile.png";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import { FaMusic } from "react-icons/fa6";
import { IoLogoGameControllerB } from "react-icons/io";
import { FaBookOpen } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import ParentSection from "../../Components/ParentSection";
import { IoLocationSharp } from "react-icons/io5";

export default function AboutMe() {
    return (
        <ParentSection sectionID="About" paddingY="0px">
            <div
                className="flex justify-between py-[100px] pt-[50px]
                    max-lg:flex-col max-lg:py-[35px]"
            >
                <div id="LeftAboutSection" className="self-center lg:pr-16">
                    <AboutMeProfilePicture />
                </div>
                <div
                    id="RightAboutSection"
                    className="text-left max-w-[800px] space-y-[50px] pb-1"
                >
                    <AboutMeInfo />
                    <AboutMeLinks />
                    <AboutMeInterests />
                </div>
            </div>
        </ParentSection>
    );
}

function AboutMeProfilePicture() {
    return (
        <div className="relative overflow-hidden p-3 my-4">
            <img
                src={Placeholder}
                alt="Profile"
                className="min-w-[270px] w-[270px] object-cover object-center"
            />

            <div className="absolute top-0 left-0 h-[50px] w-[50px] border-l-2 border-t-2 border-[#3b61f8] " />
            <div className="absolute bottom-0 right-0 h-[50px] w-[50px] border-r-2 border-b-2 border-[#3b61f8] " />
        </div>
    );
}

function AboutMeInfo() {
    return (
        <div id="AboutMeInfo">
            <p className="text-lg text-[#5594F2]">Info</p>
            <p className="text-2xl text-white font-semibold pb-4">About Me</p>
            {/* <div className="flex self-center min-[1000px]:hidden pb-5 justify-center">
                <AboutMeProfilePicture />
            </div> */}
            <p className="text-[#c4c4c4] text-base">
                From my years of personal programming experience, I bring
                hands-on experience in designing responsive and dynamic user
                interfaces using industry standard technologies such as React and
                Node.js. My programming experience spans across Python, Java, JS/TS and
                C#, and I have hands on experience managing data through SQL
                and JSON databases. Additionally, I have experience crafting
                user-friendly interfaces, leveraging tools such as Adobe Xd and
                Figma.
            </p>
        </div>
    );
}

function AboutMeLinks() {
    const AboutMeData = [
        {
            icon: <IoLocationSharp color="white" size={"23px"} />,
            name: "Location",
            value: "USA, Vermont",
            link: "",
        },
        {
            icon: <MdOutlineEmail color="white" size={"23px"} />,
            name: "Email",
            value: "JGermainContact@gmail.com",
            link: "mailto:JGermainContact@gmail.com",
        },
        {
            icon: <CiLinkedin color="white" size={"23px"} />,
            name: "LinkedIn",
            value: "Jesse Germain",
            link: "https://www.linkedin.com/in/jesse-germain-a6351126b/",
        },
        {
            icon: <VscGithub color="white" size={"23px"} />,
            name: "GitHub",
            value: "JGVT",
            link: "https://github.com/JGerVT",
        },
    ];

    return (
        <div id="AboutMeLinks">
            <div className="space-y-4">
                {AboutMeData.map((data, i) => (
                    <AboutMeContent
                        key={"AboutMeLinks_" + i}
                        icon={data.icon}
                        name={data.name}
                        value={data.value}
                        link={data.link}
                    />
                ))}
            </div>
        </div>
    );

    function AboutMeContent(props: {
        icon: React.JSX.Element;
        name: string;
        value: string;
        link: string;
    }) {
        return (
            <div className="flex max-[400px]:flex-col">
                <div className="flex w-[150px] items-center space-x-4">
                    {props.icon}
                    <p className="text-white">{props.name}</p>
                </div>
                {props.link !== "" ? (
                    <a
                        className="text-[#5594F2]"
                        href={props.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {props.value}
                    </a>
                ) : (
                    <p className="text-[#5594F2]">{props.value}</p>
                )}
            </div>
        );
    }
}

function AboutMeInterests() {
    const AboutMeData = [
        { icon: <FaCode color="white" size={"23px"} />, name: "Programming" },
        { icon: <FaMusic color="white" size={"23px"} />, name: "Music" },
        {
            icon: <IoLogoGameControllerB color="white" size={"23px"} />,
            name: "Gaming",
        },
        { icon: <FaBookOpen color="white" size={"23px"} />, name: "Learning" },
    ];
    return (
        <div id="AboutMeInterests">
            <p className="text-lg text-white font-semibold pb-4">
                My Interests
            </p>
            <div className="flex justify-between max-xl:flex-col max-xl:space-y-4">
                {AboutMeData.map((data, i) => (
                    <AboutMeInterest
                        icon={data.icon}
                        Name={data.name}
                        key={"Interests_" + i}
                    />
                ))}
            </div>
        </div>
    );

    function AboutMeInterest(props: { icon: React.JSX.Element; Name: string }) {
        return (
            <div className="flex space-x-4">
                {props.icon}
                <p className="text-white">{props.Name}</p>
            </div>
        );
    }
}
