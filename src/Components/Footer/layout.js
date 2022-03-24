import React from 'react';
import styles from './layout.module.css';
import styled from 'styled-components';


const layout = () => {
    return (
        <div className={styles.container}>
            <DivContainer>
                <MainContainer>
                    <div>
                        <ul>
                            <li>Contact us</li>
                            <li>Email</li>
                            <li>WhatsUp</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Social Media</li>
                            <li>Telegram</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>recently News</li>
                            <li>Bitcon</li>
                            <li>Ethereum</li>
                            <li>BNB</li>
                        </ul>
                    </div>
                </MainContainer>
                <div>
                    <h3>© Copyright 2022 by Refsnes Data. All Rights digitalCoin is Powered by Payam</h3>
                </div>
            </DivContainer>
        </div>
    );
};
const DivContainer = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const MainContainer = styled.div`
    display: flex;
    width: 60%;
    justify-content: space-between;

`
export default layout;