import React , { useContext } from 'react';
import styles from './setting.module.css'
import { CurrencyContext } from '../../Context/Currency';
import { Theme } from '../../Context/ThemeContext';
const Setting = () => {

    const {state, dispatch} = useContext(CurrencyContext)
    const {themeDispatch} = useContext(Theme)
    const changeCurrency = e => {
        dispatch({type : e.target.value})
    }
    return (
        <div className={styles.container}>
            <div className={styles.setting}>
                <div className={styles.xyz}>
                    <h1>Setting Page</h1>
                    <div className={styles.CurrencyType}>
                        <ul>
                            <li>Currency Type</li>
                            <li>
                                <select onChange={changeCurrency} defaultValue={state.currency}>
                                    <option value={"usd"}>USD</option>
                                    <option value={"eur"}>EUR</option>
                                    <option value={"jpy"}>JPY</option>
                                    <option value={"gbp"}>Pound</option>
                                </select>
                            </li>
                        </ul>
                        <div className={styles.theme}>
                            <div onClick={() => { themeDispatch({type : "DARK"}) }} className={styles.dark}></div>
                            <div onClick={() => { themeDispatch({type : "LIGHT"}) }} className={styles.light}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Setting;