import React, { useContext } from 'react';

// Style
import '../../assets/scss/style.scss';

// Conntext
import {DataContext} from '../../Context/Calculators';
import {CurrencyContext} from '../../Context/Currency';
import {Theme} from '../../Context/ThemeContext';
const Rightsections = () => {

    const {state} =useContext(CurrencyContext);
    const {calcState} = useContext(DataContext);
    const {theme} = useContext(Theme)
    const DollarChange = calcState.outputPrice * calcState.number;
    return (
        <div>
            <div className={`calculator-symbol ${theme.theme}`}>
                <h1>{calcState.calculate} <span>{calcState.calculate > 0 && calcState.symbol.toUpperCase()}</span></h1>
            </div>
            <div className={`calculator-list ${theme.theme}`}>
                <div className={`calculator-list-item ${theme.theme}`}>
                    <ul>
                        <li className={`calculator-title`}><span>{calcState.inputCoin}</span> Price</li>
                        <li>{calcState.inputPrice}{state.symbol}</li>
                    </ul >
                    <ul>
                        <li className={`calculator-title`}><span>{calcState.outputCoin}</span> Price</li>
                        <li>{calcState.outputPrice}{state.symbol}</li>
                    </ul>
                    <ul>
                        <li className={`calculator-title`}><span>{calcState.outputCoin}</span> to {state.symbol}</li>
                        <li>{DollarChange.toFixed(5)}{state.symbol}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Rightsections;