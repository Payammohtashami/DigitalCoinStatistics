import React from 'react';
import styles from './assets/css/card.module.css'
import { Link } from 'react-router-dom';
const card = ({name , image , price ,symbol , high24 , low24 , marketCapRank}) => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                 <div className={styles.image}>
                    <img src={image} alt={name} />
                </div>
                <div>
                    <h3>{symbol}</h3>
                    <p>{name}</p>
                </div>
                <div className={styles.list}>
                    <ul className={styles.listTitle}>
                        <li>Price</li>
                        <li>High(24h)</li>
                        <li>Low(24h)</li>
                    </ul>
                    <ul>
                        <li>${price} </li>
                        <li>${high24} </li>
                        <li>${low24}</li>
                    </ul>
                </div>
                <div className={styles.btn}>
                    <Link to={`/detail/${marketCapRank}`}><button>Detail</button></Link>
                </div>
            </div>
        </div>
    );
};

export default card;