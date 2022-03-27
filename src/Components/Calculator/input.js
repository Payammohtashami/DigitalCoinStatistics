import React,{useContext} from 'react';

// Style

// Context
import {DataContext} from '../../Context/Calculators';
import {Theme} from '../../Context/ThemeContext';
const Input = ({name , price}) => {
    const {calcDispatch} = useContext(DataContext);
    const {theme} = useContext(Theme)

    const setHandler = () => {
        calcDispatch({type : "INPUT_DISPLAY" , inputDisplayed : "none"});
        calcDispatch({type : "INPUT_PRICE" , inputPrice : price})
        calcDispatch({type : "INPUT_COIN" , inputCoin : name})

    }

    return (
            <div>
                <button onClick={setHandler}>{name}</button>
            </div>
    );
};

export default Input;