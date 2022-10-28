import Layout from "../Layout";
import footerLogo from "../../assets/footer-logo.svg";
import vk from "../../assets/vk.svg";
import inst from "../../assets/inst.svg";
import fb from "../../assets/fb.svg";
import style from './Footer.module.css';

export default function Footer() {
    return (
        <footer>
            <Layout>
                <div className={style.footer}>
                    <div className={style.logo}>
                        <img src={footerLogo} alt="Footer Logo"/>
                    </div>
                    <div className={style.socialNetwork}>
                        <a href="vk.com"><img src={vk} alt="vk"/></a>
                        <a href="instagram.com"><img src={inst} alt="inst"/></a>
                        <a href="facebook.com"><img src={fb} alt="fb"/></a>
                    </div>
                    <div><p>academy</p></div>
                </div>
            </Layout>
        </footer>
    )
}