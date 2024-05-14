import hero from '../img/hero.png'
import NavBar from './NavBar';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faExchangeAlt, faPercent, faUser } from '@fortawesome/free-solid-svg-icons';



const AboutUs = () => {
  return (
    
    <div>
    <NavBar></NavBar>  
   

      <section className="bg-success py-5" >
        <div className="container " >
          <div className="row align-items-center py-5">
            <div className="col-md-8 text-white" >
              <h1 className="h1"><b>QUIÉNES SOMOS</b></h1>
              <p>
                Somos una tienda de cacharros especializada en ofrecer una amplia gama de productos y utensilios para satisfacer todas tus necesidades domésticas y de uso cotidiano. Con años de experiencia en el mercado, nos enorgullecemos de proporcionar a nuestros clientes productos de alta calidad a precios competitivos.
              </p>
            </div>
            <div className="col-md-4">
              <img src={hero} alt="About Hero" style={{height:'300px'}}/>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="row text-center pt-5 pb-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">Nuestros Servicios</h1>
            <p>
              Nuestros servicios incluyen asesoramiento experto, productos asequibles y un compromiso con la satisfacción del cliente. ¡Descubre cómo nuestros cacharros pueden mejorar tu vida hoy mismo!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-3 pb-5">
            <div className="h-100 py-5 services-icon-wap shadow">
              <div className="h1 text-success text-center">
                <FontAwesomeIcon icon={faTruck} className='iconos-about' />
              </div>
              <h2 className="h5 mt-4 text-center">Contraentrega</h2>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 pb-5">
            <div className="h-100 py-5 services-icon-wap shadow">
              <div className="h1 text-success text-center">
                <FontAwesomeIcon icon={faExchangeAlt} className='iconos-about' />
              </div>
              <h2 className="h5 mt-4 text-center">Devoluciones</h2>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 pb-5">
            <div className="h-100 py-5 services-icon-wap shadow">
              <div className="h1 text-success text-center">
                <FontAwesomeIcon icon={faPercent} className='iconos-about'/>
              </div>
              <h2 className="h5 mt-4 text-center">Promociones</h2>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 pb-5">
            <div className="h-100 py-5 services-icon-wap shadow">
              <div className="h1 text-success text-center">
                <FontAwesomeIcon icon={faUser} className='iconos-about' />
              </div>
              <h2 className="h5 mt-4 text-center">Soporte 24/7</h2>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </div>
    
  );
}

export default AboutUs;