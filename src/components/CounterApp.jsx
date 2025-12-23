
import React from "react"
import axios from 'axios'
import Customcard from "./customCard"

class Counter extends React.Component{
    constructor(){
      super()
        this.state={
            count:0,
            data:[]
        }
    }
    increment=()=>{
        this.setState({count:this.state.count+1})
    }
     decrement=()=>{
        this.setState({count:this.state.count-1})
    }
   
    fetchProducts=async()=>{


      let response=await axios.get("https://fakestoreapi.com/products")
      this.setState({data:response.data})
    }
    componentDidMount(){
     this.fetchProducts()
    }
    render(){
        return(
            <>
            <h1>{this.state.count}</h1>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>decrement</button>
            {this.state.data.length>0?<>
             {this.state.data.map(each=><Customcard prop={each}/>)}
            </>:<h1>data is fetching....</h1>}
            </>
        )
    }
}
export default Counter