import React,{useContext} from 'react';
import styles from './assets/css/search.module.css';

import { DataContext } from '../../Context/Calculators';

const Input = ({name , price}) => {
    const {calcDispatch} = useContext(DataContext);


    const setHandler = () => {
        calcDispatch({type : "INPUT_DISPLAY" , inputDisplayed : "none"});
        calcDispatch({type : "INPUT_PRICE" , inputPrice : price})
        calcDispatch({type : "INPUT_COIN" , inputCoin : name})

    }

    return (
            <div className={styles.cointainer}>
                <button onClick={setHandler}>{name}</button>
            </div>
    );
};

export default Input;