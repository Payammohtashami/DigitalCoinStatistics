import axios from "axios";

export const getCoin = async(currency , page) =>{
    const BASE_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=50&page=${page}&sparkline=true`
    const response = await axios.get(BASE_URL)
    return response.data;
}

export const Coins = async(currency) =>{
    const ALLCOIN_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=250&page=1&sparkline=true`
    const response = await axios.get(ALLCOIN_URL)
    return response.data;
}