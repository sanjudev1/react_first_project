import { DNA } from 'react-loader-spinner'
import React from 'react'
export class CustomSpinner extends React.Component {
 componentWillUnmount(){
  console.log("this is expired..")
 }
 render(){
   return (
   <div style={{display:'flex',justifyContent:"center",alignItems:"center"}}>
     <DNA
visible={true}
height="80"
width="80"
ariaLabel="dna-loading"
wrapperStyle={{}}
wrapperClass="dna-wrapper"
/>
   </div>
  )
 }
}