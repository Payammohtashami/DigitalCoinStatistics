import React  from 'react';



// Components
import Menu from './Menu';

// Styles
import styles from './layout.module.css';

// Image
import logo from '../../assets/image/logo.png'

// Context



const layOut = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img src={logo} alt="Logo" className={styles.logo} />
                <div className={styles.title}>
                    <h3>Daimand</h3>
                    <p>Digital Coin</p>
                </div>
            </div>
            <div className={styles.menu}>
                <Menu />
            </div>
            </div>
    );
};

export default layOut;