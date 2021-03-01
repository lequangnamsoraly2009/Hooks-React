import React , {useState,useEffect} from 'react';

const ClickCount = () =>{
    const [count,setCount] = useState(0);

    useEffect(()=>{
        document.title = `You clicked ${count} times`;
        console.log( `You clicked ${count} times`);
    },[count])
    // useEffect(()=>{
    //     // code here
    //     return () =>{
    //         //unmount 
    //     }
    // })

    return (
        <div>
            
            <h1>Click {count} times.</h1>
            <button onClick={()=>setCount(count+1)}>Click me</button>
        </div>
    )
}

export default ClickCount;