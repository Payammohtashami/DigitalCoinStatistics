import React from 'react';
import styles from './assets/css/search.module.css'

const search = ({name , image}) => {
    return (
        <div className={styles.search}>
            <div className={styles.container}>
                <img className={styles.image} src={image} alt="name" />
                <p>{name}</p>
            </div>
        </div>
    );
};

export default search;