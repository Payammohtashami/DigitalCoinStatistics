import React , { useContext } from 'react';
// Styles
import '../../assets/scss/style.scss';
import CoinList from './coinList'

// Context
import { CoinsContext } from '../../Context/CoinContext';
import {Theme} from '../../Context/ThemeContext';


const CoinsList = () => {
    const coins = useContext(CoinsContext)
    const {theme} =useContext(Theme)
    return (
        <div className={`coins-container`}>
            <div className={`main-coins-container`}>
                <div className={`main-title`}>
                    <h3>All Coins</h3>
                </div>
                <div className={`coins-list-body ${theme.theme}`}>
                    <div className={`table-header-container`}>
                        <div className={`table-header ${theme.theme}`}>
                            <table className={`title-coins-table`}>
                                <thead>
                                <tr >
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