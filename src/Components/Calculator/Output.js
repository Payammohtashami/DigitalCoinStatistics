import React,{useContext} from 'react';
import styles from './assets/css/search.module.css';
// import {OutputCoinContext,OutputDisplayedContext,OutputPriceContext } from './leftsections';
import { DataContext} from '../../Context/Calculators';

const Output = ({name , price , symbol}) => {
    const {calcDispatch} = useContext(DataContext);



    const clickHandler = () => {
        calcDispatch({type : "OUTPUT_DISPLAY" , outputDisplayed : "none"});
        calcDispatch({type : "OUTPUT_PRICE" , outputPrice : price})
        calcDispatch({type : "OUTPUT_COIN" , outputCoin : name })
        calcDispatch({type : "SET_SYMBOL" , symbol : symbol})
    }
    
    return (
            <div className={styles.cointainer}>
                <button onClick={clickHandler}>{name}</button>
            </div>
    );
};

export default Output;