
import React from "react"
import Child from "./PureComponent"
class Parent extends React.Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    increment=()=>{
        this.setState({count:this.state.count+1})
    }
    render(){
        console.log("paret is rending")
        return(<>
          <h1 className="dark:hover:text-blue-400">{this.state.count}</h1>
          <button onClick={this.increment}>Inc</button>
          <Child/>
        </>)
    }
}
export default Parent