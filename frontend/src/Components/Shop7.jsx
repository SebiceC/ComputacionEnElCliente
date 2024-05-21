import NavBar from "./NavBar";
import  { useEffect, useState } from 'react';
import axios from 'axios';
import {FaShoppingCart} from 'react-icons/fa';
import { Link } from "react-router-dom";
import producto1 from '../img/lampara1.jpg';
import producto2 from '../img/impresora.webp';
import producto3 from '../img/lapicero.jpg';
import producto4 from '../img/computador.webp';

const ShopFilter = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
      const fetchProductos = async () => {
          const { data } = await axios.get('http://localhost:7500/api/productos');
          setProductos(data);
      };

      fetchProductos();
  }, []);

  
  return (
<div>
    <NavBar/>
    <div className="container-fluid">
      
      <div className="row px-xl-5">
      <div className="col-12">
           {/* Breadcrumb Start */}
           <nav className="breadcrumb  mb-30">
            <Link className="breadcrumb-item text-dark text-decoration-none" to="/">
              Inicio
            </Link>
            <Link className="breadcrumb-item text-dark text-decoration-none" to="/">
              Categorias
            </Link>
            <span className="breadcrumb-item active">Decoracion</span>
          </nav>
          {/* Breadcrumb End */}
        </div>

   {/* Shop Sidebar Start */}
   <div className="col-lg-4 col-md-4">
          {/* Price Start */}
          <h5 className="section-title position-relative text-uppercase mb-3">
            <span className="pr-3">Filtra por precio</span>
          </h5>
          <div className="bg-light p-4 mb-30">
            <form>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input type="checkbox" className="custom-control-input" defaultChecked id="price-all" />
                <label className="custom-control-label" htmlFor="price-all">
                  Cualquier precio
                </label>
                <span className="badge border font-weight-normal">0</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input type="checkbox" className="custom-control-input" id="price-1" />
                <label className="custom-control-label" htmlFor="price-1">
                  $0 - $100
                </label>
                <span className="badge border font-weight-normal">2</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input type="checkbox" className="custom-control-input" id="price-2" />
                <label className="custom-control-label" htmlFor="price-2">
                  $100 - $200
                </label>
                <span className="badge border font-weight-normal">2</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input type="checkbox" className="custom-control-input" id="price-3" />
                <label className="custom-control-label" htmlFor="price-3">
                  $200 - $300
                </label>
                <span className="badge border font-weight-normal">0</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input type="checkbox" className="custom-control-input" id="price-4" />
                <label className="custom-control-label" htmlFor="price-4">
                  $300 - $400
                </label>
                <span className="badge border font-weight-normal">0</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                <input type="checkbox" className="custom-control-input" id="price-5" />
                <label className="custom-control-label" htmlFor="price-5">
                  $400 - $500
                </label>
                <span className="badge border font-weight-normal">0</span>
              </div>
            </form>
          </div>
          {/* Price End */}
          
          {/* Color Start */}
          <div className="col-lg-4 col-md-4"></div>
          <h5 className="section-title position-relative text-uppercase mb-3 ">
            <span className="pr-3">Filtra por color</span>
          </h5>
          <div className="bg-light p-4 mb-30">
          <form>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input type="checkbox" className="custom-control-input" defaultChecked id="price-all" />
                <label className="custom-control-label" htmlFor="price-all">
                 Todos los Colores
                </label>
                <span className="badge border font-weight-normal">4</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input type="checkbox" className="custom-control-input" id="price-1" />
                <label className="custom-control-label" htmlFor="price-1">
                  Azul
                </label>
                <span className="badge border font-weight-normal">0</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input type="checkbox" className="custom-control-input" id="price-2" />
                <label className="custom-control-label" htmlFor="price-2">
                  Rojo
                </label>
                <span className="badge border font-weight-normal">0</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input type="checkbox" className="custom-control-input" id="price-3" />
                <label className="custom-control-label" htmlFor="price-3">
                  Amarillo
                </label>
                <span className="badge border font-weight-normal">0</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input type="checkbox" className="custom-control-input" id="price-4" />
                <label className="custom-control-label" htmlFor="price-4">
                  Negro
                </label>
                <span className="badge border font-weight-normal">1</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                <input type="checkbox" className="custom-control-input" id="price-5" />
                <label className="custom-control-label" htmlFor="price-5">
                  Blanco
                </label>
                <span className="badge border font-weight-normal">0</span>
              </div>
            </form>
            </div>
          
          
          {/* Color End */}
          
        </div>
        {/* Shop Sidebar End */}
      </div>

      <div className="col-lg-9 col-md-8">
  <div className="row pb-5">
    <div className="col-13 pb-1">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div className="buttons">
          <button className="btn btn-sm btn-light"><i className="fa fa-th-large"></i></button>
          <button className="btn btn-sm btn-light ml-2"><i className="fa fa-bars"></i></button>
        </div>
      </div>
  
  </div>

  <div className="container">
            <div className="row">

                  {productos.slice(24, 28).map((producto, index) => (
                    <div key={producto._id} className="col-lg-6 col-md-6 col-sm-6 pb-3">
                        <div className="product-item bg-light mb-4" style={{ width: '100%', height: '95%' }}>
                            <div className="product-img position-relative overflow-hidden text-center">
                                <Link to={`/producto/${producto._id}`}>
                                    <img className="img-fluid" src={index === 0 ? producto1 : index === 1 ? producto2 : index === 2 ? producto3 : producto4} alt={producto.nombre} style={{ maxWidth: '80%', maxHeight: '60%', display: 'inline-block' }} />
                                </Link>
                            </div>
                            <div className="text-center py-4">
                                <h5 className="h5 text-truncate">{producto.nombre}</h5>
                                <div className="d-flex align-items-center justify-content-center mt-3">
                                    <h5>${producto.precio}</h5>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mt-3">
        
        {/* Estrellas más grandes y amarillas */}
        <small className="fa fa-star text-warning mr-1" style={{ fontSize: '1.5em' }}></small>
        <small className="fa fa-star text-warning mr-1" style={{ fontSize: '1.5em' }}></small>
        <small className="fa fa-star text-warning mr-1" style={{ fontSize: '1.5em' }}></small>
        <small className="fa fa-star text-warning mr-1" style={{ fontSize: '1.5em' }}></small>
        <small className="fa fa-star text-warning mr-1" style={{ fontSize: '1.5em' }}></small>
      </div>
                                <div className="d-flex align-items-center justify-content-center mb-3">
                                    <button className="btn btn-primary btn-shadow" style={{ width: '170px', margin: '20px' }}>
                                        Agregar<FaShoppingCart className='icon-footer' style={{ marginLeft: '20px' }} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Pagination */}
        <div className="col-12">
          <nav>
            <ul className="pagination justify-content-center">
              <li className="page-item disabled"><a className="page-link" href="#">Anterior</a></li>
              <li className="page-item active"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item"><a className="page-link" href="#">Siguiente</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    </div>
    
    </div>
    
  );
};

export default ShopFilter;
