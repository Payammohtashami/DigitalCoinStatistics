import React from 'react';
import styles from './Chart.module.css'
import Line from './line';
import ReactTooltip from 'react-tooltip';
const Chart = ({weekChange}) => {

    
    const prices = weekChange.map( item => item.toFixed(2) )

    function myArrayMax(arr) {
        return Math.max.apply(null, arr);
    }
    function myArrayMin(arr) {
        return Math.min.apply(null, arr);
    }

    const max = myArrayMax(prices)
    const min = myArrayMin(prices)


    const heights = (arr , max , min) =>{
        const height = ((arr - min) * 100) / (max - min);
        return height
    }

    
    return (
        <>
        <div className={styles.container}>
            <div className={styles.Chart}>
                <div className={styles.title}>
                    <span>${max}</span>
                    <span>${min}</span>
                </div>
                <div className={styles.price}>
                    <div className={styles.chartLine}>
                        {prices.map(
                            (item) => <Line price={item}   lineHeight={heights(item , max , min)} />
                        )}                          
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};



export default Chart;