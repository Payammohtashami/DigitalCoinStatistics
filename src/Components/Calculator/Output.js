import React,{useContext} from 'react';
import styles from './assets/css/search.module.css';
// import {OutputCoinContext,OutputDisplayedContext,OutputPriceContext } from './leftsections';
import { SetDataContext} from '../../Context/Calculators';

const Output = ({name , price , symbol}) => {
    const setDatas = useContext(SetDataContext);



    const setHandler = () => {
        setDatas[5](price)
        setDatas[4](name);
        setDatas[7]("none");
        setDatas[8](symbol)

    }

    return (
            <div className={styles.cointainer}>
                <button onClick={setHandler}>{name}</button>
            </div>
    );
};

export default Output;