import cat from '../../assets/cat.png'
import bigImage from '../../assets/img.png'
import style from './Boris.module.css'
import cn from "classnames";

const Boris = () => {
    return (
        <section className={style.borisSection}>
            <div className={cn(style.liveExampleFlex, style.layout)}>
                <div>
                    <h2 className={cn(style.headerH2, style.liveExample)}>
                        Живой пример
                    </h2>
                    <div className={style.borisText}>
                        <p>
                            Борис сбросил 5 кг за 2 месяца, просто заменив свой<br />
                            обычный корм на Cat Energy Slim. Отличный результат<br />
                            без изнуряющих тренировок! При этом он не менял своих<br />
                            привычек и по-прежнему спит по 16 часов в день.
                        </p>
                        <div className={style.borisColumn}>
                            <div className={cn(style.borderBoris, style.textBoris)}>
                                <p className={style.textCenter}>5 КГ</p>
                                <div className={style.borderText}>Снижение веса</div>
                            </div>
                            <div className={cn(style.borderBoris, style.textBoris)}>
                                <p className={style.textCenter}>60 дней</p>
                                <div className={style.borderText}>Затрачено времени</div>
                            </div>
                        </div>
                        <div className={style.food}>
                            <div>Затраты на питание:</div>
                            <div>15 000 руб</div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={cat} alt="cat" />
                </div>

            </div>
        </section>
    );
};

export default Boris;

