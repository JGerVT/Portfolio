import React, { useEffect, useState } from "react";
import ParentSection from "../../Components/ParentSection";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import ContactBlob from "../../Resources/ContactBlob.svg";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillSendFill } from "react-icons/bs";

export default function Contact() {
    return (
        <ParentSection
            sectionID="Contact"
            backgroundColor="#121723"
            paddingY="80px"
        >
            <div className="flex flex-1 flex-col text-white mb-8">
                <ContactHeader />
                <div className="flex space-x-10 max-[1000px]:flex-col max-[1000px]:space-y-6 max-[1000px]:space-x-0">
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
        icon: <MdEmail size={"20px"} />,
        text: "email123@gmail.com",
        link: "",
    },
    {
        icon: <FaGithub size={"20px"} />,
        text: "JGerVT",
        link: "https://github.com/JGerVT",
    },
    {
        icon: <FaLinkedin size={"20px"} />,
        text: "Jesse Germain",
        link: "",
    },
    {
        icon: <IoLocationSharp size={"20px"} />,
        text: "USA, Vermont",
        link: "",
    },
];

function ContactMeInfo() {
    return (
        <div className="relative h-[400px] overflow-hidden flex flex-col flex-1 min-[1000px]:max-w-[300px] min-w-[300px] bg-[#0e233c] rounded-lg px-6 py-4 space-y-4 min-h-[250px]">
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
        return (
            <div
                className="flex space-x-4 items-center text-[14px] overflow-hidden"
                style={{ cursor: props.link !== "" ? "cursor-pointer" : "" }}
            >
                {props.icon}
                {props.link !== "" ? (
                    <a className="text-[#5594F2]" href="https://">
                        {props.text}
                    </a>
                ) : (
                    <p className="text-[#5594F2]">{props.text}</p>
                )}
            </div>
        );
    }
}

function ContactForm() {
    const [formData, setFormData] = useState<{
        name: string;
        email: string;
        subject: string;
        message: string;
    }>({ name: "", email: "", subject: "", message: "" });
    const { name, email, subject, message } = formData;

    function onChange(e: any) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    }

    function onSubmit(e: React.FormEvent) {
        e.preventDefault();

        console.log("Submit", formData);
    }

    return (
        <form
            className="flex-1 grid grid-cols-2 gap-x-10 gap-y-3"
            onSubmit={onSubmit}
        >
            <div style={{ gridColumn: "span 1" }}>
                <p className="text-white pb-2 pl-3">Name</p>
                <input
                    value={name}
                    id="name"
                    type="text"
                    onChange={onChange}
                    className="w-full rounded  bg-black h-10 px-4"
                />
            </div>
            <div style={{ gridColumn: "span 1" }}>
                <p className="text-white pb-2 pl-3">Email</p>
                <input
                    value={email}
                    id="email"
                    onChange={onChange}
                    alt="Email Input"
                    type="email"
                    className="w-full  rounded bg-black h-10 px-4"
                />
            </div>
            <div style={{ gridColumn: "span 2" }}>
                <p className="text-white pb-2 pl-3">Subject</p>
                <input
                    value={subject}
                    id="subject"
                    onChange={onChange}
                    alt="Name Input"
                    type="text"
                    className="w-full  rounded bg-black h-10 px-4"
                />
            </div>
            <div style={{ gridColumn: "span 2" }}>
                <p className="text-white pb-2 pl-3">Message</p>
                <textarea
                    value={message}
                    id="message"
                    onChange={onChange}
                    className="w-full  rounded bg-black h-10 px-4 min-h-[150px]  pt-1"
                />
            </div>
            <button
                className="mt-[6px] w-[150px] h-[45px]  h-50px text-center flex justify-center items-center rounded-full bg-[#3B61F8] cursor-pointer
                    hover:brightness-110 transition-all duration-75 ease-in-out
                "
                type="submit"
                onClick={() => {}}
            >
                <BsFillSendFill className="mr-3" />
                <p className="font-semibold">Submit</p>
            </button>
        </form>
    );
}
