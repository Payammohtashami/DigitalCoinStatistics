import React, {useContext} from 'react';
import '../../assets/scss/style.scss'

import { Link } from 'react-router-dom';

import { CurrencyContext } from '../../Context/Currency';
import {Theme} from '../../Context/ThemeContext';
const CoinList = ({name , image , price , highPrice , priceChange , priceChangePersent , lowPrice , marketCapRank}) => {
    const {state} = useContext(CurrencyContext)
    const {theme} = useContext(Theme)
    return (
        <div className={`coins-list-container`}>
            <div>
                <table className={`coin-table-descriptoin ${theme.theme}`}>
                    <tbody >
                    <tr>
                        <td className={`coin-list-image`}><img src={image} alt={name} /></td>
                        <td className={`coin-name`}>{name}</td>
                        <td className={`coin-price`}>{state.symbol} {price}</td>
                            {priceChangePersent > 0 ? 
                                <td className={`coin-change-color`}><span className={`positive`}> {priceChangePersent.toFixed(2)}% ({state.symbol}{priceChange.toFixed(1)})</span></td>
                                :
                                <td className={`coin-change-color`}><span className={`negative`}> {priceChangePersent.toFixed(2)}% ({state.symbol}{priceChange.toFixed(1)})</span></td>
                            }
                        <td className={`CoinLow`}>{state.symbol}{lowPrice}</td>
                        <td className={`CoinHigh`}>{state.symbol}{highPrice}</td>
                        <td className={`detial-button ${theme.theme}`}><Link to={`/detail/${marketCapRank}`}  ><button>Detail</button></Link></td>
                    </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default CoinList;