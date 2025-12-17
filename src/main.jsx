import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/Navbar';
import { CustomSpinner } from './components/customspinner';
import CustomCarousel from './components/Coursels';
import Counter from './components/CounterApp';




createRoot(document.getElementById('root')).render(
    <> 

    <CustomNavbar/>
   <CustomCarousel/>
   <Counter/>
    </>
)
