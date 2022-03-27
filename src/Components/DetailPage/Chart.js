import React, { useContext } from 'react';

// Style
import '../../assets/scss/style.scss';

// Components
import Line from './line';

// Context
import {CurrencyContext} from '../../Context/Currency';
import {Theme} from '../../Context/ThemeContext';

const Chart = ({weekChange}) => {

    const {theme} = useContext(Theme);
    const {state} =useContext(CurrencyContext);
    const prices = weekChange.map( item => item.toFixed(2) )

    function myArrayMax(arr) {
        return Math.max.apply(null, arr);
    }
    function myArrayMin(arr) {
        return Math.min.apply(null, arr);
    }

    const max = myArrayMax(prices).toFixed(1)
    const min = myArrayMin(prices).toFixed(1)


    const heights = (arr , max , min) =>{
        const height = ((arr - min) * 100) / (max - min);
        return height
    }

    
    return (
        <>
        <div className={`chart-container`}>
            <div className={`detail-chart`}>
                <div className={`maxprice-detail`}>
                    <span>{state.symbol}{max}</span>
                    <span>{state.symbol}{min}</span>
                </div>
                <div className={`chart-line-container`}>
                    <div className={`chart-line`}>
                        {prices.map(
                            (item) => <Line price={item} key={item}   lineHeight={heights(item , max , min)} />
                        )}                          
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};



export default Chart;