let data=""
await fetch("https://fakestoreapi.com/products")
.then((data)=>data.json())
.then((jsondata)=>{
    data=jsondata}
)
console.log(data)

import Customcard from "./customCard"
import "./customstyles.css"
function DisplayProducts(){
    return(
        <div className="cardcontainer">
        {data.map((each)=>
        
            <Customcard product={each}/>
            
      
        )}
        </div>
    ) 
}
export default DisplayProducts

