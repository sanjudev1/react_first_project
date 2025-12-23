
import React from "react"
class Child extends React.PureComponent{

    render(){
        console.log("child rendering")
        return(
            <h1>pure component</h1>
        )
    }
}
export default Child
