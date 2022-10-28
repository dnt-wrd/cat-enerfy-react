import React from 'react';
import style from './Pagination.module.css'

const Pagination = ({
                        count
                    }) => {
    console.log(count)

    const result = new Array(count).fill(null);
    console.log(result)
    return (
        <div className={style.paginationContainer}>
            {
                result.map((item, index) => {
                    return (
                        <div className={style.paginationContainer}>{index+1}</div>
                    )
                })
            }

        </div>
    );
};

export default Pagination;