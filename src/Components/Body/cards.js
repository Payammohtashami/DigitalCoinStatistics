import React , {useContext} from 'react';


// Context
import {CoinsContext} from '../../Context/CoinContext';
import { Theme } from '../../Context/ThemeContext';

// Components
import Card from './card';
import Loading from '../LoadingPage/index'

// styles
import '../../assets/scss/style.scss';


const Cards = () => {
    
    const{theme} = useContext(Theme)
    const coinData = useContext(CoinsContext)
    return (
        <div className={`card-container ${theme.theme}`}>
            <div className={`main-title ${theme.theme}`}>
                <h3>Market Demand</h3>
            </div>
                { coinData.length ?
                        <div className={`cards-component ${theme.theme}`}>
                            <Card
                            key={coinData[0].market_cap_rank}
                            image={coinData[0].image}
                            name={coinData[0].name}
                            symbol={coinData[0].symbol}
                            price={coinData[0].current_price}
                            high24={coinData[0].high_24h}
                            low24={coinData[0].low_24h}
                            marketCapRank={coinData[0].market_cap_rank}
                            />
                            <Card 
                            key={coinData[1].market_cap_rank}
                            image={coinData[1].image}
                            name={coinData[1].name}
                            symbol={coinData[1].symbol}
                            price={coinData[1].current_price}
                            high24={coinData[1].high_24h}
                            low24={coinData[1].low_24h}
                            marketCapRank={coinData[1].market_cap_rank}
                            />
                            <Card 
                            key={coinData[2].market_cap_rank}
                            image={coinData[2].image}
                            name={coinData[2].name}
                            symbol={coinData[2].symbol}
                            price={coinData[2].current_price}
                            high24={coinData[2].high_24h}
                            low24={coinData[2].low_24h}
                            marketCapRank={coinData[2].market_cap_rank}
                            />
                        </div>
                            : <Loading />
                }
        </div>
    );
};

export default Cards;