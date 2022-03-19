import React, { createContext , useState} from 'react';

export const ResultContext = createContext();
export const DataContext = createContext();
export const SetDataContext = createContext();

const Calculators = (props) => {

    const [number , setNumber] = useState(0);
    const [inputCoin , setinputCoin] = useState("");
    const [inputPrice , setInputPrice] = useState(0);
    const [outputCoin , setOutputCoin] = useState("");
    const [outputPrice , setOutputPrice] = useState(0);
    const [inputDisplayed , setInputDisplayed] = useState("block");
    const [outputDisplayed , setOutputDisplayed] = useState("block");
    const [calcResult , setCalcResult] = useState([]);
    const [symbol , setSymbol] = useState("");


    const calculatorData = [number , inputCoin , inputPrice , outputCoin ,outputPrice , inputDisplayed , outputDisplayed , calcResult , symbol]
    const setCalculatorData = [setNumber , setCalcResult , setinputCoin , setInputPrice , setOutputCoin , setOutputPrice , setInputDisplayed , setOutputDisplayed , setSymbol]

    
    return (
                        <DataContext.Provider value={calculatorData}>
                            <SetDataContext.Provider value={setCalculatorData}>
                                <ResultContext.Provider value={calcResult}>
                                    {props.children}
                                </ResultContext.Provider>
                            </SetDataContext.Provider>
                        </DataContext.Provider>
    );
};

export default Calculators;