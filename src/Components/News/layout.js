import React,{useEffect, useState} from 'react';
import Header from '../Head/header';
import styles from './styles.module.scss';
import News from './News';

import img1 from '../../assets/image/news3.jpg';

import { newsApi } from '../../Services/NewsApi/newsApi';
const Layout = () => {
    const [data , setData] = useState([])

    useEffect(() => {
        setData(newsApi)
    }, [data]);
    
    return (
        <div className={styles.container}>
            <Header />
            <div>{
                data.map(news => <News key={news.id}
                    id={news.id}
                    image={img1}
                    title={news.title}
                    par1={news.paragraph1} />)
                }
            </div>
        </div>
    );
};

export default Layout;