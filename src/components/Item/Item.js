import React, {useState} from "react";
import catalogImage from "../../assets/product1.svg";
import Image from "../Image";
import Heading from "../Heading";
import ListElement from "../ListElement";
import Button from "../Button";
import style from './Item.module.css'

export default function CatalogItem(props) {
    const {
        classNameBlock,
        imgURL,
        title,
        type,
        weight,
        id,
        onClick,
        flavor,
        price

    } = props;

    const [countBuy, setCount] = useState(1)
    const handleClick = () => {

        onClick && onClick()
    }
    return (
        <div className={style.gridElement}>
            <img src={imgURL} alt="дошик для кота"/>
            <Heading level={3} className={style.h3Grid}>
                {title} {type} {weight}

            </Heading>

            <div className={style.catalogList}>
                <ul className={style.listFirst}>

                    <ListElement
                        label="Масса"
                        value={`${weight} г`}
                    />


                    <ListElement
                        label="Вкус"
                        value={flavor}
                    />

                    <ListElement
                        label="Цена"
                        value={`${price} Р`}
                    />

                </ul>
            </div>
            <Button onClick={handleClick}
                    typeItem='"Основные товары"'
                    id={id}
            >
                Заказать
            </Button>


        </div>
    )
}