import React from 'react';
import style from './HowItWorksItem.module.css'

const HowItWorksItem = ({
                            img,
                            text
                        }) => {
    return (
        <div className={style.smallCard}>
            <div className={style.smallCardSquare}>
                <img src={img}
                     alt="leaf"
                     className={style.smallCardImage}/>
            </div>
            <div className={style.smallCardText}>
                {text}
            </div>
        </div>
    );
};

export default HowItWorksItem;