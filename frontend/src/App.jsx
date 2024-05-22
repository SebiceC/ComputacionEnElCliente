import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/NavBar';
import Slider from './Components/Slider';
import Aboutus from './Components/AboutUs';
import Cart from './Components/ShoppingCart';
import Register from './Components/Register';
import UserProfile from './Components/UserProfile';
import Footer from './Components/Footer';
import './App.css';
import ShopFilter from './Components/ShowProducts';
import React from 'react';
import ProductDetail from './Components/ShopDetail1';

function App() {
  return (
    <>
      <Routes>
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/register" element={<Register />} />
        <Route path='/' element={<><Navbar /> <Slider /> <ShopFilter/> <Footer/></>}></Route>
        <Route path='/Cart' element={<Cart />}></Route>
        <Route path='/aboutus' element={<Aboutus />}></Route>

        <Route path='/producto/:id' element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;