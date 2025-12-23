import { useRef, useState } from "react"

function RegisterForm(){
  const refname=useRef(null)
    const [name,setname]=useState("")
   const onChangeHandler=(e)=>{
    
   setname(e.target.value)
   }
   console.log("render...")

   const onFormSubmit=(e)=>{
     e.preventDefault()
     
     console.log(refname.current.value)
   }
  return(
    <form onSubmit={onFormSubmit}>
        <input type="text" placeholder="name" ref={refname} />
        <input type="email" placeholder="email"/>
        <button type="submit">Save</button>
    </form>
  )
}
export default RegisterForm