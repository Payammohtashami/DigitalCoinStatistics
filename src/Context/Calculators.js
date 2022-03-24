import React, { createContext , useReducer} from 'react';

export const DataContext = createContext();


const initialState = {
    number : 0,
    inputCoin : "",
    inputPrice : 0,
    outputCoin : "",
    outputPrice : 0,
    inputDisplayed : "block",
    outputDisplayed : "block",
    symbol : "",
    calculate : 0
}

const reducer = (state , action) => {
    switch(action.type){
        case "INPUT_NUM" :
            return { ...state, number : action.number}
        case "INPUT_COIN" :
            return { ...state , inputCoin : action.inputCoin}
        case "OUTPUT_COIN" :
            return { ...state , outputCoin : action.outputCoin}
        case "INPUT_PRICE" :
            return { ...state , inputPrice : action.inputPrice}
        case "OUTPUT_PRICE" :
            return { ...state , outputPrice : action.outputPrice}
        case "INPUT_DISPLAY":
            return {...state, inputDisplayed : action.inputDisplayed}
        case "OUTPUT_DISPLAY":
            return { ...state, outputDisplayed : action.outputDisplayed}
        case "SET_SYMBOL":
            return { ...state, symbol : action.symbol}
        case "CALCULATE":
            return {...state , calculate : action.calculate}
        default:
            return state
    }
}
const Calculators = (props) => {

    const [calcState , calcDispatch] = useReducer(reducer , initialState);
    return (
            <DataContext.Provider value={{calcState , calcDispatch}}>
                        {props.children}
            </DataContext.Provider>
    );
};

export default Calculators;