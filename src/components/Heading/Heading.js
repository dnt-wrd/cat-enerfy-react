import React from "react";

export default function Heading(props) {
    const {children, level = 1, className} = props;
    const el = `h${level}`;
    return React.createElement(el, {
        className: className
    }, children)
}