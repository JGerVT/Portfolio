import React, { useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export function ContactForm() {
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

        if (name === "") {
            toast.error("Please enter your name");
            return;
        } else if (email === "") {
            toast.error("Please enter your email");
            return;
        } else if (!validateEmail(email)) {
            toast.error("Please enter a valid email");
            return;
        } else if (subject === "") {
            toast.error("Please enter a subject");
            return;
        } else if (message === "") {
            toast.error("Please enter a message");
            return;
        }

        // Define the email parameters
        const params = {
            from_name: name,
            to_name: "Jesse", // Replace with the recipient's email address
            to_email: "jgermaincontact@gmail.com", // Replace with the recipient's email address
            subject: "New Contact Form Submission",
            message: message,
        };

        emailjs
            .send(
                process.env.REACT_APP_SERVICE_NUMBER!,
                process.env.REACT_APP_TEMPLATE_NUMBER!,
                params,
                process.env.REACT_APP_PUBLIC_ID!,
            )
            .then(
                (result) => {
                    toast.success("Email has been sent");
                    setFormData({name: "", email: "", subject: "", message: "" });
                },
                (error) => {
                    toast.error("An error occurred");
                }
            );
    }

    // Code Source: https://stackoverflow.com/a/7635612
    function validateEmail(email: string) {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (reg.test(email) === false) {
            return false;
        }

        return true;
    }

    return (
        <form
            className="flex-1 grid grid-cols-2 gap-x-5 gap-y-3 "
            onSubmit={onSubmit}
        >
            <div className="col-span-1 max-md:col-span-2">
                <p className="text-white pb-2 pl-3">Name</p>
                <input
                    value={name}
                    id="name"
                    type="text"
                    onChange={onChange}
                    className="w-full rounded  bg-black h-10 px-4"
                />
            </div>
            <div className="col-span-1 max-md:col-span-2">
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
                    className="w-full  rounded bg-black h-10 px-4 min-h-[150px]  py-2"
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
