import React , { useContext } from 'react';
// Styles
import styles from './assets/css/coinsList.module.css'
import CoinList from './coinList'

// Context
import { CoinsContext } from '../../Context/CoinContext';

const CoinsList = () => {
    const coins = useContext(CoinsContext)

    return (
        <div className={styles.container}>
            <div className={styles.secendContainer}>
                <div className={styles.title}>
                    <h3>All Coins</h3>
                </div>
                <div className={styles.body}>
                <div className={styles.tableCon}>
                    <div className={styles.header}>
                        <table>
                            <thead>
                            <tr className={styles.table}>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Price Change (24h)</th>
                                <th>Low Price (24h)</th>
                                <th>High Price (24h)</th>
                                <th></th>
                            </tr>
                            </thead>
                        </table>
                    </div>
                </div>
                
                <div>
                {
                    coins.map(coin =><CoinList
                            key={coin.market_cap_rank}
                            id={coin.id}
                            name={coin.name}
                            image={coin.image}
                            price={coin.current_price}
                            highPrice={coin.high_24h}
                            lowPrice={coin.low_24h}
                            priceChange={coin.price_change_24h}
                            priceChangePersent={coin.price_change_percentage_24h}
                            marketCapRank={coin.market_cap_rank}
                            />
                        )
                    }
                </div>
                </div>
            </div>
        </div>
    );
};

export default CoinsList;