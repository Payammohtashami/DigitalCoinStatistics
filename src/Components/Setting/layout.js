import React,{useContext} from 'react';
import '../../assets/scss/style.scss';

// Components
import Header from '../Head/index'
import Setting from './setting';

// Context
import { Theme } from '../../Context/ThemeContext';

const Layout = () => {

    const {theme} = useContext(Theme)

    return (
        <div className={`container ${theme.theme}`}>
            <Header />
            <Setting/>
        </div>
    );
};

export default Layout;