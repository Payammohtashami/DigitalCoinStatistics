import React from 'react';
import styles from '../../assets/css/layout.module.css';

// Components
import Header from '../Head/index'
import Setting from './setting';

const layout = () => {
    return (
        <div className={styles.container}>
            <Header />
            <Setting/>
        </div>
    );
};

export default layout;