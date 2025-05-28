import React, { useEffect } from "react";
import ParentSection from "../../Components/ParentSection";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import ContactBlob from "../../Resources/ContactBlob.svg";
import { IoLocationSharp } from "react-icons/io5";
import { ContactForm } from "./ContactForm";

export default function Contact() {
    return (
        <ParentSection
            sectionID="Contact"
            backgroundColor="#121723"
            paddingY="0px"
        >
            <div className="flex flex-1 flex-col text-white mb-8 py-[50px] max-sm:py-[35px]">
                <ContactHeader />
                <div className="flex space-x-10 max-[1000px]:flex-col max-[1000px]:space-y-12 max-[1000px]:space-x-0">
                    <ContactForm />
                    <ContactMeInfo />
                </div>
            </div>
        </ParentSection>
    );

    function ContactHeader() {
        return (
            <div className="flex flex-col mb-4">
                <p className="text-lg text-[#5594F2]">Contact</p>
                <p className="text-2xl text-white font-semibold pb-2">
                    Get In Touch
                </p>
                <p className="pt-1 pb-6 text-gray-300">
                    For any inquiries, work-related matters, or potential
                    collaboration opportunities, feel free to utilize
                    the provided contact information.I am looking forward to
                    the connecting with you.
                </p>
            </div>
        );
    }
}

const ContactInfoData = [
    {
        icon: <IoLocationSharp size={"20px"} />,
        text: "USA, Vermont",
        link: "",
    },
    {
        icon: <MdEmail size={"20px"} />,
        text: "Email",
        link: "mailto:JGermainContact@gmail.com",
    },
    {
        icon: <FaGithub size={"20px"} />,
        text: "GitHub",
        link: "https://github.com/JGerVT",
    },
    {
        icon: <FaLinkedin size={"20px"} />,
        text: "LinkedIn",
        link: "https://www.linkedin.com/in/jesse-germain-a6351126b/",
    },
];

function ContactMeInfo() {
    return (
        <div className="relative h-[400px] overflow-hidden flex flex-col flex-1 min-[1000px]:max-w-[300px] min-w-[250px] bg-[#0e233c] rounded-lg px-6 py-4 space-y-4 min-h-[250px]">
            <p className="text-[24px] font-semibold">Contact Me</p>
            {ContactInfoData.map((data, i) => (
                <ContactLink
                    key={"ContactLink_" + i}
                    icon={data.icon}
                    text={data.text}
                    link={data.link}
                />
            ))}

            <img
                src={ContactBlob}
                alt=""
                className="absolute z-[0] right-[-600px] bottom-[-500px] max-w-none overflow-hidden pointer-events-none select-none"
            />
        </div>
    );

    function ContactLink(props: {
        icon: React.JSX.Element;
        text: string;
        link: string;
    }) {
        console.log(props.link);
        

        return (
            <div
                className="flex space-x-4 items-center text-[14px] overflow-hidden z-10"
                style={{ cursor: props.link !== "" ? "cursor-pointer" : "" }}
            >
                {props.icon}
                {props.link && props.link !== "" ? (
                    <a className="text-[#5594F2] underline" href={props.link} target="_blank" rel="noopener noreferrer">
                        {props.text}
                    </a>
                ) : (
                    <p className="text-[#5594F2]">{props.text}</p>
                )}
            </div>
        );
    }
}


