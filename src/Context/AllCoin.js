import React , { useEffect , useContext, useState , createContext} from 'react';
import { Coins } from '../Services/api';
import { CurrencyContext } from './Currency';

export const AllCoins = createContext();

const AllCoin = ({children}) => {
    const [coin , setCoin] = useState([])
    const {state} =useContext(CurrencyContext);
    useEffect(() =>{
        const fetchApi =  async() =>{
            const data = await Coins(state.currency)
            setCoin(data)
        } 
        fetchApi()
    } , [state])

    return (
            <AllCoins.Provider value={coin}  >
                {children}
            </AllCoins.Provider>
    );
};

export default AllCoin;