import React,{useEffect,useContext,useState} from 'react';
// Style
import '../../assets/scss/style.scss';

// Components
import Header from '../Head/index';
import News from './NewsCard';

// Database
import {newsApi} from '../../Services/NewsApi/newsApi';

// Context
import { Theme } from '../../Context/ThemeContext';
// Image
import img1 from '../../assets/image/news3.jpg';

const Layout = () => {
    const [data , setData] = useState([])
    const {theme} = useContext(Theme)
    useEffect(() => {
        setData(newsApi)
    }, [data]);
    
    return (
        <div className={`container ${theme.theme}`}>
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