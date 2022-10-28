import leaf from '../../assets/leaf.svg'
import clock from '../../assets/clock.svg'

import eat from '../../assets/eat.svg'
import tub from '../../assets/tub.svg'
import HowItWorksItem from "../HowItWorksItem";
import style from './HowItWorks.module.css'
import Layout from "../Layout";
import cn from 'classnames'


const HowItWorks = () => {
    return (
        <section className={style.howIsWorksSection}>
            <Layout>
                <h2 className={cn(style.headerH2, style.howIsWorks)}>Как это работает?</h2>
                <div className={style.cardNumberWrap}>
                    <HowItWorksItem
                        img={leaf}
                        text={"Функциональное питание содержит только полезные питательные вещества."}
                    />

                    <HowItWorksItem
                        img={tub}
                        text={"Выпускается в виде порошка, который нужно лишь залить кипятком и готово."}
                    />

                    <HowItWorksItem
                        img={eat}
                        text={"Замените один-два приема обычной еды на наше функциональное питание."}
                    />

                    <HowItWorksItem
                        img={clock}
                        text={"Уже через месяц наслаждайтесь изменениями к лучшему вашего питомца!"}
                    />

                </div>
            </Layout>

        </section>
    );
};

export default HowItWorks;

