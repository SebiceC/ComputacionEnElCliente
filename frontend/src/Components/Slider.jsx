
import { Carousel } from 'react-bootstrap';
import banner1 from '../img/cookies.png';
import banner2 from '../img/ariel.png';
import banner3 from '../img/pedigree2.avif';
import banner4 from '../img/lampara.png';

function MyCarousel() {
  return (
    <Carousel id="template-mo-zay-hero-carousel" >
      <Carousel.Item>
      <div className="container">
          <div className="row p-5">
            <div className="col-lg-6 mb-0 d-flex align-items-center order-lg-last">
              <div className="text-align-left align-self-center">
                <h1 className="h1 "><b>Cookies</b> </h1>
                <h3 className="h2">Sabor casero y delicioso.</h3>
                <p>
                Nuestras galletas Cookies son horneadas con ingredientes de alta calidad para 
                un sabor casero y delicioso. Perfectas para disfrutar con un vaso de leche o en
                 cualquier momento del día.
                </p>
              </div>
            </div>
            <div className="mx-auto col-md-6 col-lg-6">
              <img className="img-fluid" src={banner1} alt="First slide" />
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="container">
          <div className="row p-5">
          
            <div className="col-lg-6 mb-0 d-flex align-items-center order-lg-last">
              <div className="text-align-left align-self-center">
                <h1 className="h1"> <b>Jabón Ariel</b></h1>
                <h3 className="h2">Poder de limpieza excepcional.</h3>
                <p>
                El jabón Ariel es conocido por su poder de limpieza excepcional 
                y su capacidad para eliminar las manchas más difíciles. Deja tu ropa fresca
                 y reluciente.
                </p>
              </div>
            </div>
            <div className="mx-auto col-md-8 col-lg-6 ">
              <img className="img-fluid" src={banner2} alt="Second slide" />
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="container">
          <div className="row p-5">
           
            <div className="col-lg-6 mb-0 d-flex align-items-center order-lg-last">
              <div className="text-align-left align-self-center">
                <h1 className="h1"><b>Pedigree</b></h1>
                <h3 className="h2">Nutrición de calidad para tu mascota.</h3>
                <p>
                Pedigree ofrece una nutrición de alta calidad para tus mascotas. Nuestra
                 comida está diseñadapara satisfacer las necesidades de tu perro y mantenerlo 
                 saludable y lleno de energía.
                </p>
              </div>
            </div>
            <div className="mx-auto col-md-8 col-lg-6 ">
              <img className="img-fluid" src={banner3} alt="Third slide" />
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="container">
          <div className="row p-5">
           
            <div className="col-lg-6 mb-0 d-flex align-items-center order-lg-last">
              <div className="text-align-left align-self-center">
                <h1 className="h1"><b>Proyector de pantalla</b></h1>
                <h3 className="h2">Experiencia de cine en casa.</h3>
                <p>
                Con nuestro proyector de pantalla, puedes transformar cualquier habitación
                 en un cine en casa. Disfruta de películas, juegos y presentaciones en una
                  pantalla grande con una calidad de imagen impresionante.
                </p>
              </div>
            </div>
            <div className="mx-auto col-md-8 col-lg-6 ">
              <img className="img-fluid-hola" src={banner4} alt="four slide" style={{padding:'20px'}}/>
            </div>
          </div>
        </div>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default MyCarousel;
