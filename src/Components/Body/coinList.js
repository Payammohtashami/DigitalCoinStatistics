import React, { useContext } from 'react';
import styles from './assets/css/coinList.module.css'
import { Link } from 'react-router-dom';

import { CurrencyContext } from '../../Context/Currency';

const CoinList = ({name , image , price , highPrice , priceChange , priceChangePersent , lowPrice , marketCapRank}) => {
    const {state} =useContext(CurrencyContext)

    return (
        <div className={styles.container}>
            <div>
                <table>
                    <tbody className={styles.Cointable}>
                        <tr>
                        <td className={styles.CoinImage}><img src={image} alt={name} /></td>
                        <td className={styles.CoinName}>{name}</td>
                        <td className={styles.CoinPrice}>{state.symbol} {price}</td>
                            {priceChangePersent > 0 ? 
                                <td className={styles.CoinChange}><span className={styles.pos}> {priceChangePersent.toFixed(2)}% ({state.symbol}{priceChange.toFixed(1)})</span></td>
                                :
                                <td className={styles.CoinChange}><span className={styles.neg}> {priceChangePersent.toFixed(2)}% ({state.symbol}{priceChange.toFixed(1)})</span></td>
                            }
                        <td className={styles.CoinLow}>{state.symbol}{lowPrice}</td>
                        <td className={styles.CoinHigh}>{state.symbol}{highPrice}</td>
                        <td className={styles.CoinBtn}><Link to={`/detail/${marketCapRank}`}  ><button>Detail</button></Link></td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default CoinList;