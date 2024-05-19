import Navbar from './Components/NavBar';
import Slider from './Components/Slider';
import Aboutus from './Components/AboutUs';
import Categorys from './Components/Categorys';
import SectionOffert from './Components/SectionOffert';
import Cart from './Components/ShoppingCart'
import Register from './Components/Register';
import UserProfile from './Components/UserProfile';

import Shop from './Components/Shop'
import Shop2 from './Components/Shop2'
import Shop3 from './Components/Shop3'
import Shop4 from './Components/Shop4'
import Shop5 from './Components/Shop5'
import Shop6 from './Components/Shop6'
import Shop7 from './Components/Shop7'
import Shop8 from './Components/Shop8'


import ProductDetail1 from './Components/ShopDetail1';
import ProductDetail2 from './Components/ShopDetail2';
import ProductDetail3 from './Components/ShopDetail3';
import ProductDetail4 from './Components/ShopDetail4';
import ProductDetail5 from './Components/ShopDetail5';
import ProductDetail6 from './Components/ShopDetail6';
import ProductDetail7 from './Components/ShopDetail7';
import ProductDetail8 from './Components/ShopDetail8';
import ApiGoogle from './Components/ApiGoogle'
import {Route,Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';


function App() {
  

  return (
    <>
      <Routes>
      <Route path="/userProfile" element={<UserProfile />} />
      <Route path="/register" element={<Register />} />
      <Route path='/' element={<><Navbar /> <Slider /> <Categorys id="section" /> <SectionOffert  /> <Footer/></>}></Route>
      <Route path='/Cart' element={<Cart />}></Route>
      <Route path='/aboutus' element={<Aboutus />}></Route>
      <Route path='/api' element={<ApiGoogle />}></Route>
      <Route path='/Cocina' element={<Shop />}></Route>
      <Route path='/Decoracion' element={<Shop2 />}></Route>
      <Route path='/Limpieza' element={<Shop3 />}></Route>
      <Route path='/Higiene' element={<Shop4 />}></Route>  
      <Route path='/Alimentos' element={<Shop5 />}></Route>
      <Route path='/Mascotas' element={<Shop6 />}></Route>
      <Route path='/Oficina' element={<Shop7 />}></Route>
      <Route path='/Paratushijos' element={<Shop8 />}></Route>

      <Route path='/ProductDetail1' element={<ProductDetail1/>}></Route>
      <Route path='/ProductDetail2' element={<ProductDetail2/>}></Route>
      <Route path='/ProductDetail3' element={<ProductDetail3/>}></Route>
      <Route path='/ProductDetail4' element={<ProductDetail4/>}></Route>
      <Route path='/ProductDetail5' element={<ProductDetail5/>}></Route>
      <Route path='/ProductDetail6' element={<ProductDetail6/>}></Route>
      <Route path='/ProductDetail7' element={<ProductDetail7/>}></Route>
      <Route path='/ProductDetail8' element={<ProductDetail8/>}></Route>
       </Routes>
       

    </>
  );
}

export default App;
