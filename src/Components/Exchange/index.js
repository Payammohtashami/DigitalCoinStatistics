import React from 'react';
import styles from '../../assets/css/layout.module.css';

// Components
import Header from '../Head';
import Loading from '../LoadingPage/index';
const layout = () => {
    return (
        <div className={styles.container}>
            <Header />
            <Loading />
        </div>
    );
};

export default layout;