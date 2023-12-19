import React from "react";
import Placeholder from "../../Resources/placeholderProfile.png";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import { FaMusic } from "react-icons/fa6";
import { IoLogoGameControllerB } from "react-icons/io";
import { FaBookOpen } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

export default function AboutMe() {
    return (
        <div
            id="AboutSection"
            className="py-28 max-w-[1300px] w-[80%] flex flex-1 justify-between space-x-10"
        >
            <div id="LeftAboutSection">
                <AboutMeProfilePicture />
            </div>
            <div
                id="RightAboutSection"
                className="text-left w-[680px] space-y-[40px] self-center pb-2"
            >
                <AboutMeInfo />
                <AboutMeLinks />
                <AboutMeInterests />
            </div>
        </div>
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
            <p className="text-lg text-[#5594F2]">Full Stack Developer</p>
            <p className="text-2xl text-white font-semibold pb-4">About Me</p>
            <p className="text-white text-base">
                As a novice Full Stack Developer, I have hands-on experience in
                creating responsive and dynamic user interfaces using React and
                PyQt. My backend skills include working with Python and Java,
                and I'm adept at managing data through SQL and JSON databases.
            </p>
        </div>
    );
}

function AboutMeLinks() {
    return (
        <div id="AboutMeLinks">
            <div className="space-y-4">
                <AboutMeContent
                    icon={<MdOutlineEmail size={"23px"} color="white" />}
                    name="Email"
                    value="email123@gmail.com"
                />
                <AboutMeContent
                    icon={<CiLinkedin size={"23px"} color="white" />}
                    name="LinkedIn"
                    value="Jesse Germain"
                />
                <AboutMeContent
                    icon={<VscGithub size={"23px"} color="white" />}
                    name="GitHub"
                    value="JGVT"
                />
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
    return (
        <div id="AboutMeInterests">
            <p className="text-lg text-white font-semibold pb-4">
                My Interests
            </p>
            <div className="flex justify-between">
                <AboutMeInterest
                    icon={<FaMusic color="white" size={"23px"} />}
                    Name="Music"
                />
                <AboutMeInterest
                    icon={<IoLogoGameControllerB color="white" size={"23px"} />}
                    Name="Gaming"
                />
                <AboutMeInterest
                    icon={<FaCode color="white" size={"23px"} />}
                    Name="Programming"
                />
                <AboutMeInterest
                    icon={<FaBookOpen color="white" size={"23px"} />}
                    Name="Learning"
                />
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
