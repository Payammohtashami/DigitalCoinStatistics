import React,{useContext} from 'react';
import {DataContext} from '../../Context/Calculators'

const Layout = () => {
    const xxx = useContext(DataContext);



    return (
        <div>
            <h3>{xxx[0]}</h3>
            <h3>{xxx[1]}</h3>
            <h3>{xxx[2]}</h3>
            <h3>{xxx[3]}</h3>
            <h3>{xxx[4]}</h3>
            <h3>{xxx[5]}</h3>
            <h3>{xxx[6]}</h3>
            <h3>{xxx[7][0]}</h3>
            <h3>{xxx[7][1]}</h3>
            <h3>{xxx[7][2]}</h3>
        </div>
    );
};

export default Layout;