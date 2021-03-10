import React, { useState , useEffect } from 'react';
import PropTypes from 'prop-types';

Clock.propTypes = {};

function formatDate(date){
    const hours = `0${date.getHours()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    return `${hours}:${minutes}:${seconds}`
}

function Clock() {
    const [timeString,setTimeString] = useState('');

    useEffect(()=>{
        const timeInterval = setInterval(()=>{
            const now = new Date();
            // Format time thành HH:MM:SS
            const newTimeString = formatDate(now);
            setTimeString(newTimeString);
        },1000)
        return () =>{
            //cleanup
            console.log('Clock cleanup')
            clearInterval(timeInterval);
        }
    },[])

    return(
        <p style={{fontSize: '42px'}}>
            {timeString}
        </p>
    );
    
}

export default Clock