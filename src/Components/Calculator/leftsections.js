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
import {DataContext} from '../../Context/Calculators'

const InputDiv = styled.div`
    display:${props =>  props.calcInput};
`

const OutputDiv = styled.div`
    display: ${props =>  props.calcOutput};
`
const Leftsections = () => {
    
// States
    const coins = useContext(AllCoins);


    const {calcState , calcDispatch} = useContext(DataContext)


// Search Filter
    const searchedCoin = coins.filter(coin => coin.name.toLowerCase().includes(calcState.inputCoin.toLowerCase()));
    const searchedExchangeCoin = coins.filter(coin => coin.name.toLowerCase().includes(calcState.outputCoin.toLowerCase()));


    const inputSearchHandler = event =>{
        calcDispatch({type : "INPUT_DISPLAY" , inputDisplayed : "block"})
        calcDispatch({type : "INPUT_COIN" , inputCoin : event.target.value})
        calcDispatch({type : "INPUT_PRICE" , outputPrice : 0})
    }
    const outputSearchHandler = event =>{
        calcDispatch({type : "OUTPUT_DISPLAY" , outputDisplayed : "block"})
        calcDispatch({type : "OUTPUT_COIN" , outputCoin : event.target.value})
        calcDispatch({type : "OUTPUT_PRICE" , outputPrice : 0})
        calcDispatch({type : "SET_SYMBOL" , symbol : ""})
    }
    const numberHandler = event=>{
        const num = event.target.value;
        calcDispatch({type : "INPUT_NUM" , number : Number(num)})
    }
    const calcHandler = () =>{
        if(calcState.number !== 0 & calcState.inputPrice !== 0 & calcState.outputPrice !== 0 ){
            const result = (calcState.number * calcState.inputPrice) / calcState.outputPrice
            calcDispatch({type : "CALCULATE" , calculate : Number(result.toFixed(5))})
        }else{
            const result = "Please Enter Datas ..."
            calcDispatch({type : "CALCULATE" , calculate : result})
        }

        console.log(calcState.calculate);
    }

    return (
                    <div className={styles.container}>
                        <div className={styles.manage}>
                            <input className={styles.crypto} onChange={inputSearchHandler} value={calcState.inputCoin}  placeholder="search input Coins ..."/>
                                <InputDiv calcInput={calcState.inputDisplayed} className={styles.searchlist}>
                                    {
                                        searchedCoin.length < 20 && searchedCoin.map( coin =>
                                            <Input key={coin.market_cap_rank} name={coin.name} price={coin.current_price}/>)
                                        }
                                </InputDiv>
                            <input className={styles.number} onChange={numberHandler} type="number" placeholder="Number??" / >
                            <input className={styles.Output} onChange={outputSearchHandler} value={calcState.outputCoin} placeholder="Exchange to ..." / >
                                <OutputDiv calcOutput={calcState.outputDisplayed} className={styles.searchlist}>
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