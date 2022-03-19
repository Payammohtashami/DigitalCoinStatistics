import React from 'react';
// import ReactTooltip from 'react-tooltip';

const line = ({lineHeight , price}) => {

    const chartStyle = {
        position: "relative",
        bottom: `${lineHeight / 1.25}%`,
        width: "3.5px",
        height : `${lineHeight / 4}%` ,
        backgroundColor: "#003B73",
        borderRadius : "10px",
    }
    return (
        // data-tip={`$${price}`} 
        <div style={chartStyle}>
            {/* <ReactTooltip /> */}
        </div>
    );
};

export default line;