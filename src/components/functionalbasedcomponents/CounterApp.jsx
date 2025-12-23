import { useEffect } from "react"
import { useState } from "react"


function CounterApp(){
   const[count,setCount] =useState(0)

   useEffect(()=>{
    let timerId=setInterval(()=>{
        console.log("timer is running...")
        setCount((prev)=>prev+1)

    },1000)
   // i want to clean up my timer in mounting stage
   return ()=>{clearInterval(timerId)}
   },[])

    return(
        <h1>count:{count}</h1>
    )
}
export default CounterApp

export function Toggle(){
  const [display,setdisplay] =useState(true)
  const handleClick=()=>{
    setdisplay((prev)=>!prev)
  }
  return(
   <div>
    {display?<CounterApp/>:"counterapp is dissappear"}
     <button onClick={handleClick}>{display?"hide":"show"}</button>
   </div>
  )
}
