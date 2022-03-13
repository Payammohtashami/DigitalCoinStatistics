import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import styles from './Menu.module.css'


// Icon
import home from '../../assets/image/home_icon.png'
import exchange from '../../assets/image/exchange_icon.png'
import calculator from '../../assets/image/calculator_con.png'
import chat from '../../assets/image/chat_icon.png'
import setting from '../../assets/image/setting_icon.png'
const Menu = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.menu}>
                <Link to="/"><li><img src={home} alt="Icon" />Home</li></Link>
                <Link to="/Exchange"><li><img src={exchange} alt="Icon" />Exchange</li></Link>
                <Link to="/Calculator"><li><img src={calculator} alt="Icon" />Calculator</li></Link>
                <Link to="/ChatRoom"><li><img src={chat} alt="Icon" />Chat</li></Link>
                <Link to="/Setting"><li><img src={setting} alt="Icon" />Setting</li></Link>
            </ul>
        </div>
    );
};

export default Menu;