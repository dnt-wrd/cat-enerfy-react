import catSlim from '../../assets/cat-slim.png'
import catPro from '../../assets/cat-pro.png'
import CardInfoItem from "../CardInfoItem";

import style from './CardInfo.module.css'
import Layout from "../Layout";


const CardInfo = () => {
    return (
        <section className={style.cardInfoSection}>
            <Layout>
                <div className={style.cardInfoWrap}>
                    <CardInfoItem
                        image = {catSlim}
                        title = "Похудение"
                        text = "Ваш кот весит больше собаки и почти утратил способность лазить по деревьям?
                                Пора на диету! Cat Energy Slim поможет вашему питомцу сбросить лишний вес."
                        productType = "SLIM"
                    ></CardInfoItem>

                    <CardInfoItem
                        image = {catPro}
                        title = "Набор массы"
                        text = "Заработать авторитет среди дворовых котов и даже собак? Серия Cat Energy Pro поможет
                                вашему коту нарастить необходимые мышцы!"
                        productType = "PRO"
                    ></CardInfoItem>

                </div>
            </Layout>
        </section>
    );
};

export default CardInfo;

