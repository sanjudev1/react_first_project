
import React from "react"
import { CustomSpinner } from "./customspinner"
class User extends React.Component{
   state={data:[],isLoadig:true } 
  handleClick=(id)=>{
  fetch("https://fakestoreapi.com/products")
.then((data)=>data.json())
.then((jsondata)=>{
 this.setState({data:jsondata,isLoadig:false})    
}
) 
  }
    render(){
      return(
        <>
        <button onClick={this.handleClick}>fetchproducts</button>
       {this.state.isLoadig?<CustomSpinner/>:<> {this.state.data.map((each)=><div key={each.id}>
            <h1>{each.title}</h1>
        </div>)}</>}
        </>
      )  
    }
}
export default User