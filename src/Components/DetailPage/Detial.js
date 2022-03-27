import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

// Style
import '../../assets/scss/style.scss'

// Component
import Chart from './Chart'

// Context
import {persentCalc} from '../../helper/function';
import {CurrencyContext} from '../../Context/Currency';
import { Theme } from '../../Context/ThemeContext';

const Detial = ({name,symbol,image,rank,price,high,low,change24,persentChange,lastUpdate,weekChange,marketCap,marketCapChangePercentag24h,totalVolume,marketCapChange24h }) => {

    const {state} = useContext(CurrencyContext);
    const persent = persentCalc(low , high , price)
    const {theme} = useContext(Theme)
    const chartStyle = {
        backgroundColor: "#05445E",
        width: `${persent}%`,
        height: "5px",
        borderRadius : "10px"
    }
    const upperSymbol = symbol.toUpperCase()
    const fixedPersent = persentChange.toFixed(2)
    const marketCapChangePercen = marketCapChangePercentag24h.toFixed(3)
    const marketCapChange = marketCapChange24h.toFixed(2)
    return (
        <>
            <div className={`detail-container`}>
                <div className={`detail-title ${theme.theme}`}>
                    <div className={`detail-header`}>
                        <div className={`detail-description`}>
                            <div className={`coin-image`}>
                                <img src={image} alt={symbol}/>
                            </div>
                            <div className={`description ${theme.theme}`} >
                                <h3>{name}</h3>
                                <p>{upperSymbol}</p>     
                            </div>
                            <div className={`persentChange ${theme.theme}`}>
                                <h3>{state.symbol}{price}</h3>
                                {fixedPersent > 0 ?
                                    <p className={`pos`}>{fixedPersent}%</p> 
                                        :
                                    <p className={`neg`}>{fixedPersent}%</p> 
                                }
                            </div>
                        </div>

                        <div className={`priceDetial`}>
                            <div className={`detail-maxprice-shows ${theme.theme}`}>
                                <div className={`detail-maxprice-description`}>
                                    <p>low(24h)</p>
                                    <p>high(24h)</p>
                                </div>
                                <div className={`chart`}>
                                    <div data-tip={`${state.symbol}${price}`} style={chartStyle}></div>
                                </div>
                                <div className={`priceChart ${theme.theme}`}>
                                    <p>{state.symbol}{low}</p>
                                    <p>{state.symbol}{high}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='harkhari'>
                        <div className={`marketCap`}>
                            <div className={`detail-market-title ${theme.theme}`}>
                                <ul>
                                    <li>Market Cap</li>
                                    <li>Market Cap Chnage($)</li>
                                    <li>Market Cap Change(%)</li>
                                    <li>Volume(24h)</li>
                                </ul>
                            </div>
                            <div className={`market-detail-price ${theme.theme}`}>
                                <ul>
                                    <li>{state.symbol}{marketCap}</li>
                                    <li>{state.symbol}{marketCapChange}</li>
                                    <li>{marketCapChangePercen}%</li>
                                    <li>{state.symbol}{totalVolume}</li>
                                </ul>
                            </div>
                        </div>
                        <div className={`price`}>
                            <div className={`detail-market-title ${theme.theme}`}>
                                <ul>
                                    <li>Low Price(24h)</li>
                                    <li>High Price(24h)</li>
                                    <li>Price Change(24h)</li>
                                    <li>Last Update</li>
                                </ul>
                            </div>
                            <div className={`market-detail-price ${theme.theme}`}>
                                <ul>
                                    <li>{state.symbol}{low}</li>
                                    <li>{state.symbol}{high}</li>
                                    <li>{state.symbol}{change24}</li>
                                    <li>{lastUpdate}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className={`detial-price-charts ${theme.theme}`}>
                        <h3>Weekly Price Report Chart</h3>
                            <Chart kayvalue={rank} weekChange={weekChange} />
                    </div>
                </div>
            </div>

            <div className={`back-detail-button ${theme.theme}`}>
                <Link to="/">Back to Home</Link>
            </div>
            <ReactTooltip />
        </>
    );
};

export default Detial;