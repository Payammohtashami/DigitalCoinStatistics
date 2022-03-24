import React,{useContext} from 'react';
import { Link } from 'react-router-dom';

// style
import '../../assets/scss/style.scss';

// Context
import { SearchContext } from '.';
import { Theme } from '../../Context/ThemeContext';

const Search = ({name , image , marketCapRank}) => {
    const {theme} = useContext(Theme)
    const setSearch = useContext(SearchContext)
    const clearHandler = () =>{
        setSearch("")
    }
    return (
        <div className={`search-lists ${theme.theme}`}>
            <div className={`searchedlist-container`}>
                <Link className="search-title" onClick={clearHandler} to={`/detail/${marketCapRank}`}>
                <img src={image} alt="name" />
                <p>{name}</p>
                </Link>
            </div>
        </div>
    );
};

export default Search;