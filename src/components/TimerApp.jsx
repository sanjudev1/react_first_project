import React from "react"
class TimerApp extends React.Component{
 constructor(){
  super()
  this.state={
   count:10 
}
 }
 componentDidMount(){

  let Id=setInterval(()=>{
   this.setState({count:this.state.count-1})
   if(this.state.count==1){
   clearInterval(Id)  
}
},1000)
}


 render(){
   return(<div>
     <h1>{this.state.count}</h1>
  </div>)
}
}
export default TimerApp

