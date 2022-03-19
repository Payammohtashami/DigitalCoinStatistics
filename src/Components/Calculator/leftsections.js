// Package and Styles
import React , {useContext} from 'react';
import styles from './assets/css/left.module.css';
import styled from 'styled-components';
import { calculator } from '../../helper/function'
// Components
import Output from './Output';
import Input from './input';

// Context
import { AllCoins } from '../../Context/AllCoin';
import { SetDataContext , DataContext} from '../../Context/Calculators'

const Leftsections = () => {
    
// States
    const coins = useContext(AllCoins);


    const datas = useContext(DataContext)
    const setDatas = useContext(SetDataContext)


// Styles
    const InputDiv = styled.div`
        display:${datas[5]};
    `
    const OutputDiv = styled.div`
        display:${datas[6]};
    `
// Search Filter
    const searchedCoin = coins.filter(coin => coin.name.toLowerCase().includes(datas[1].toLowerCase()));
    const searchedExchangeCoin = coins.filter(coin => coin.name.toLowerCase().includes(datas[3].toLowerCase()));


    const inputSearchHandler = event =>{
        setDatas[2](event.target.value)
        setDatas[6]("block")
    }
    const outputSearchHandler = event =>{
        setDatas[4](event.target.value)
        setDatas[7]("block")
    }
    const numberHandler = event=>{
        setDatas[0](event.target.value)
    }
    const calcHandler = () =>{ 
        const calc = calculator(datas[2] , datas[4] , datas[0]);
        const result = [calc , datas[2] , datas[4]];
        setDatas[1](result)

    }

    return (
                    <div className={styles.container}>
                        <div className={styles.manage}>
                            <input className={styles.crypto} onChange={inputSearchHandler} value={datas[1]} placeholder="search input Coins ..."/>
                                <InputDiv className={styles.searchlist}>
                                    {
                                        searchedCoin.length < 20 && searchedCoin.map( coin =>
                                            <Input key={coin.market_cap_rank} name={coin.name} price={coin.current_price}/>)
                                        }
                                </InputDiv>
                            <input className={styles.number} onChange={numberHandler} type="number" placeholder="Number??" / >
                            <input className={styles.Output} onChange={outputSearchHandler} value={datas[3]} type="text" placeholder="Exchange to ..." / >
                                <OutputDiv className={styles.searchlist}>
                                {
                                    searchedExchangeCoin.length < 20 &&
                                    searchedExchangeCoin.map( coin => <Output key={coin.market_cap_rank} name={coin.name} price={coin.current_price} symbol={coin.symbol}/>)
                                }
                                </OutputDiv>
                            <button onClick={calcHandler} className={styles.btn}>Change</button>
                        </div>
                    </div>
    );
};

export default Leftsections;