import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/Navbar';
import { CustomSpinner } from './components/customspinner';
import CustomCarousel from './components/Coursels';

import Parent from './components/ParentComponent';
import CounterApp, { Toggle } from './components/functionalbasedcomponents/CounterApp';





createRoot(document.getElementById('root')).render(
    <> 
 <Toggle/>
{/* <Parent/> */}
    {/* <CustomNavbar/>
   <CustomCarousel/>
   <Counter/> */}
    </>
)
