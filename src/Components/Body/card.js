import React , {useContext} from 'react';
import styles from './assets/css/card.module.css'
import { Link } from 'react-router-dom';
import { CurrencyContext } from '../../Context/Currency';
const Card = ({name , image , price ,symbol , high24 , low24 , marketCapRank}) => {

    const {state} =useContext(CurrencyContext);
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
                        <li>{state.symbol}{price} </li>
                        <li>{state.symbol}{high24} </li>
                        <li>{state.symbol}{low24}</li>
                    </ul>
                </div>
                <div className={styles.btn}>
                    <Link to={`/detail/${marketCapRank}`}><button>Detail</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Card;