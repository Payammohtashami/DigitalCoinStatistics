import React,{useContext} from 'react';
import '../../assets/scss/style.scss'
import RightSection from './rightsections'
import LeftSection from './leftsections'


// Components
import Header from '../Head/index';

// Context
import {Theme} from '../../Context/ThemeContext';

const Layout = () => {

    const {theme} = useContext(Theme)
    return (
        <div className={`container ${theme.theme}`}>
            <Header />
            <div className={`calculator-container`}>
                <div className={`calculator-body ${theme.theme}`}>
                    <div className={`left-calculator`}>
                        <LeftSection />
                    </div>
                    <div className={`right-calculator`}>
                        <RightSection />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;