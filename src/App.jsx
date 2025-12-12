import "./App.css"
import modulestyle from "./App.module.css"
let data=""
await fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())            
            .then(json=>{data=json})
// import axios from 'axios'
// let response=await axios.get('https://fakestoreapi.com/products')            
// console.log(response)


import Card from 'react-bootstrap/Card';

export function BgColorExample(prop) {
  let {props:{title,description,image}}=prop
  return (
    <>
      {[
       
        'Success'
        
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>{variant} {title} </Card.Title>
            <Card.Text>
              
              <img src={image}/>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}



function App({asserts}){
console.log(asserts)
  let title={
    color:"red"
  }
  return(
    <div id="card_container">
    {data.map(e=>
     <div key={e.id} id={modulestyle.container}>
     <BgColorExample props={e}/>
     </div>
    )}
    </div>
  )
}
export default App