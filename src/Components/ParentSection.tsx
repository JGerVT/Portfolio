import React, { ReactNode } from "react";

export default function ParentSection(props: {sectionID: string, children: ReactNode, backgroundColor?: string, paddingY?: string }) {
    return (
        <div id={props.sectionID} className={`flex w-full justify-center text-left`}
            style={{backgroundColor: props.backgroundColor !== null ? props.backgroundColor: "", 
            paddingTop: props.paddingY !== undefined ? props.paddingY : "112px",
            paddingBottom: props.paddingY !== undefined ? props.paddingY : "112px",
            }}
        
        >
            <div
                className="max-w-[1400px] px-14 w-[80%] flex flex-1 justify-between"
            >
                {props.children}
            </div>
        </div>
    );
}
