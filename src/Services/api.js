import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=50&page=1&sparkline=true";

export const getCoin = async() =>{
    const response = await axios.get(BASE_URL)
    return response.data;
}

const ALLCOIN_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=true"
export const Coins = async() =>{
    const response = await axios.get(ALLCOIN_URL)
    return response.data;
}