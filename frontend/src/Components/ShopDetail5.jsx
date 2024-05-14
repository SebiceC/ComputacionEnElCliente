
import NavBar from "./NavBar";

import producto1 from '../img/sarten1.jpg';
import producto2 from '../img/sarten2.webp';
import producto3 from '../img/sarten3.webp';
import producto4 from '../img/sarten4.jpg';
import producto5 from '../img/pocillos1.jpg';
import producto6 from '../img/tabla1.jpg';
import producto7 from '../img/cubiertos1.jpg';
import producto8 from '../img/leche.webp';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';

import Footer from "./Footer";

const ProductDetail5 = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

    return(
    <div>
      <NavBar />
      <section className="bg-light">
        <div className="container pb-5">
          <div className="row">
            <div className="col-lg-5 mt-5">
              <div className="product-img position-relative overflow-hidden text-center">
                <img className="card-img img-fluid" src={producto1} alt="Card image cap" id="product-detail" />
              </div>

              <div className="row">
                <div className="col-1 align-self-center">
                  <FaChevronLeft className="text-dark fas fa-chevron-left"></FaChevronLeft>
                  <span className="sr-only">Previous</span>
                </div>

                <div id="multi-item-example" className="col-10 carousel slide carousel-multi-item" data-bs-ride="carousel">
                  <div className="carousel-inner product-links-wap" role="listbox">
                    <div className="carousel-item active">
                      <div className="row" style={{ height: '100px', marginTop: '30px' }}>
                        <div className="col-4">
                          <img className="card-img img-fluid" src={producto2} alt="Product Image 1" style={{ width: '100%', height: 'auto', maxHeight: '100px' }} />
                        </div>
                        <div className="col-4">
                          <img className="card-img img-fluid" src={producto3} alt="Product Image 2" style={{ width: '100%', height: 'auto', maxHeight: '100px' }} />
                        </div>
                        <div className="col-4">
                          <img className="card-img img-fluid" src={producto4} alt="Product Image 3" style={{ width: '100%', height: 'auto', maxHeight: '100px' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-1 align-self-center">
                  <FaChevronRight className="text-dark fas fa-chevron-left"></FaChevronRight>
                  <span className="sr-only">Next</span>
                </div>
              </div>
            </div>

            <div className="col-lg-7 mt-5">
              <div className="card">
                <div className="card-body">
                  <h1 className="h2">Sarten-X</h1>
                  <p className="h3 py-2">$25.00</p>
                  <p className="py-2">
                    <i className="fa fa-star text-warning"></i>
                    <i className="fa fa-star text-warning"></i>
                    <i className="fa fa-star text-warning"></i>
                    <i className="fa fa-star text-warning"></i>
                    <i className="fa fa-star text-secondary"></i>
                    <span className="list-inline-item text-dark">Calificación 4.8 | 3 Comentarios</span>
                  </p>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <h6>Marca:</h6>
                    </li>
                    <li className="list-inline-item">
                      <p className="text-muted"><strong>Universal</strong></p>
                    </li>
                  </ul>

                  <h6>Descripcion:</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.
                    Donec condimentum elementum convallis. Nunc sed orci a diam ultrices aliquet interdum quis nulla.
                  </p>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <h6>Color Disponible:</h6>
                    </li>
                    <li className="list-inline-item">
                      <p className="text-muted"><strong>Negra/Plateada</strong></p>
                    </li>
                  </ul>

                  <h6>Especificaciones:</h6>
                  <ul className="list-unstyled pb-3">
                    <li>Lorem ipsum dolor sit</li>
                    <li>Amet, consectetur</li>
                    <li>Adipiscing elit,set</li>
                    <li>Duis aute irure</li>
                    
                    
                    
                  </ul>
                  <form action="" method="GET">
                                <input type="hidden" name="product-title" value="Activewear"/>
                                <div className="row">
                                    <div className="col-auto flexi ">
                                        
                                        <ul className="list-inline pb-3">
                                            <li className="list-inline-item text-right">
                                                Quantity
                                                <input type="hidden" name="product-quanity" id="product-quanity" value="1"/>
                                            </li>
                                            <li className="list-inline-item"><span className="btn btn-primary btn-shadow " id="btn-minus" onClick={handleDecrement} >-</span></li>
                                            <li className="list-inline-item"><span  id="var-value">{quantity}</span></li>
                                            <li className="list-inline-item"><span className="btn btn-primary btn-shadow " id="btn-plus" onClick={handleIncrement} >+</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="col d-grid">
                                        <button type="submit" className="btn btn-primary btn-shadow " name="submit" value="buy">Buy</button>
                                    </div>
                                    <div className="col d-grid">
                                        <button type="submit" className="btn btn-primary btn-shadow " name="submit" value="addtocard">Add To Cart</button>
                                    </div>
                                </div>
                            </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-5">
  <div className="container">
    <div className="row text-left p-2 pb-3">
      <h4>Productos Relacionados</h4>
    </div>

    <div id="carousel-related-product" className="d-flex justify-content-between ">
      <div className="product-wap card rounded-0">
        <div className="card rounded-4">
          <img className="card-img rounded-0 img-fluid" src={producto5} alt="Product 1" />
        </div>
        <div className="card-body">
        <p  className="text-center">Pocillos</p>
                            <ul className="w-100 list-unstyled d-flex justify-content-between mb-0 text-center">
                                
                                <li className="pt-2">
                                    <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                                    <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                                    <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                                    <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                                    <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                                </li>
                            </ul>
                            <ul className="list-unstyled d-flex justify-content-center mb-1">
                                <li>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-muted fa fa-star"></i>
                                    <i className="text-muted fa fa-star"></i>
                                </li>
                            </ul>
                            <p className="text-center mb-0">$35.000</p>
                        
        </div>
      </div>

      <div className="product-wap card rounded-0">
        <div className="card rounded-0">
          <img className="card-img rounded-0 img-fluid" src={producto6} alt="Product 2" />
        </div>
        <div className="card-body">
        <p  className="text-center">Tabla-Z</p>
                            <ul className="w-100 list-unstyled d-flex justify-content-between mb-0 text-center">
                                
                                <li className="pt-2">
                                    <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                                    <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                                    <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                                    <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                                    <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                                </li>
                            </ul>
                            <ul className="list-unstyled d-flex justify-content-center mb-1">
                                <li>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                </li>
                            </ul>
                            <p className="text-center mb-0">$12.000</p>
                        
        </div>
      </div>

      <div className="product-wap card rounded-0">
        <div className="card rounded-0">
          <img className="card-img rounded-0 img-fluid"src={producto7} alt="Product 3" />
        </div>
        <div className="card-body">
        <p  className="text-center">Cubiertos</p>
                            <ul className="w-100 list-unstyled d-flex justify-content-between mb-0 text-center">
                                
                                <li className="pt-2">
                                    <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                                    <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                                    <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                                    <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                                    <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                                </li>
                            </ul>
                            <ul className="list-unstyled d-flex justify-content-center mb-1">
                                <li>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                </li>
                            </ul>
                            <p className="text-center mb-0">$20.000</p>
                        
        </div>
      </div>

      <div className="product-wap card rounded-0">
        <div className="card rounded-0">
          <img className="card-img rounded-0 img-fluid"src={producto8} alt="Product 4" />
        </div>
        <div className="card-body">
        <p  className="text-center">Leche Alpina</p>
                            <ul className="w-100 list-unstyled d-flex justify-content-between mb-0 text-center">
                                
                                <li className="pt-2">
                                    <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                                    <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                                    <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                                    <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                                    <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                                </li>
                            </ul>
                            <ul className="list-unstyled d-flex justify-content-center mb-1">
                                <li>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-warning fa fa-star"></i>
                                    <i className="text-muted fa fa-star"></i>
                                </li>
                            </ul>
                            <p className="text-center mb-0">$15.000</p>
                        
        </div>
      </div>
    </div>

  </div>
</section>
<Footer></Footer>
    </div>
  );
}

export default ProductDetail5;
