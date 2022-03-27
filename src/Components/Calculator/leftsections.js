// Package and Styles
import React , {useContext} from 'react';

// Style
import '../../assets/scss/style.scss';
import styled from 'styled-components';
// Components
import Output from './Output';
import Input from './input';

// Context
import {AllCoins} from '../../Context/AllCoin';
import {DataContext} from '../../Context/Calculators';
import {Theme} from '../../Context/ThemeContext';


const Leftsections = () => {
    
// States
    const coins = useContext(AllCoins);
    const {theme} = useContext(Theme)
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
    }

    return (
                    <div className={`left-calculator-container`}>
                        <div className={`calculator-manage ${theme.theme}`}>
                            <input onChange={inputSearchHandler} value={calcState.inputCoin}  placeholder="search input Coins ..."/>
                                <InputDiv calcInput={calcState.inputDisplayed} className={`searchlist`}>
                                    {
                                        searchedCoin.length < 20 && searchedCoin.map( coin =>
                                            <Input key={coin.market_cap_rank} name={coin.name} price={coin.current_price}/>)
                                        }
                                </InputDiv>
                            <input onChange={numberHandler} type="number" placeholder="Number??" / >
                            <input onChange={outputSearchHandler} value={calcState.outputCoin} placeholder="Exchange to ..." / >
                                <OutputDiv calcOutput={calcState.outputDisplayed} className={`searchlist`}>
                                {
                                    searchedExchangeCoin.length < 20 &&
                                    searchedExchangeCoin.map( coin => <Output key={coin.market_cap_rank} name={coin.name} price={coin.current_price} symbol={coin.symbol}/>)
                                }
                                </OutputDiv>
                            <button onClick={calcHandler} className={`calculator-button`}>Change</button>
                        </div>
                    </div>
    );
};

const InputDiv = styled.div`
    display:${props =>  props.calcInput};
`

const OutputDiv = styled.div`
    display: ${props =>  props.calcOutput};
`

export default Leftsections;