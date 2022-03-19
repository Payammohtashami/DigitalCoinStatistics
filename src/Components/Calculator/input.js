import React,{useContext} from 'react';
import styles from './assets/css/search.module.css';
// import { InputCoinContext,InputDisplayedContext,InputPriceContext } from './leftsections';

import { SetDataContext} from '../../Context/Calculators';

const Input = ({name , price}) => {
    const setDatas = useContext(SetDataContext);


    const setHandler = () => {
        setDatas[3](price)
        setDatas[2](name);
        setDatas[6]("none");
    }

    return (
            <div className={styles.cointainer}>
                <button onClick={setHandler}>{name}</button>
            </div>
    );
};

export default Input;