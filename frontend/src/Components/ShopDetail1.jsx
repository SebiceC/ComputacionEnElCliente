import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NavBar from "./NavBar";
import Footer from "./Footer";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProductDetail = () => {
  const { id } = useParams();
  const [producto, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:7500/api/productos/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <NavBar />
      <section className="bg-light">
        <div className="container pb-5">
          <div className="row">
            <div className="col-lg-5 mt-5">
              <div className="product-img position-relative overflow-hidden text-center">
                <img className="card-img img-fluid" src={producto.img} alt={producto.nombre} id="product-detail" />
              </div>

              <div className="row">
                <div className="col-1 align-self-center">
                  <FaChevronLeft className="text-dark fas fa-chevron-left"></FaChevronLeft>
                  <span className="sr-only">Previous</span>
                </div>

                <div id="multi-item-example" className="col-10 carousel slide carousel-multi-item" data-bs-ride="carousel">
                  <div className="carousel-inner product-links-wap" role="listbox">
                    {producto.relatedImages && producto.relatedImages.map((img, index) => (
                      <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                        <div className="row" style={{ height: '100px', marginTop: '30px' }}>
                          <div className="col-4">
                            <img className="card-img img-fluid" src={img} alt={`Product Image ${index}`} style={{ width: '100%', height: 'auto', maxHeight: '100px' }} />
                          </div>
                        </div>
                      </div>
                    ))}
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
                  <h1 className="h2">{producto.nombre}</h1>
                  <p className="h3 py-2">${producto.precio}</p>
                  <p className="py-2">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className={`fa ${i < producto.rating ? 'fa-star text-warning' : 'fa-star text-secondary'}`}></i>
                    ))}
                    <span className="list-inline-item text-dark">Calificación {producto.rating} | {producto.reviewsCount} Comentarios</span>
                  </p>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <h6>Marca:</h6>
                    </li>
                    <li className="list-inline-item">
                      <p className="text-muted"><strong>{producto.marca}</strong></p>
                    </li>
                  </ul>

                  <h6>Descripción:</h6>
                  <p>{producto.descripcion}</p>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <h6>Color Disponible:</h6>
                    </li>
                    <li className="list-inline-item">
                      <p className="text-muted"><strong>{producto.colores_disponibles}</strong></p>
                    </li>
                  </ul>

                  <h6>Especificaciones:</h6>
                  <ul className="list-unstyled pb-3">
                    {producto.especificaciones && producto.especificaciones.map((spec, index) => (
                      <li key={index}>{spec}</li>
                    ))}
                  </ul>
                  <form action="" method="GET">
                    <input type="hidden" name="product-title" value={producto.nombre} />
                    <div className="row">
                      <div className="col-auto flexi">
                        <ul className="list-inline pb-3">
                          <li className="list-inline-item text-right">
                            Quantity
                            <input type="hidden" name="product-quanity" id="product-quanity" value="1" />
                          </li>
                          <li className="list-inline-item"><span className="btn btn-primary btn-shadow" id="btn-minus" onClick={handleDecrement}>-</span></li>
                          <li className="list-inline-item"><span id="var-value">{quantity}</span></li>
                          <li className="list-inline-item"><span className="btn btn-primary btn-shadow" id="btn-plus" onClick={handleIncrement}>+</span></li>
                        </ul>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col d-grid">
                        <button type="submit" className="btn btn-primary btn-shadow" name="submit" value="buy">Buy</button>
                      </div>
                      <div className="col d-grid">
                        <button type="submit" className="btn btn-primary btn-shadow" name="submit" value="addtocard">Add To Cart</button>
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

          <div id="carousel-related-product" className="d-flex justify-content-between">
            {producto.relatedProducts && producto.relatedProducts.map((relatedProduct, index) => (
              <div className="product-wap card rounded-0" key={index}>
                <div className="card rounded-4">
                  <img className="card-img rounded-0 img-fluid" src={relatedProduct.img} alt={`Product ${index}`} />
                </div>
                <div className="card-body">
                  <p className="text-center">{relatedProduct.nombre}</p>
                 
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
                    {[...Array(5)].map((_, i) => (
                      <li key={i}>
                        <i className={`fa ${i < relatedProduct.rating ? 'text-warning fa fa-star' : 'text-muted fa fa-star'}`}></i>
                      </li>
                    ))}
                  </ul>
                  <p className="text-center mb-0">${relatedProduct.precio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ProductDetail;