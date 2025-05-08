import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [second, setSeconds]= useState(60);
    const [minute, setMinutes]= useState(24);


    var timer;
    useEffect(()=>{
        timer=setInterval(()=>{
            setSeconds((second)=> second-1);
        },1000)

        if(second===1){
            setMinutes((minute)=> minute-1);
            setSeconds(60);
        } 
        return ()=>clearInterval(timer);
    })

    const start=()=>{
         setMinutes(24);
         setSeconds(60);
    }
    const pause=()=>{
        clearInterval(timer);
    }
    const stop=()=>{
        setMinutes(0);
        setSeconds(0);
        clearInterval(timer);
    }
    const shortbreak=()=>{
        setMinutes(4);
        setSeconds(60);
    }
    const longbreak=()=>{
        setMinutes(14);
        setSeconds(60);
    }

    
  return (
    <div>
        <h1>Timer</h1>
        <div>{minute<10?"0"+ minute:minute}:{second<10?"0"+second:second}</div>
        <div>
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={stop}>Stop</button>
            <button onClick={shortbreak}>Short Break</button>
            <button onClick={longbreak}>Long Break</button>
        </div>
    </div>
  )
}

export default Timer