import React from 'react';
import styles from '../../assets/css/layout.module.css'

// Components 
import Header from '../Head/header'
import Cards from './cards';
import CoinsList from './coinsList';
import ChangePage from './ChangePage';

const layout = () => {
    return (
        <div className={styles.container}>
            <Header />
            <Cards />
            <CoinsList />
            <ChangePage />
        </div>
    );
};

export default layout;