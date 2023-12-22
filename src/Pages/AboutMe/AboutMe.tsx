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
        <ParentSection sectionID="About">
                <div id="LeftAboutSection">
                    <AboutMeProfilePicture />
                </div>
                <div
                    id="RightAboutSection"
                    className="text-left w-[680px] space-y-[38px] self-center pb-1"
                >
                    <AboutMeInfo />
                    <AboutMeLinks />
                    <AboutMeInterests />
                </div>
        </ParentSection>
    );
}

function AboutMeProfilePicture() {
    return (
        <div className="relative overflow-hidden p-3">
            <img
                src={Placeholder}
                alt="Profile"
                className="w-[360px] h-[460px] object-cover object-center"
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
            <p className="text-white text-base">
            From my years of personal programming experience, I bring hands-on experience in designing responsive and dynamic user interfaces using cutting-edge technologies such as React and PyQt. My programming experience spans across Python, Java, and C#, and I have extensive experience managing data through SQL and JSON databases. Additionally, I have experience crafting user-friendly interfaces, leveraging tools such as Adobe Xd and Figma.
            </p>
        </div>
    );
}

function AboutMeLinks() {
    const AboutMeData = [
        {
            icon: <IoLocationSharp  color="white" size={"23px"} />,
            name: "Location",
            value: "USA, Vermont",
        },
        {
            icon: <MdOutlineEmail color="white" size={"23px"} />,
            name: "Email",
            value: "email123@gmail.com",
        },
        {
            icon: <CiLinkedin color="white" size={"23px"} />,
            name: "LinkedIn",
            value: "Jesse Germain",
        },
        {
            icon: <VscGithub color="white" size={"23px"} />,
            name: "GitHub",
            value: "JGVT",
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
                    />
                ))}
            </div>
        </div>
    );

    function AboutMeContent(props: {
        icon: React.JSX.Element;
        name: string;
        value: string;
    }) {
        return (
            <div className="flex">
                <div className="flex w-[150px] items-center space-x-4">
                    {props.icon}
                    <p className="text-white">{props.name}</p>
                </div>
                <a className="text-[#5594F2]" href="https://">
                    {props.value}
                </a>
            </div>
        );
    }
}

function AboutMeInterests() {
    const AboutMeData = [
        { icon: <FaMusic color="white" size={"23px"} />, name: "Music" },
        {
            icon: <IoLogoGameControllerB color="white" size={"23px"} />,
            name: "Gaming",
        },
        { icon: <FaCode color="white" size={"23px"} />, name: "Programming" },
        { icon: <FaBookOpen color="white" size={"23px"} />, name: "Learning" },
    ];
    return (
        <div id="AboutMeInterests">
            <p className="text-lg text-white font-semibold pb-4">
                My Interests
            </p>
            <div className="flex justify-between">
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
