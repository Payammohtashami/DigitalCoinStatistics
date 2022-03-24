import React,{useContext} from 'react';

// Style
import '../../assets/scss/style.scss';

// Context
import {Theme} from '../../Context/ThemeContext';


const Layout = () => {

    const {theme} = useContext(Theme);
    
    return (
            <div className={`container ${theme.theme}`}>
                <div className="loader-container">
                    <div className="loader">
                        <div className="loader-circle"></div>
                        <div className="loader-circle"></div>
                    </div>
                </div>
            </div>
    );
};

export default Layout;