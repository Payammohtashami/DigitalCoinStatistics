import React,{ useState , useContext, createContext } from 'react';
import styles from './assets/css/header.module.css';
import { AllCoins } from '../../Context/AllCoin';
import Search from './search';
    
export const SearchContext = createContext()

const Header = () => {

    const coins = useContext(AllCoins)

    const [search , setSearch] = useState("");

    const searchHandler = event =>{
        setSearch(event.target.value)
    }
    
    const searchedCoin = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <SearchContext.Provider value={setSearch}>
        <div className={styles.container}>
            <div className={styles.serachBox}>
                <input type="text" placeholder="Search your Coin name ..." value={search}  onChange={searchHandler} />
            </div>
            <div name="hello" className={styles.searchbar}>
                <div className={styles.searchlist}>
                    {
                        searchedCoin.length < 20 &&
                        searchedCoin.map( coin =>
                            <Search 
                            key={coin.market_cap_rank} 
                            name={coin.name}
                            image={coin.image}
                            marketCapRank={coin.market_cap_rank}
                            />)
                        }
                
                </div>
            </div>
        </div>
        </SearchContext.Provider>
    );
};

export default Header;