import React, { useState } from "react";
import ParentSection from "../../Components/ParentSection";

export default function Contact() {
    const [data, setData] = useState<{
        name: string,
        email: string,
        subject: string,
        message: string
    }>();

    function onSubmit(e: React.FormEvent){
        console.log(e);        
        e.preventDefault();
    }

    return (
        <ParentSection sectionID="Contact" backgroundColor="#121723" paddingY="80px">
            <div className="flex flex-1 flex-col text-white mb-10">
                <div className="flex flex-col mb-4">
                    <p className="text-lg text-[#5594F2]">Contact</p>
                    <p className="text-2xl text-white font-semibold pb-4">
                        Get In Touch
                    </p>
                </div>
                <form className="grid grid-cols-2 gap-x-10 gap-y-3" onSubmit={onSubmit}>
                    <div style={{ gridColumn: "span 1" }}>
                        <p className="text-white pb-2 pl-3">
                            Name
                        </p>
                        <input type="text" className="w-full rounded  bg-black h-10 px-4"></input>
                    </div>
                    <div style={{ gridColumn: "span 1" }}>
                        <p className="text-white pb-2 pl-3">Email</p>
                        <input alt="Email Input" type="email" className="w-full  rounded bg-black h-10 px-4"></input>
                    </div>
                    <div style={{ gridColumn: "span 2" }}>
                        <p className="text-white pb-2 pl-3">Subject</p>
                        <input alt="Name Input" type="text" className="w-full  rounded bg-black h-10 px-4"></input>
                    </div>
                    <div style={{ gridColumn: "span 2" }}>
                        <p className="text-white pb-2 pl-3">Message</p>
                        <textarea className="w-full  rounded bg-black h-10 px-4 min-h-[150px]  pt-1"></textarea>
                    </div>
                    <button
                        className="w-[150px] h-[45px]  h-50px text-center flex justify-center items-center rounded-full bg-[#3B61F8] cursor-pointer"
                        type="submit"
                        onClick={() => {}}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </ParentSection>
    );
}
