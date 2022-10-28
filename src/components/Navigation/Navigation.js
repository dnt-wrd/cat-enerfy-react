import logo from '../../assets/logo-desktop.svg'
import {NavLink} from "react-router-dom";
import cn from 'classnames'
import {MENU} from "../../constants";
import style from './Navigatiom.module.css'

const Navigation = () => {
    return (
        <nav className={cn(style.navigation, style.navigationMain)}>
            <div className={cn(style.navigationLayout, style.layout)}>
                <div className={style.logo}>
                    <img src={logo} alt="Energy Catalog Logo"/>
                </div>
                <ul className={style.menu}>
                    {
                        MENU.map(
                            (item) => {
                                return (
                                    <li className={style.menuItem}>
                                        <NavLink
                                            end={item.end}
                                            className={({isActive}) => cn('menu_item_link-catalog', {active: isActive})}
                                            to={item.to}
                                        >
                                            {item.label}
                                        </NavLink>
                                    </li>
                                )
                            }
                        )
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;

