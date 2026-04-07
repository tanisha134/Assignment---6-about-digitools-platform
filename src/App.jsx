import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { useState } from 'react'
import Navbar from "./components/Navbar";
import Banner from "./components/Banner"
import Stats from "./components/Stats" 
import Products from "./components/Products" 
import Steps from "./components/Steps" 


function App() {
    const [cart, setCart] = useState([]);

  return (
    <>
    <Navbar cartCount={cart.length}/>
    <Banner />
    <Stats/>
    <Products cart={cart} setCart={setCart}/>
    <Steps/>
    <ToastContainer/>
    </>
  );
}

export default App;
