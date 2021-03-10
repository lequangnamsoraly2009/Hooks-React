import React, { useEffect, useState , useRef } from 'react';
import PropTypes from 'prop-types';

CountNumber.propTypes = {
    onSubmit: PropTypes.func,
};

CountNumber.defaultProps = {
    onSubmit: null,
}

function CountNumber(props) {
    const { onSubmit } = props;
    const [value,setValue] = useState('');
    const typingTimeoutRef = useRef(null);
    const [count , setCount] = useState('');

    const handleFormChange = (e) =>{
        setValue(e.target.value);
    }

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        if(!onSubmit) return;

        if(typingTimeoutRef.current){
            clearTimeout(typingTimeoutRef.current);
        }
        typingTimeoutRef.current = setTimeout(()=>{
            const formValues = {
                title: value,
            }
            onSubmit(formValues);
        },1000);
        
        
    }
    useEffect(()=>{
        const countInterval = setInterval(()=>{
            const newValue = Number(value) + 1;
            setCount(newValue);
            setValue(newValue);
        },1000)
  
        return () =>{
            console.log('count clean up');
            clearInterval(countInterval);
        }
    },[value]);


    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input type="number" value={value} onChange={handleFormChange}></input>
            </form>
            <p style={{fontSize: '30px'}}>{count}</p>
        </div>
        
    );
}

export default CountNumber;