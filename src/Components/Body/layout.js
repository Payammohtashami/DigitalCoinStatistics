import React from 'react';
import styles from '../../assets/css/layout.module.css'

// Components 
import Header from '../Head/header'
import Cards from './cards';
import CoinsList from './coinsList';

const layout = () => {
    return (
        <div className={styles.container}>
            <Header />
            <Cards />
            <CoinsList />
        </div>
    );
};

export default layout;