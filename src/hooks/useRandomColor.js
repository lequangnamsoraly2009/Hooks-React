import { useEffect, useState } from "react"

const getRandomColor = () =>{
    const arrColor = ['green','blue','yellow','orange','deeppink','white','black'];
    return arrColor[Math.floor(Math.random()*arrColor.length)];
}


const useRandomColor = () =>{
    const [color,setColor] = useState('green');

    useEffect(() => {
        const intervalColor = setInterval(()=>{
            const newColor = getRandomColor();
            console.log(newColor);
            setColor(newColor);
        },2000);
        return () => {
            console.log('Clock was cleanup');
            clearInterval(intervalColor);
        }
    }, []);
    return {color};
}

export default useRandomColor;