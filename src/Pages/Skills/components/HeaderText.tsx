import React from "react";

export function HeaderText(props: { HeaderText: string; needsPaddingTop?: boolean; }) {
    return (
        <p
            className="pb-3 text-2xl font-semibold text-white"
            style={{ paddingTop: props.needsPaddingTop ? "13px" : "" }}
        >
            {props.HeaderText}
        </p>
    );
}
