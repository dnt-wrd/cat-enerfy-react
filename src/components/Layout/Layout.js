import cn from "classnames";
import style from './Layout.module.css';

export default function Layout({
                           className,
                           id,
                           children
                       }) {

    return (
        <div className={cn(
            style.layout, className
        )} id={id}>
            {
                children
            }
        </div>
    )
}