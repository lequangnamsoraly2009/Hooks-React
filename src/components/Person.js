import React from 'react';

const Person = (props) =>{
    return(
        <div>
            <h1>This is a {props.name} and He is {props.age} years old</h1>
            <h1>{props.children}</h1>
        </div>
        
    )
} 

export default Person;
