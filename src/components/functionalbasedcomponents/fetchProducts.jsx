import { useEffect, useState } from "react"
import Customcard from "../customCard"
import { CustomSpinner } from "../customspinner"
import axios from 'axios'

function FetchProducts(){
    const [data,setData]= useState("")

    // sideeffects
   const getproducts=async()=>{
     try{
       let response=await axios.get("https://fakestoreapi.com/products")
       if(response.status==200){
        setData(response.data)
       }
     }catch(err){
       console.log(err)
     }
   }

    useEffect(()=>{
        getproducts()
    },[])
    return(<>
      {data.length>0?<div style={{display:"flex",flexWrap:"wrap"}}>{data.map((each)=><Customcard product={each} />)}</div>:<CustomSpinner/>}
    </>)
}
export default FetchProducts