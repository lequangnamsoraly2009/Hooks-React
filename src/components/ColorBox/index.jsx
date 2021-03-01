import React, {useState} from 'react';
import './../ColorBox/colorBox.css';

const getRandomColor = () => {
    const arrayColor = ['green','black','yellow','blue','deeppink'];
    const colorRandom = Math.trunc(Math.random() * arrayColor.length);
    return arrayColor[colorRandom];
}


const ColorBox = () => {
    const [color,setColor] = useState('deeppink');
    const handleBoxClick = ()=>{
        const colorArray = getRandomColor();
        setColor(colorArray);
    }

    return (
        <div className="color-box" style={{backgroundColor:color}} onClick={handleBoxClick} >
            
        </div>
    );
}

export default ColorBox;