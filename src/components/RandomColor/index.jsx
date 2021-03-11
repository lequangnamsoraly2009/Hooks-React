import React from 'react';
import useRandomColor from '../../hooks/useRandomColor';

RandomColor.propTypes = {};

function RandomColor() {
    const {color} = useRandomColor();
    return (
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
    );
}

export default RandomColor;