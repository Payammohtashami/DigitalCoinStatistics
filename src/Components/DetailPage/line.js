import React,{useContext} from 'react';

// Style
import '../../assets/scss/style.scss'
// Context
import {Theme} from '../../Context/ThemeContext';
const Line = ({lineHeight}) => {

    const {theme} = useContext(Theme)
    const chartStyle = {
        bottom: `${lineHeight / 1.25}%`,
        height : `${lineHeight / 4}%` ,
        
    }
    return (
        <div className={`lines ${theme.theme}`} style={chartStyle}>
        </div>
    );
};

export default Line;