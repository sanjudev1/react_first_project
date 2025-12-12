import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import CustomNavbar from './components/Navbar'
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
import BgColorExample from './components/Card';
import UncontrolledExample from './components/Coursels';
import BasicExample from './components/Coursels';

createRoot(document.getElementById('root')).render(
    <>
     <CustomNavbar/>
    
    <App asserts="2crore"/>
    <BasicExample/>
    </>
  
)
