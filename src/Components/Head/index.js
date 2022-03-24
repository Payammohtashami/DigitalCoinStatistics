import React,{ useState , useContext, createContext } from 'react';

// Style
import '../../assets/scss/style.scss';

// Component
import Search from './search';

// Context
import { AllCoins } from '../../Context/AllCoin';
import {Theme} from '../../Context/ThemeContext'
export const SearchContext = createContext()

const Header = () => {
    const {theme} = useContext(Theme)
    const coins = useContext(AllCoins)
    const [search , setSearch] = useState("");
    const searchHandler = event =>
    {
        setSearch(event.target.value)
    }
    const searchedCoin = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <SearchContext.Provider value={setSearch}>
        <div className={`searchbar-container ${theme.theme}`}>
            <div className={`serachbar`}>
                <input type="text" placeholder="Search your Coin name ..." value={search}  onChange={searchHandler} />
            </div>
            <div name="hello" className={`searchbar`}>
                <div className={`searchlist ${theme.theme}`}>
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