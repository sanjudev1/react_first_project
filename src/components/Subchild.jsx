


function Subchild(props){
    console.log(props,"subchild received")
    props.Subchild="2crore"
    return(
       <>
        <h1>this is sub child</h1>
        <p>{props.Subchild}</p>
       </>
    )
}
export default Subchild