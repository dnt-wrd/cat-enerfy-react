import bigImage from '../../assets/img.png';
import style from './MainHeader.module.css';
import cn from 'classnames';

const MainHeader = () => {
    return (
        <header className={style.header}>
            <div className={cn(style.headerRow, style.headerRowLeft)}>
                <div>
                    <h1>Функциональное <br/>питание для котов</h1>
                    <h3 className={style.h3Header}>Занялся собой? Займись котом!</h3>
                    <button className={style.bthHeader}>Подобрать программу</button>
                </div>
            </div>
            <div className={cn(style.headerRow, style.headerRowRight)}>
                <div className={style.headerImg}>
                    <img src={bigImage} alt="Стакан с едой"/>
                </div>
            </div>
        </header>
    );
};

export default MainHeader;

