import Subchild from "./Subchild"



function Child(properties){
    console.log(properties,"child properties")
return(
    <>
    <h1>this is child component</h1>
    <Subchild Subchild={properties.child}/>
    </>
)
}
export default Child
