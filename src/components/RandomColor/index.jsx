import React from 'react';
import useRandomColor from '../../hooks/useRandomColor';

RandomColor.propTypes = {};

function RandomColor() {
    const {color,countChange,countBlack,countWhite,countGreen,countYellow,countDeepPink,countOrange,countBlue} = useRandomColor();

    return (
        <div>
            <div className="random-color" 
        style={{
                width:'100px',
                height:'100px', 
                margin: '50px auto',
                border: '1px solid black',
                borderRadius: '5px',
                backgroundColor: color 
            }}>
                {color} 
            </div>
            <p>Random : {countChange} times</p>
            <p>Count Black: {countBlack}</p>
            <p>Count White: {countWhite}</p>
            <p>Count Blue: {countBlue}</p>
            <p>Count DeepPink: {countDeepPink}</p>
            <p>Count Orange: {countOrange}</p>
            <p>Count Yellow: {countYellow}</p>
            <p>Count Green: {countGreen}</p>
        </div>
        
    );
}

export default RandomColor;