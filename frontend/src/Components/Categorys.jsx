
import category1 from '../img/category_img_06.jpg';
import category2 from '../img/category_img_05.jpg';
import category3 from '../img/category_img_04.jpg';
import category4 from '../img/category_img_07.jpg';
import category5 from '../img/category_img_08.jpg';
import category6 from '../img/category_img_10.jpg';
import category7 from '../img/category_img_11.jpg';
import category8 from '../img/category_img_12.jpg';
import { Link } from 'react-router-dom';

const Section = ()=> {
    
    return (
        <section className="container py-5">
          <div className="row text-center pt-3">
            <div className="col-lg-6 m-auto">
              <h1 className="h1"><b>Nuestras Categorias</b></h1>
              <p>
              Descubre una Variedad de Productos
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-3 p-5 mt-3"> {/* Cambio de col-md-4 a col-md-3 */}
            <Link className="navbar-brand" to="/Cocina">
                <img src={category1} className="rounded-circle img-fluid border" alt="Category 1" />
              </Link>
              <h5 className="text-center mt-3 mb-3">Cocina</h5>
            </div>
            <div className="col-12 col-md-3 p-5 mt-3"> {/* Cambio de col-md-4 a col-md-3 */}
            <Link className="navbar-brand" to="/Decoracion">
                <img src={category2} className="rounded-circle img-fluid border" alt="Category 2" />
              </Link>
              <h5 className="text-center mt-3 mb-3">Decoracion</h5>
            </div>
            <div className="col-12 col-md-3 p-5 mt-3"> {/* Cambio de col-md-4 a col-md-3 */}
            <Link className="navbar-brand" to="/Limpieza">
                <img src={category3} className="rounded-circle img-fluid border" alt="Category 3" />
              </Link>
              <h5 className="text-center mt-3 mb-3">Limpieza</h5>
            </div>
            <div className="col-12 col-md-3 p-5 mt-3" > {/* Nuevo elemento */}
            <Link className="navbar-brand" to="/Higiene">
                <img src={category4} className="rounded-circle img-fluid border" alt="Category 4" />
                </Link> 
              <h5 className="text-center mt-3 mb-3">Higiene</h5>
            </div>
            <div className="col-12 col-md-3 p-5 mt-3"> {/* Nuevo elemento */}
            <Link className="navbar-brand" to="/Alimentos">
                <img src={category5} className="rounded-circle img-fluid border" alt="Category 5" />
              </Link>
              <h5 className="text-center mt-3 mb-3">Alimentos</h5>
            </div>
            <div className="col-12 col-md-3 p-5 mt-3"> {/* Nuevo elemento */}
            <Link className="navbar-brand" to="/Mascotas">
                <img src={category6} className="rounded-circle img-fluid border" alt="Category 6" />
              </Link>
              <h5 className="text-center mt-3 mb-3">Mascotas</h5>
            </div>
            <div className="col-12 col-md-3 p-5 mt-3"> {/* Nuevo elemento */}
            <Link className="navbar-brand" to="/Oficina">
                <img src={category7} className="rounded-circle img-fluid border" alt="Category 7" />
              </Link>
              <h5 className="text-center mt-3 mb-3">Oficina</h5>
            </div>
            <div className="col-12 col-md-3 p-5 mt-3"> {/* Nuevo elemento */}
            <Link className="navbar-brand" to="/Paratushijos">
                <img src={category8} className="rounded-circle img-fluid border" alt="Category 8" />
              </Link>
              <h5 className="text-center mt-3 mb-3">Para tus hijos</h5>
            </div>
          </div>
        </section>
      );
    }
    
    export default Section;