import NavBar from "./NavBar";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";
import React from "react";

const ShopFilter = () => {
  const [productos, setProductos] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState('all');
  const [categoria, setCategoria] = useState('all');
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      const { data } = await axios.get('http://localhost:4000/api/productos');
      setProductos(data);
      setFilteredProducts(data);
    };
  
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCart(storedCart);
    }
  
    fetchProductos();
  }, []);

  const handlePriceChange = (e) => {
    const value = e.target.value;
    setPriceRange(value);
    filterProducts(value, categoria);
  };

  const handleCategoriaChange = (e) => {
    const value = e.target.value;
    setCategoria(value);
    filterProducts(priceRange, value);
  };

  const filterProducts = (price, category) => {
    let filtered = productos;

    if (price !== 'all') {
      const [min, max] = price.split('-').map(Number);
      filtered = filtered.filter(producto => producto.precio >= min && producto.precio <= max);
    }

    if (category !== 'all') {
      filtered = filtered.filter(producto => producto.categoria === category);
    }

    setFilteredProducts(filtered);
  };

  const addToCart = (producto) => {
    const updatedCart = [...cart, producto];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert('Producto agregado al carrito');
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-12">
            <nav className="breadcrumb mb-30 bg-light">
              <Link className="breadcrumb-item text-dark text-decoration-none" to="/">Inicio</Link>
              <Link className="breadcrumb-item text-dark text-decoration-none" to="/">Categorías</Link>
              <span className="breadcrumb-item active">Tienda</span>
            </nav>
          </div>

          <div className="col-lg-3 col-md-4">
            <h5 className="section-title position-relative text-uppercase mb-3">
              <span className="pr-3">Filtra por categoría</span>
            </h5>
            <div className="bg-light p-4 mb-30">
              <form>
                {['all', 'cocina', 'decoracion', 'limpieza', 'higiene', 'alimentos', 'mascotas', 'para tus hijos', 'oficina'].map(cat => (
                  <div key={cat} className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input 
                      type="radio" 
                      className="custom-control-input" 
                      id={`cat-${cat}`} 
                      name="categoria" 
                      value={cat}
                      checked={categoria === cat}
                      onChange={handleCategoriaChange}
                    />
                    <label className="custom-control-label" htmlFor={`cat-${cat}`} style={{ marginLeft: '10px' }}>
                      {cat === 'all' ? 'Todas las categorías' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </label>
                    <span className="badge border font-weight-normal" style={{ marginLeft: '10px' }}>
                      {cat === 'all' ? productos.length : productos.filter(producto => producto.categoria === cat).length}
                    </span>
                  </div>
                ))}
              </form>
            </div>
          </div>

          <div className="col-lg-9 col-md-8">
            <div className="row pb-5">
              <div className="col-12 pb-1">
                <div className="d-flex align-items-center justify-content-between mb-4">
                </div>
              </div>

              <div className="container">
                <div className="row">
                  {filteredProducts.map((producto, index) => (
                    <div key={producto._id} className="col-lg-6 col-md-6 col-sm-6 pb-5">
                      <div className="product-item bg-light mb-2" style={{ width: '90%', height: '90%' }}>
                        <div className="product-img position-relative overflow-hidden text-center">
                        <img className="img-fluid" src={`/${producto.img}`} alt={producto.nombre} style={{ maxWidth: '60%', maxHeight: '60%', display: 'inline-block' }} />
                        </div>
                        <div className="text-center py-4">
                          <h5 className="h5 text-truncate">{producto.nombre}</h5>
                          <div className="d-flex align-items-center justify-content-center mt-3">
                            <h5>${producto.precio}</h5>
                          </div>
                          <div className="d-flex align-items-center justify-content-center mt-3">
                            <h5>{producto.descripcion}</h5>
                          </div>
                          <div className="d-flex align-items-center justify-content-center mb-3">
                            <button 
                              className="btn btn-primary btn-shadow" 
                              style={{ width: '170px', margin: '20px' }}
                              onClick={() => addToCart(producto)}
                            >
                              Agregar<FaShoppingCart className='icon-footer' style={{ marginLeft: '20px' }} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopFilter;
