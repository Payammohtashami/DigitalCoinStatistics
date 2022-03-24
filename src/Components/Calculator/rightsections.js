import React, { useContext } from 'react';
import styles from './assets/css/right.module.css';
import {DataContext} from '../../Context/Calculators';
import { CurrencyContext } from '../../Context/Currency';

const Rightsections = () => {

    const {state} =useContext(CurrencyContext);
    const {calcState} = useContext(DataContext);

    const DollarChange = calcState.outputPrice * calcState.number;
    return (
        <div className={styles.container}>
            <div className={styles.symbol}>
                <h1>{calcState.calculate} <span>{calcState.calculate > 0 && calcState.symbol.toUpperCase()}</span></h1>
            </div>
            <div className={styles.List}>
                <div className={styles.listTitle}>
                    <ul>
                        <li className={styles.title}><span>{calcState.inputCoin}</span> Price</li>
                        <li>{calcState.inputPrice}{state.symbol}</li>
                    </ul >
                    <ul>
                        <li className={styles.title}><span>{calcState.outputCoin}</span> Price</li>
                        <li>{calcState.outputPrice}{state.symbol}</li>
                    </ul>
                    <ul>
                        <li className={styles.title}><span>{calcState.outputCoin}</span> to {state.symbol}</li>
                        <li>{DollarChange.toFixed(5)}{state.symbol}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Rightsections;