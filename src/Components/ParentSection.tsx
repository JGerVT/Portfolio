import React, { ReactNode } from "react";

export default function ParentSection(props: {
    sectionID: string;
    children: ReactNode;
    backgroundColor?: string;
    paddingY?: string;
    backgroundIMG?: string;
    backgroundOpacity?: number;
}) {
    return (
        <div
            id={props.sectionID}
            className={`flex w-full justify-center text-left relative overflow-hidden`}
            style={{
                backgroundColor:
                    props.backgroundColor !== null ? props.backgroundColor : "",
                paddingTop:
                    props.paddingY !== undefined ? props.paddingY : "112px",
                paddingBottom:
                    props.paddingY !== undefined ? props.paddingY : "112px",
            }}
        >
            <div className="max-w-[1400px] px-14 w-[80%] flex flex-1 justify-between">
                {props.children}
            {/* Background Image */}
            {props.backgroundIMG !== undefined && (
                <img
                    src={props.backgroundIMG}
                    alt="Past Work Background"
                    className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover pointer-events-none select-none"
                    style={{opacity: props.backgroundOpacity !== undefined ? `${props.backgroundOpacity}%`:"100%"}}
                />
            )}
            </div>
        </div>
    );
}
