import React,{useContext} from 'react';
import '../../assets/scss/style.scss'

// Components 
import Header from '../Head/index'
import Cards from './cards';
import CoinsList from './coinsList';
import ChangePage from './ChangePage';

// Context
import { Theme } from '../../Context/ThemeContext';


const Layout = () => {

    const {theme} = useContext(Theme)

    return (
        <div className={`container ${theme.theme}`}>
            <Header />
            <Cards />
            <CoinsList />
            <ChangePage />
        </div>
    );
};

export default Layout;