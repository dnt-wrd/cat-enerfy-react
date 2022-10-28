import React, {useState} from "react";
import Button from "../Button";
import style from './Adds.module.css'

function AddsItem({
                      name,
                      count,
                      price,
                      id,
                      onClick
                  }) {
    const [countBuy, setCount] = useState(1)
    const handleClick = () => {

        onClick && onClick()
    }

    return (
        <div className={style.smallGridElement}>
            <div className={style.gridName}>{name}</div>
            <div className={style.gridAmount}>{count}</div>
            <div className={style.gridPrice}>{price}</div>
            <div className={style.gridButtonContainer}>
                <Button onClick={handleClick}
                        typeItem="Дополнительные товары"
                        id={id}
                >
                    Заказать
                </Button>
            </div>
        </div>
    )

}

export default AddsItem;
