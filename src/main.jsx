import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CustomNavbar from './components/Navbar';
import { CustomSpinner } from './components/customspinner';
import CustomCarousel from './components/Coursels';

import Parent from './components/ParentComponent';
import CounterApp, { Toggle } from './components/functionalbasedcomponents/CounterApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterForm from './components/functionalbasedcomponents/ControlledComp';
import StopWatch from './components/StopWatch';
import TimerApp from './components/TimerApp';
import DisplayProducts from './components/fetchProducts';
import FetchProducts from './components/functionalbasedcomponents/fetchProducts';
import Form, { ControlledComponent } from './components/functionalbasedcomponents/Form';
import UncontrolledComponent from './components/functionalbasedcomponents/Form';





createRoot(document.getElementById('root')).render(
    <> 
    

   <CustomNavbar/>
   <CustomCarousel/>
   <ControlledComponent/>
   <UncontrolledComponent/>
  <FetchProducts/>
    </>
)
