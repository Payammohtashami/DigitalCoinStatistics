import React from 'react';
import styles from './assets/css/layout.module.css';
import RightSection from './rightsections'
import LeftSection from './leftsections'



// Components
import Header from '../Head/index';

const Layout = () => {

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.calculator}>
                <div className={styles.calc}>
                    <div className={styles.left}>
                        <LeftSection />
                    </div>
                    <div className={styles.right}>
                        <RightSection />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;