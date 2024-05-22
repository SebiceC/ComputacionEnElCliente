import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram ,FaLinkedinIn,FaTwitter ,FaPhone, FaEnvelope,FaLocationArrow} from 'react-icons/fa';
import React from 'react';
function Footer() {
  return (
    <footer className="bg-dark" id="tempaltemo_footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 pt-5">
            <h2 className="h2 text-light border-bottom pb-3  text-center">Informacion</h2>
            <ul className="list-unstyled  ">
              <li className='list-footer'>
              <FaLocationArrow className='icon-footer'/>
              <a className="text-decoration-none">Neiva, Huila</a>
              </li>
              <li className='list-footer'>
              <FaEnvelope className='icon-footer'/>
                <a className="text-decoration-none" href="mailto:info@company.com">MixShop@gmail.com</a>
              </li>
              <li className='list-footer'>
              <FaPhone className='icon-footer'/>
                <a className="text-decoration-none" href="tel:010-020-0340">010-020-0340</a>
              </li>
             
            </ul>
          </div>
          <div className="col-md-3 pt-5">
            <h2 className="h2 text-light border-bottom pb-3 border-light text-center">Siguenos</h2>
            <p className='text-white '>Siguenos en  nuestras redes sociales donde encontraras muchas cosas hermosas</p>
   
            <div className="row text-light mb-4">
          <div className="col-12 mb-3">
          </div>
          <div className=" list-inline-s text-center">
        <ul className="list-inline text-center ">
          <li className="list-inline-item">
            <Link to="http://facebook.com/" >
              <FaFacebookF className='icon-footer'/>
            </Link>
          </li>
          <li className="list-inline-item ">
            <Link to="https://www.instagram.com/">
            <FaInstagram className='icon-footer'/>
            </Link>
          </li>
          <li className="list-inline-item ">
            <Link to="https://twitter.com/" >
            <FaTwitter className='icon-footer'/>
            </Link>
          </li>
          <li className="list-inline-item ">
            <Link to="https://www.linkedin.com/" >
            <FaLinkedinIn className='icon-footer'/>
            </Link>
          </li>
        </ul>
      </div>
        
        </div>
          </div>
          
          <div className="col-md-3 pt-5">
            <h2 className="h2 text-light border-bottom pb-3 border-light text-center ">Ayuda</h2>
            <ul className="">
              <li className='list-footer'><a className="text-decoration-none" href="#">Preguntas Frecuentes</a></li>
              <li className='list-footer' ><a className="text-decoration-none" href="#">Tips para la comunidad</a></li>
              <li className='list-footer' ><a className="text-decoration-none" href="#">Metodos de pago</a></li>
              <li className='list-footer' ><a className="text-decoration-none" href="#">Distribuidores</a></li>
            </ul>
          </div>
          <div className="col-md-3 pt-5">
            <h2 className="h2 text-light border-bottom pb-3 border-light text-center ">Conocenos</h2>
            
            <ul className="">
              <li className='list-footer' ><Link className="text-decoration-none" to="/about">Quiénes Somos</Link></li>
              <li className='list-footer' ><a className="text-decoration-none" href="#">Trabaja con nosotros</a></li>
              <li className='list-footer' ><a className="text-decoration-none" href="#">Contactanos</a></li>
              <li className='list-footer' ><a className="text-decoration-none" href="#">FAQs</a></li>
              
            </ul>
          </div>
        </div>
        <div className="t  py-3">
        <div className="container">
          <div className="row pt-2">
            <div className="col-12">
              <p className="text-center text-white">
                2023 MixShop  @NIT 890908.Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      </div>
      
    </footer>
  );
}

export default Footer;
