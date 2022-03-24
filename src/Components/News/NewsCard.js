import React,{useContext} from 'react';
import {Link} from 'react-router-dom';

// Style
import '../../assets/scss/style.scss';

// Context
import { Theme } from '../../Context/ThemeContext';

const News = ({par1,id, image ,title}) => {
    const {theme} = useContext(Theme)
    return (
        <div className={`news-container`}>
            <div className={`news-box ${theme.theme}`}>
                <div className={`news-description`}>
                    <img src={image} alt="NewsImage"/>
                    <div className={`news-title ${theme.theme}`}>
                        <h3>{title}</h3>
                        <p>{par1}</p>
                        <div>
                            <Link to={`${id}`}> Read More ... </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;