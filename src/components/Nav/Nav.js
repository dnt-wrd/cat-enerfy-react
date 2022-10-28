import logoDesktop from "../../assets/logo-desktop.svg";
import Layout from "../Layout";
import {Link} from "react-router-dom";
import style from './Nav.module.css';
import cn from 'classnames';

export default function Nav() {
    return (
        <nav className={cn(style.navigation, style.navigationMain, style.navigationCatalog)}>
            <Layout className={style.navigationLayout}>
                <div className={style.logo}>
                    <img src={logoDesktop} alt="Energy Catalog Logo"/>
                </div>
                <ul className={style.menu}>
                    <li className={style.menuItem}>
                        <Link className={style.menuItemLinkCatalog} to="/">Главная</Link>
                    </li>
                    <li className={cn(style.menuItem, style.active)}>
                        <Link className={cn(style.menuItemLinkCatalog, style.active)} to="/catalog">Каталог продукции</Link>
                    </li>
                    <li className={style.menuItem}>
                        <Link className={style.menuItemLinkCatalog} to="/form">Подбор программы</Link>
                    </li>
                </ul>
            </Layout>
        </nav>
    )
}