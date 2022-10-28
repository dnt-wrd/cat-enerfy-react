import Layout from "../../components/Layout";
import Heading from "../../components/Heading";
import {ADDS} from "../../constants";
import CatalogItem from "../../components/Item";
import AddsItem from "../../components/Adds";
import giftBox from "../../assets/gift-box.svg";
import {useEffect, useState} from "react";
import style from "./CatalogPage.module.css"
import urlConfig from "../../config";
import Pagination from "../../components/Pagination/Pagination";
import logo from "../../assets/cat.png";
const kek = "../../assets/cat.png";
let totalItems = 0;

const CatalogPage = () => {

    const [items, setItems] = useState([]);
    //const [countItems, setCountItems] = useState([]);
    console.log(items)
    //console.log(">>>>>countItems>>>>" + countItems)
    // console.log(setItems)
    const [countCatalog, setCountCatalog] = useState(0);
    const [countAdds, setCountAdds] = useState(0);

    useEffect(() => {
        const getFetch = async () => {
            const response = await fetch(`${urlConfig.ip}${urlConfig.port}/catalog?_page=1&_limit=4`)
                .then(res => {
                    return {
                        data: res.json(),
                        totalCount: res.headers.get('X-total-Count')
                    }
                })
            const data = await response.data;
            totalItems = response.totalCount;
            setItems(data);
            console.log(`data >>> ${data}`)
            //console.log(`X-total-Count >>> ${total}`)

        }

        getFetch();

    }, [])


    const handleClickCatalog = () => {
        setCountCatalog(countCatalog + 1);
    }

    const handleClickAdds = () => {
        setCountAdds(countAdds + 1);
    }


    return (
        <>

            <section className={style.headerCatalog}>
                <Layout id="layout-catalog" test={[1, 23, 4]}>

                    <div className={style.flexTitle} id="flex-title">

                        <Heading level={1} className={style.h1Catalog}>Каталог продукции:
                            основных товаров {countCatalog},
                            дополнительных {countAdds}
                        </Heading>

                    </div>
                    <div className={style.gridCatalog}>

                        {items.map((el) => {
                            console.log(el.weight)
                            return <CatalogItem

                                imgURL={el.picture}
                                title={el.title}
                                type={el.type}
                                weight={el.weight}
                                id={el.id}
                                flavor={el.flavor}
                                price={el.price}
                                onClick={
                                    handleClickCatalog
                                }
                            />;
                        })}


                    </div>
                    <Pagination count={Math.ceil(totalItems/4)}/>
                </Layout>

            </section>

            <section className={style.addProducts}>
                <Layout>
                    <Heading level={3} className={style.h3Adds}>
                        Дополнительные товары
                    </Heading>


                    <div className={style.bigGridAddProducts} id="catalog-grid">
                        <div className={style.table} id="table">
                            {
                                ADDS.map((element) => (
                                        <AddsItem
                                            name={element.name}
                                            count={element.count}
                                            price={element.price}
                                            id={element.id}
                                            onClick={
                                                handleClickAdds
                                            }
                                        />
                                    )
                                )
                            }
                        </div>
                        <button className={style.gridPicture}>

                            <img src={giftBox} alt="gift-box"/>
                            <div className={style.gridBigButtonText}>
                                Закажите все
                                и получите чехол для
                                кота в подарок!
                            </div>

                        </button>


                    </div>
                </Layout>


            </section>

            <section>
                <div className="layout1 map">

                </div>
            </section>
        </>)
};

export default CatalogPage;