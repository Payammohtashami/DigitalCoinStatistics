import React,{createContext, useReducer} from 'react';

export const CurrencyContext = createContext();


const initialState = {
    currency : "usd",
    symbol : "$"
}
const reducer = (state, action) => {
    switch(action.type) {
        case "usd" :
            return { currency: "usd",  symbol : "$"};
        case "eur":
            return { currency: "eur",  symbol : "€"};
        case "jpy":
            return { currency: "jpy",  symbol : "¥"};
        case "gbp":
            return { currency: "gbp",  symbol : "₤"};
        default:
            return state;
    }
}
const Currency = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
        <CurrencyContext.Provider value={{state, dispatch}}>
            {props.children}
        </CurrencyContext.Provider>
    );
};

export default Currency;