import React, { useContext } from 'react';
import { PageMangeContext } from '../../Context/PageMangeContext';

const ChangePage = () => {

    const {manageState, manageDispatch} = useContext(PageMangeContext);
    const handler = e => {
        manageDispatch({type : e.target.value})
    }

    return (
        <div>
            { manageState.num > 1 && <button onClick={handler} value="prev">Prevent</button> }
            { manageState.num < 5 && <button onClick={handler} value="next">next</button> }
            
            <h3>{manageState.num}</h3>
        </div>
    );
};

export default ChangePage;