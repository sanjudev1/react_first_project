import { useState } from "react"
import CustomNavbar from "../Navbar"
import Flow from "../mindMap"
import CustomTimeLine from "./Timeline"

function About(){
   
    return(
        <>
        <CustomNavbar/>
        <CustomTimeLine/>
        <Flow/>
      
        <h1>This is about page</h1>
        </>
    )
}
export default About