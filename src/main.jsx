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
import { BrowserRouter ,Routes, Route} from "react-router";
import Home from './Home';
import About from './components/functionalbasedcomponents/About';
import Service from './components/functionalbasedcomponents/Service';
import Product from './components/functionalbasedcomponents/ProductDetails';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; // theme
import 'primereact/resources/primereact.min.css';                // core css
// import 'primeicons/primeicons.css';                              // ICONS (IMPORTANT)


createRoot(document.getElementById('root')).render(
    <> 
  <BrowserRouter>
   <Routes>
      <Route path="/" element={ <Home/>} />
      <Route path="/about" element={ <About/>} />
      <Route path="/services" element={ <Service/>} />
      <Route path="/product/:name" element={ <Product/>} />
    </Routes>
  </BrowserRouter>,
    </>
)
