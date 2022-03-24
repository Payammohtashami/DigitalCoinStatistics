import React from 'react';
import styles from './stylesPage.module.css';

const Layout = () => {
    return (
            <div className={styles.secContaioner}>
                <div className={styles.container}>
                    <div className={styles.circle}></div>
                    <div className={styles.circle}></div>
                </div>
            </div>
    );
};

export default Layout;