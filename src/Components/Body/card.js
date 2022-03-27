import React , {useContext} from 'react';
import {Link} from 'react-router-dom';

// Style
import '../../assets/scss/style.scss';

// Context
import {CurrencyContext} from '../../Context/Currency';
import { Theme } from '../../Context/ThemeContext';

const Card = ({name , image , price ,symbol , high24 , low24 , marketCapRank}) => {
    const {theme} = useContext(Theme);
    const {state} =useContext(CurrencyContext);
    return (
        <div className={`main-card-container ${theme.theme}`}>
            <div className={`main-card`}>
                 <div className={`card-image`}>
                    <img src={image} alt={name} />
                </div>
                <div >
                    <h3>{symbol}</h3>
                    <p>{name}</p>
                </div>
                <div className={`card-list`}>
                    <ul className={`list-title`}>
                        <li>Price</li>
                        <li>High(24h)</li>
                        <li>Low(24h)</li>
                    </ul>
                    <ul className='money-card'>
                        <li>{state.symbol}{price} </li>
                        <li>{state.symbol}{high24} </li>
                        <li>{state.symbol}{low24}</li>
                    </ul>
                </div>
                <div className={`card-button`}>
                    <Link to={`/detail/${marketCapRank}`}><button>Detail</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Card;