import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';



const News = ({par1,id, image ,title}) => {

    return (
        <div className={styles.cardContainer}>
            <div className={styles.xxx}>
                <div className={styles.yyy}>
                    <img src={image} alt="NewsImage"/>
                    <div className={styles.description}>
                        <h3>{title}</h3>
                        <p>{par1} <span><Link to={`${id}`}> Read More ... </Link></span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;