import React from "react"
import { CustomSpinner } from "./customspinner"
import Customcard from "./customCard"
import DisplayProducts from "./fetchProducts"

 class Counter extends React.Component{
    state={
        count:0,
        data:""
    }
    increment=()=>{
      this.setState({count:this.state.count+1})
    }
     decrement=()=>{
        this.setState({count:this.state.count-1})
    }
    fetchproducts=()=>{
     fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())            
            .then(json=>{
               this.setState({data:json})
            })
    }
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>decrement</button>
               <button onClick={this.fetchproducts}>fetch products</button>
            {this.state.data.length>0?<>
            <DisplayProducts/>
           
            </>:<CustomSpinner/>}
            </div>
        )
    }
 }
 export default Counter