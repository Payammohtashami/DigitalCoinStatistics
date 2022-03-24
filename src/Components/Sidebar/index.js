import React,{useContext} from 'react';
// Components
import Menu from './Menu';
// Styles
import "../../assets/scss/style.scss"
// Image
import logo from '../../assets/image/logo.png';

// Context
import { Theme } from '../../Context/ThemeContext';
const Sidebar = () => {
    const {theme} = useContext(Theme)
    return (
        <div className={`sidebar-container ${theme.theme}`}>
            <div className={`sidebar-header ${theme.theme}`}>
                <img src={logo} alt="Logo"/>
                <div className={`sidebar-title ${theme.theme}`}>
                    <h3>Daimand</h3>
                    <p>Digital Coin</p>
                </div>
            </div>
            <div>
                <Menu />
            </div>
        </div>
    );
};

export default Sidebar;