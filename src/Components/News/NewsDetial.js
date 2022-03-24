import React,{useContext} from 'react';
import {Link, useParams} from 'react-router-dom';

// style
import styled from 'styled-components';
import '../../assets/scss/style.scss';

// Components
import Header from '../Head/index';

// Context
import {newsApi} from '../../Services/NewsApi/newsApi';
import { Theme } from '../../Context/ThemeContext';
// Image
import img2 from '../../assets/image/news2.jpg';
const NewsDetial = () => {
    const {theme} = useContext(Theme)
    const params = useParams()
    const id = params.id;
    const data = newsApi[id - 1];
    return (
        <div className={`container ${theme.theme}`}>
            <Header />
            <div className={`news-detail-container`}>
                <div className={`main-news-container`}>
                    <img src={img2} alt="BitCoin" />
                    <div className={`news-detail-title ${theme.theme}`}>
                        <h2>{data.title}</h2>
                    </div>
                    <div>
                        <p className="news-auther">{data.auther} , {data.publish}</p>
                    </div>
                    <div className={`news-paragraph ${theme.theme}`}>
                        <p>{data.paragraph1}</p>
                        <p>{data.paragraph2}</p>
                        <p>{data.paragraph3}</p>
                        <p>{data.paragraph4}</p>
                        <p>{data.paragraph5}</p>
                    </div>
                </div>
            </div>
            <div className={`news-back-btn ${theme.theme}`}>
                <div>
                    <Link  to="/News">Back to News Page</Link>
                </div>

            </div>
        </div>
    );
};

export default NewsDetial;