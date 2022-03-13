import React , { useEffect , useState , createContext} from 'react';
import { Coins } from '../Services/api'


export const AllCoins = createContext();

const AllCoin = ({children}) => {
    const [coin , setCoin] = useState([])
    
    useEffect(() =>{
        const fetchApi =  async() =>{
            const data = await Coins()
            setCoin(data)
        } 
        fetchApi()
    } , [])

    return (
            <AllCoins.Provider value={coin}  >
                {children}
            </AllCoins.Provider>
    );
};

export default AllCoin;