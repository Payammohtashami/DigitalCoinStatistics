import React,{useContext} from 'react';
import styles from './assets/css/search.module.css'
import { Link } from 'react-router-dom';
import { SearchContext } from './header';
const Search = ({name , image , marketCapRank}) => {

    const setSearch = useContext(SearchContext)
    const clearHandler = () =>{
        setSearch("")
    }
    return (
        <div className={styles.search}>
            <div className={styles.container}>
                <Link onClick={clearHandler} to={`/detail/${marketCapRank}`}>
                <img className={styles.image} src={image} alt="name" />
                <p>{name}</p>
                </Link>
            </div>
        </div>
    );
};

export default Search;