import React from 'react';
import Header from '../Head/header';
import styled from 'styled-components';
import styles from './styles.module.scss';
import img2 from '../../assets/image/news2.jpg';
import {Link, useParams} from 'react-router-dom';
import {newsApi} from '../../Services/NewsApi/newsApi';
const NewsDetial = () => {
    const params = useParams()
    const id = params.id;
    const data = newsApi[id - 1];
    return (
        <div className={styles.container}>
            <div>
                <Header />
            </div>
            <Div>
                <MainContainer>
                    <ImageContainer>
                        <Image src={img2} alt="BitCoin" />
                    </ImageContainer>
                    <div>
                        <h2>{data.title}</h2>
                    </div>
                    <div>
                        <p>{data.auther}</p>
                        <p>{data.publish}</p>
                    </div>
                    <div>
                        <p>{data.paragraph1}</p>
                        <p>{data.paragraph2}</p>
                        <p>{data.paragraph3}</p>
                        <p>{data.paragraph4}</p>
                        <p>{data.paragraph5}</p>
                    </div>
                </MainContainer>
            </Div>
            <div>
                <Link to="/News"><Button>Back to News Page</Button></Link>
            </div>
        </div>
    );
};


const Div = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
const MainContainer = styled.div`
    width: 80%;
    display; flex;
    justify-content: center;
    border-radius: 25px;
    background-color: white;
    
    `
    const Image = styled.img`
    width: 200px;
    `
    const Button = styled.span`
    background-color: blue; 
    `
    const ImageContainer = styled.div`
    width: 100%;
    display; flex;

`
export default NewsDetial;