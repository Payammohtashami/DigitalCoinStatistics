import React , {useContext} from 'react';

// Style
import '../../assets/scss/style.scss';

// Context
import {CurrencyContext} from '../../Context/Currency';
import {Theme} from '../../Context/ThemeContext';


const Setting = () => {
    const {theme} = useContext(Theme)
    const {state, dispatch} = useContext(CurrencyContext)
    const {themeDispatch} = useContext(Theme)
    const changeCurrency = e => {
        dispatch({type : e.target.value})
    }

    return (
        <div className={`setting-container `}>
            <div className={`setting-body ${theme.theme}`}>
                <div className={`settinng-main-container ${theme.theme}`}>
                    <h2>Setting Page</h2>
                    <div>
                        <div className={`Currency-type ${theme.theme}`}>
                            <h3>Currency Type : </h3>
                            <select onChange={changeCurrency} defaultValue={state.currency}>
                                <option value={"usd"}>USD</option>
                                <option value={"eur"}>EUR</option>
                                <option value={"jpy"}>JPY</option>
                                <option value={"gbp"}>Pound</option>
                            </select>
                        </div>
                        <div className={`theme-change-Box ${theme.theme}`}>
                            <div>
                                <h3>Change Theme : </h3>
                            </div>
                            <div>
                                <div onClick={() => { themeDispatch({type : "DARK"}) }} className={`dark`}></div>
                                <div onClick={() => { themeDispatch({type : "LIGHT"}) }} className={`light`}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Setting;