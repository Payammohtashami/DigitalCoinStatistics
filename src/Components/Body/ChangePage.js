import React, {useContext} from 'react';

// Style
import '../../assets/scss/style.scss';

// Context
import {PageMangeContext} from '../../Context/PageMangeContext';
import {Theme} from '../../Context/ThemeContext';

const ChangePage = () => {

    const {theme} = useContext(Theme)
    const {manageState, manageDispatch} = useContext(PageMangeContext);
    const handler = e => {
        manageDispatch({type : e.target.value})
    }

    return (
        <div className={`page-handler ${theme.theme}`}>
                <h3>{manageState.num}</h3>
            <div className={`page-handler-button ${theme.theme}`}>
                <div >
                    { manageState.num > 1 && <button className={`prev-button`} onClick={handler} value="prev">Prevent</button> }
                    { manageState.num < 5 && <button className={`next-button`} onClick={handler} value="next">next</button> }
                </div>
            </div>
        </div>
    );
};

export default ChangePage;