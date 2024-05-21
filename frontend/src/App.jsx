import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/NavBar';
import Slider from './Components/Slider';
import Aboutus from './Components/AboutUs';
import Categorys from './Components/Categorys';
import SectionOffert from './Components/SectionOffert';
import Cart from './Components/ShoppingCart';
import Register from './Components/Register';
import UserProfile from './Components/UserProfile';
import ResetPassword from './Components/ResetPassword';
import Shop from './Components/Shop';
import Shop2 from './Components/Shop2';
import Shop3 from './Components/Shop3';
import Shop4 from './Components/Shop4';
import Shop5 from './Components/Shop5';
import Shop6 from './Components/Shop6';
import Shop7 from './Components/Shop7';
import Shop8 from './Components/Shop8';
import ProductDetail from './Components/ShopDetail1';
import ApiGoogle from './Components/ApiGoogle';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/olvide-password" element={<ResetPassword />} />
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

        {/* Ruta dinámica para los detalles de productos */}
        <Route path='/producto/:id' element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
