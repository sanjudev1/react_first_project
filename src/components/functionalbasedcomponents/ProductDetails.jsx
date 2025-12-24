import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import CustomNavbar from "../Navbar"


function Product(){
    const [product,setproduct]=useState("")


   let {name}= useParams()
   
   const getProduct=async()=>{
     try{
         let response =await axios.get(`https://fakestoreapi.com/products/${name}`)
         setproduct(response.data)
         console.log(response.data)
     }catch(err){
        console.log(err)
     }
   }
   useEffect(()=>{
     getProduct()

   },[])
    return(
        <>
        <CustomNavbar/>
        This is Product {name}
        {product&& <div>
            
             <img src={product.image}/>
             <h7>{product.tittle}</h7>
             <p>{product.description}</p>
             <p>{product.price}</p>
             <p>{product.rating.rate}</p>
             <p>{product.rating.count}</p>
             <p>{product.category}</p>
            </div>}
        </>
    )
}
export default Product