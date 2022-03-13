import React from 'react';
import styles from '../../assets/css/layout.module.css';

// Components
import Header from '../Head/header'

const layout = () => {
    return (
        <div className={styles.container}>
            <Header />
        </div>
    );
};

export default layout;