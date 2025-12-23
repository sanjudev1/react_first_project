import Profile from "./StudentProfile"



function Greeting(prop){
   
    return(
        <div>

             <Profile name={prop.name}/>
              <p>25th december is  Holiday on the occasion Christmas...</p>
        </div>
    )
}
export default Greeting