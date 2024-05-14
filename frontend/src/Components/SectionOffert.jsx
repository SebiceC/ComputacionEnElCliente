import producto1 from '../img/aromatizante1.jpg';
import producto2 from '../img/toallasnormales.webp';
import producto3 from '../img/lampara1.jpg';

const FeaturedProduct = () => {

    
  return (
    <section className="bg-light">
      <div className="container py-5">
        <div className="row text-center py-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">Ofertas</h1>
            <p>
             descripcion
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 mb-4">
            <div className="card h-100">
              
              <img className="card-img img-fluid" src={producto1} alt="Card image cap" id="product-detail" style={{height:'270px'} } />
              
              <div className="card-body">
                <ul className="list-unstyled d-flex justify-content-between">
                  <li>
                    <i className="text-warning fa fa-star" />
                    <i className="text-warning fa fa-star" />
                    <i className="text-warning fa fa-star" />
                    <i className="text-muted fa fa-star" />
                    <i className="text-muted fa fa-star" />
                  </li>
                  <li className="text-muted text-right">$6.000</li>
                </ul>
                <b className="h5 text-dark">Aromatizante</b>
                <p className="card-text">
                  Para arreglar tu hogar
                </p>
                <p className="text-muted">Opiniones (24)</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <div className="card h-100">
              <a href="shop-single.html">
              <img className="card-img img-fluid" src={producto2} alt="Card image cap" id="product-detail" style={{height:'270px'} }/>
              </a>
              <div className="card-body">
                <ul className="list-unstyled d-flex justify-content-between">
                  <li>
                    <i className="text-warning fa fa-star" />
                    <i className="text-warning fa fa-star" />
                    <i className="text-warning fa fa-star" />
                    <i className="text-warning fa fa-star" />
                    <i className="text-muted fa fa-star" />
                    

                  </li>
                  <li className="text-muted text-right">$15.000</li>
                </ul>
                <b className="h5 text-dark">Toalla de baño</b>
                <p className="card-text">
                  Para quitarte el agua 
                </p>
                <p className="text-muted">Opiniones (48)</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <div className="card h-100">
              <a href="shop-single.html">
              <img className="card-img img-fluid" src={producto3} alt="Card image cap" id="product-detail"  style={{height:'270px'} }/>
              </a>
              <div className="card-body">
                <ul className="list-unstyled d-flex justify-content-between">
                  <li>
                    <i className="text-warning fa fa-star" />
                    <i className="text-warning fa fa-star" />
                    
                    <i className="text-warning fa fa-star" />
                    <i className="text-warning fa fa-star" />
                  </li>
                  <li className="text-muted text-right">$75.000</li>
                </ul>
                <b className="h5 text-dark">Lampara-X</b>
                <p className="card-text">
                 Ilumina tu oficina
                </p>
                <p className="text-muted">Opiniones (74)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
