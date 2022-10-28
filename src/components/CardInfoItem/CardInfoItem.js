import React from 'react';
import {Link} from "react-router-dom";
import style from './CardInfoItem.module.css'
import arrowImg from '../../assets/arrow.svg'

const CardInfoItem = ({
                          image,
                          title,
                          text,
                          productType
                      }) => {
    return (
        <div className={style.cardInfo}>
            <div className={style.cardInfoTitleWrap}>
                <div className={style.cardInfoCircle}><img
                    src={image}
                    alt="Cat" className={style.cardInfoImage}/></div>
                <h2 className={style.cardInfoTitle}>{title}</h2></div>
            <div className={style.cardInfoDescription}>
                {text}
            </div>
            <Link to="catalog" className={style.cardInfoDescription}>
                каталог {productType}
                <img
                    src={arrowImg} alt={`"каталг" ${productType}`} className="img-arrow"/>
            </Link>
        </div>
    );
};

export default CardInfoItem;