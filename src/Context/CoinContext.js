import React , { useEffect , useState , createContext} from 'react';
import { getCoin } from '../Services/api'


export const CoinsContext = createContext();

const CoinContext = (props) => {
    
    const [coin , setCoin] = useState([])
    
    
    useEffect(() =>{
        
        const fetchApi =  async() =>{
            const data = await getCoin()
            setCoin(data)
        }
        
        fetchApi()
    } , [])

    return (
            <CoinsContext.Provider value={coin}  >
                {props.children}
            </CoinsContext.Provider>
    );
};

export default CoinContext;