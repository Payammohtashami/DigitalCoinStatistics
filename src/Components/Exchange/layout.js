import React from 'react';
import styles from '../../assets/css/layout.module.css';

// Components
import Header from '../Head/header';
import Loading from '../LoadingPage/layout';
const layout = () => {
    return (
        <div className={styles.container}>
            <Header />
            <Loading />
        </div>
    );
};

export default layout;