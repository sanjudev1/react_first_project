import { useRef, useState } from "react"


export function ControlledComponent(){
    console.log("rendering....")
    const [name,setname]=useState("")
    const [password,setpassword]=useState("")

    
    const handleSubmit=(e)=>{
     e.preventDefault()
     console.log(name,"  ",password)
    }

    const handlename=(e)=>{
    setname(e.target.value)
    }
    const handlepassword=(e)=>{
        setpassword(e.target.value)
    }
   
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" onChange={handlename} value={name}/>
            <input type="password" placeholder="Password" onChange={handlepassword} value={password}/>
            <button>Submit</button>
        </form>
    )
}


function UncontrolledComponent(){
    console.log("rendering....")
    const useref_name=useRef()
    const useref_password=useRef()
    
    const handleSubmit=(e)=>{
     e.preventDefault()
     console.log(useref_name.current.value,"  ",useref_password.current.value)
    }
   
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" ref={useref_name}/>
            <input type="password" placeholder="Password" ref={useref_password}/>
            <button>Submit</button>
        </form>
    )
}
export default UncontrolledComponent
