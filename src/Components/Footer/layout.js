import React,{useContext} from 'react';
// Style
import '../../assets/scss/style.scss';

// Context
import { Theme } from '../../Context/ThemeContext';

const Layout = () => {

    const {theme} = useContext(Theme)
    return (
        <div className={`footer-container ${theme.theme}`}>
            <div className={`footer-main-container`}>
                <div className='footer-space-manager'>
                    <div>
                        <ul className={`footer-list ${theme.theme}`}>
                            <li className={`footer-title`}>Contact us</li>
                            <li>Email</li>
                            <li>WhatsUp</li>
                        </ul>
                    </div>
                    <div>
                        <ul className={`footer-list ${theme.theme}`}>
                            <li className={`footer-title`}>Social Media</li>
                            <li>Telegram</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
                    <div>
                        <ul className={`footer-list ${theme.theme}`}>
                            <li className={`footer-title`}>recently News</li>
                            <li>Bitcon</li>
                            <li>Ethereum</li>
                            <li>BNB</li>
                        </ul>
                    </div>
                </div>  
                <div className={`copyright-text ${theme.theme}`}>
                    <p>Copyright ©  2021-2022 Payam Mohtashami. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Layout;