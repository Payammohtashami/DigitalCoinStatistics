import React from 'react';
import styles from './Detial.module.css';
import { Link } from 'react-router-dom';
import {persentCalc} from '../../helper/function';
import ReactTooltip from 'react-tooltip';
import Chart from './Chart'

const Detial = ({name,symbol,image,rank,price,high,low,change24,persentChange,lastUpdate,weekChange,marketCap,marketCapChangePercentag24h,totalVolume,marketCapChange24h }) => {


    const persent = persentCalc(low , high , price)

    const chartStyle = {
        backgroundColor: "#003B73",
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
            <div className={styles.container}>
                <div className={styles.title}>
                    <div className={styles.head}>
                        <div className={styles.detials}>
                            <div className={styles.image}>
                                <img src={image} alt={symbol}/>
                            </div>
                            <div className={styles.detail} >
                                <h3>{name}</h3>
                                <p>{upperSymbol}</p>     
                            </div>
                        </div>

                        <div className={styles.priceDetial}>
                            <div className={styles.persentChange}>
                                <h3>${price}</h3>
                                {fixedPersent > 0 ?
                                    <p className={styles.pos}>{fixedPersent}%</p> 
                                        :
                                    <p className={styles.neg}>{fixedPersent}%</p> 
                                }
                            </div>
                            <div className={styles.chartBody}>
                                <div className={styles.titleChart}>
                                    <p>low(24h)</p>
                                    <p>high(24h)</p>
                                </div>
                                <div className={styles.chart}>
                                    <div data-tip={`$${price}`} style={chartStyle}></div>
                                </div>
                                <div className={styles.priceChart}>
                                    <p>${low}</p>
                                    <p>${high}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        display : "flex",
                        borderBottom : "1px solid #003B7370"
                }}>
                        <div className={styles.marketCap}>
                            <div className={styles.marketTitle}>
                                <ul>
                                    <li>Market Cap</li>
                                    <li>Market Cap Chnage($)</li>
                                    <li>Market Cap Change(%)</li>
                                    <li>Volume(24h)</li>
                                </ul>
                            </div>
                            <div className={styles.marketPrice}>
                                <ul>
                                    <li>${marketCap}</li>
                                    <li>${marketCapChange}</li>
                                    <li>{marketCapChangePercen}%</li>
                                    <li>${totalVolume}</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.price}>
                            <div className={styles.marketTitle}>
                                <ul>
                                    <li>Low Price(24h)</li>
                                    <li>High Price(24h)</li>
                                    <li>Price Change(24h)</li>
                                    <li>Last Update</li>
                                </ul>
                            </div>
                            <div className={styles.marketPrice}>
                                <ul>
                                    <li>${low}</li>
                                    <li>${high}</li>
                                    <li>${change24}</li>
                                    <li>{lastUpdate}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <br />
                        <h3>Weekly Price Report Chart</h3>
                    <div className={styles.priceCharts}>
                            <Chart weekChange={weekChange} />
                    </div>
                </div>
            </div>

            <div className={styles.backbtn}>
                <Link to="/">Back to Home</Link>
            </div>
            <ReactTooltip />
        </>
    );
};

export default Detial;