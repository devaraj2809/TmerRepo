import { useState ,useEffect} from "react";

 function Counter(){
    const [counter,setCounter]=useState(()=>{
        const saveCounters=localStorage.getItem("myCounter");
       
            return saveCounters?Number(saveCounters):0;
     
    });
    useEffect(()=>{
        localStorage.setItem("myCounter",counter);
        console.log("which is store in the counter is",counter);
        
    },[counter])
    return(
    
        <div style={{margin:'20px',borderRadius:'8px',color:"red",padding:'30px',background:"black"}}>
            <h2>Counter</h2>
            <p style={{fontsize:'4rem',margin:'20px'}}>
                {counter}
            </p>
            <div>
                <button
                onClick={()=>setCounter(counter+1)}>
                 Add
                </button>
                ::
                <button
                onClick={()=>setCounter(counter-1)}>
                 sub
                </button>
                ::
                   <button
                onClick={()=>setCounter(0)}>
                 Reset
                </button>
            </div>
        </div>
      
    );
}
export default Counter;