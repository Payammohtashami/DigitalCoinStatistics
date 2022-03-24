import React , { useEffect , useState ,useContext, createContext} from 'react';
import { getCoin } from '../Services/api'
import {CurrencyContext} from './Currency'
import { PageMangeContext } from './PageMangeContext';
export const CoinsContext = createContext();

const CoinContext = (props) => {
    const {state} =useContext(CurrencyContext);
    const {manageState} =useContext(PageMangeContext);
    const [coin , setCoin] = useState([])
    useEffect(() =>{
        
        const fetchApi =  async() =>{
            const data = await getCoin(state.currency , manageState.num)
            setCoin(data)
        }
        
        fetchApi()
    } , [state ,manageState])

    return (
            <CoinsContext.Provider value={coin}  >
                {props.children}
            </CoinsContext.Provider>
    );
};

export default CoinContext;