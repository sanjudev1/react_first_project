import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Test from './components/test'
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/Navbar';
import CustomCarousel from './components/Coursels';
import { CustomSpinner } from './components/customspinner';
import DisplayProducts from './components/fetchProducts';
createRoot(document.getElementById('root')).render(
    <> 
   <CustomNavbar/>
   <CustomCarousel/>
   {/* <CustomSpinner/> */}

   <DisplayProducts/>
    </>
  
)
