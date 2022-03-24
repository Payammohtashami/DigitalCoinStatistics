import React , {useContext} from 'react';
import {useParams } from 'react-router-dom';
import styles from '../../assets/css/layout.module.css';

// Context
import { AllCoins } from '../../Context/AllCoin'

// Components
import Header from '../Head/index';
import Detail from'./Detial';

const Layout = () => {
    const params = useParams();
    const id = params.id;
    const CoinsContext = useContext(AllCoins);
    const Coin = CoinsContext[id - 1];
    return (
        <div className={styles.container}>
            <Header />
            {
                Coin ?
                <Detail 
                    name={Coin.name}
                    symbol={Coin.symbol}
                    image={Coin.image}
                    rank={Coin.market_cap_rank}
                    price={Coin.current_price}
                    high={Coin.high_24h}
                    low={Coin.low_24h}
                    marketCap={Coin.market_cap}
                    marketCapChangePercentag24h={Coin.market_cap_change_percentage_24h}
                    marketCapChange24h={Coin.market_cap_change_24h}
                    change24={Coin.price_change_24h}
                    totalVolume={Coin.total_volume}
                    persentChange={Coin.price_change_percentage_24h}
                    lastUpdate={Coin.last_updated}
                    weekChange={Coin.sparkline_in_7d.price}
                    />
                :
                <h1>Loading</h1>
                }
        </div>
    );
};

export default Layout;



// props.value.matches.params.id