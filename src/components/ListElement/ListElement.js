import React from "react";
import style from "./ListElement.module.css";

export default function ListElement({
                                label,
                                value
                            }) {

    return (
        <li className={style.listElement}>
            <span className="list-left">{label}</span>
            <span className="list-right">{value}</span>
        </li>
    )
}