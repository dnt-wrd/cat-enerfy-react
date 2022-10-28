import React, {useState} from "react";
import style from "./Button.module.css";
import cn from "classnames"

export default function Button({
                           typeItem,
                           id,
                           onClick,
                           children
                       }) {
    const [countBuy, setCount] = useState(1)
    const handleClick = () => {

        onClick && onClick()
    }

    return (
        <button className={cn(style.buttonOrder, style.hoverHover)} onClick={handleClick}>
            {children}
        </button>
    )

}