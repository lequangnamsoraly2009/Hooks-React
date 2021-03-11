import { useEffect, useState } from "react"

const getRandomColor = () =>{
    const arrColor = ['green','blue','yellow','orange','deeppink','white','black'];
    return arrColor[Math.floor(Math.random()*arrColor.length)];
}


const useRandomColor = () =>{
    const [color,setColor] = useState('green');
    const [countChange,setCountChange] = useState(0);
    const [countBlack,setCountBlack] = useState(0);
    const [countWhite,setCountWhite] = useState(0);
    const [countYellow,setCountYellow] = useState(0);
    const [countDeepPink,setCountDeepPink] = useState(0);
    const [countBlue,setCountBlue] = useState(0);
    const [countGreen,setCountGreen] = useState(1);
    const [countOrange,setCountOrange] = useState(0);


    useEffect(() => {
        const intervalColor = setInterval(()=>{
            const newColor = getRandomColor();
            console.log(newColor);
            if(newColor === 'black') setCountBlack(Number(countBlack)+1);
            if(newColor === 'white') setCountWhite(Number(countWhite)+1);
            if(newColor === 'green') setCountGreen(Number(countGreen)+1);
            if(newColor === 'yellow') setCountYellow(Number(countYellow)+1);
            if(newColor === 'deeppink') setCountDeepPink(Number(countDeepPink)+1);
            if(newColor === 'orange') setCountOrange(Number(countOrange)+1);
            if(newColor === 'blue') setCountBlue(Number(countBlue)+1);
            setColor(newColor);
            setCountChange(Number(countChange)+1);
        },500);
        return () => {
            console.log('Color was cleanup');
            clearInterval(intervalColor);
        }
        // [filter chứa tham số => Sẽ chạy Effect nếu khi render lại và dependencies thay đổi]
    }, [countChange,countBlack,countWhite,countGreen,countYellow,countDeepPink,countOrange,countBlue]);
    return {color,countChange,countBlack,countWhite,countGreen,countYellow,countDeepPink,countOrange,countBlue};
}

export default useRandomColor;