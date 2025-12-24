import CustomCarousel from "./components/Coursels";
import FetchProducts from "./components/functionalbasedcomponents/fetchProducts";
import CustomNavbar from "./components/Navbar";



function Home(){
    return(
       <>
        <CustomNavbar/>
        <CustomCarousel/>
        <FetchProducts/>
       </>
    )
}
export default Home