import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { useState } from 'react'
import Navbar from "./components/Navbar";
import Banner from "./components/Banner"
import Stats from "./components/Stats"


function App() {
    const [cart, setCart] = useState([]);

  return (
    <>
    <Navbar cartCount={cart.length}/>
    <Banner />
    <Stats/>
    <ToastContainer/>
    </>
  );
}

export default App;
