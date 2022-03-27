import React,{useContext} from 'react';
import '../../assets/scss/style.scss';

// Components
import Header from '../Head';
import Loading from '../LoadingPage/index';

// Contxet
import {Theme} from '../../Context/ThemeContext';
const Layout = () => {

    const {theme} = useContext(Theme)
    return (
        <div className={`container ${theme.theme}`}>
            <Header />
            <Loading />
        </div>
    );
};

export default Layout;