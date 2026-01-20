import { useState,useEffect } from "react";
import './timer.css'
const Timer=()=>{
   const [seconds,setSeconds]=useState(0)
   const [running,setRunning]=useState(false)

   useEffect(()=>{
     
  let timerId;
  if(running){
    console.log("timer is running")
    timerId=setInterval(()=>{
        setSeconds((prev)=>{
            return prev+1
        })
    },1000);
  }
 return()=>{
    clearInterval(timerId);
    console.log("timer stopped")
 }


   },[running])
    return(
        <>
       <div className="timer-container">
        <div className="timer-card">

        
            <h2>timer</h2>
               <div className="timer-display">{seconds}</div>
            <div>
                <button  className="start-btn" onClick={()=>{
                    setRunning(true)
                }}>
                    start
                </button>
                ::
                <button className="stop-btn" onClick={()=>{
                    setRunning(false)
                }}>
             stop
                </button>
                 ::
                 <button className="reset-btn" onClick={()=>{
                    setSeconds(0)
                }}>
             Reset
                </button>
            </div>

</div>
        </div>
        </>
    )
}

export default Timer;