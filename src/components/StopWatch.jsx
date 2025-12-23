import { useEffect, useState } from "react"


function StopWatch(){
  const [count,setCount]=useState(0)
 const [start,setStart]=useState(false)

  const onStart=()=>{
   setStart(true)
  }
  const onStop=()=>{
    setStart(false)
  }
  useEffect(()=>{
    let Id;
    if(start){
       Id=setInterval(()=>{ setCount((prev)=>prev+1)},1000)
    }
    return()=>{clearInterval(Id)}
  },[start])
  return(
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"15%", flexDirection:"column"}}>
        <h2>count:{count}</h2>
       
       <div>
         <button className="border-2 p-2 rounded-sm" onClick={onStart}>Start</button>
        <button className="border-2 p-2 rounded-sm">Reset</button>
        <button className="border-2 p-2 rounded-sm" onClick={onStop}>Stop</button>
       </div>
    </div>
  )
}
export default StopWatch