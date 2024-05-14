import Footer from "./Footer";
import NavBar from "./NavBar";

import producto1 from '../img/sarten2.webp';
import producto2 from '../img/biberon1.jpg';
import producto3 from '../img/cepillo1.jpg';
import producto4 from '../img/collar.webp';

const Cart = () => {

  return (
    <div style={{maxWidth:'100%'}} >
    <NavBar></NavBar>
    <div className="container-fluid">
      <div className="flexi ">
        <div className= "col-lg-2 table-responsive mb-0 "style={{width:'100%'}}>

        <table className="table table-light table-borderless table-hover text-center mb-0">
            <thead className="thead-dark ">
              <tr>
                <th  className="bg-dark text-white">Products</th>
                <th   className="bg-dark text-white" >Price</th>
                <th   className="bg-dark text-white">Quantity</th>
                <th   className="bg-dark text-white">Total</th >
                <th   className="bg-dark text-white">Remove</th>
              </tr>
            </thead>
            <tbody className="align-middle">
              {/* Aquí van tus filas de productos, cada una similar a la siguiente */}
              <tr>
                <td className="align-middle"><img src={producto1} alt="" style={{ width: '50px',marginRight:'10px' }} />Sarten-X</td>
                <td className="align-middle">$150</td>
            
                <td className="align-middle"><b>1</b>
                </td>
                <td className="align-middle">$150</td>
                <td className="align-middle"><button className="btn btn-sm btn-danger"><i className="fa fa-times"></i></button></td>
              </tr>
              <tr>
                <td className="align-middle"><img src={producto2} alt="" style={{ width: '50px',marginRight:'10px' }} />Biberon</td>
                <td className="align-middle">$150</td>
                <td className="align-middle"><b>1</b>
                </td>
                <td className="align-middle">$150</td>
                <td className="align-middle"><button className="btn btn-sm btn-danger"><i className="fa fa-times"></i></button></td>
              </tr>
              <tr>
                <td className="align-middle"><img src={producto3} alt="" style={{ width: '50px',marginRight:'10px' }} /> Cepillo</td>
                <td className="align-middle">$150</td>
                <td className="align-middle"><b>1</b>
                </td>
                <td className="align-middle">$150</td>
                <td className="align-middle"><button className="btn btn-sm btn-danger"><i className="fa fa-times"></i></button></td>
              </tr>
              <tr>
                <td className="align-middle"><img src={producto4} alt="" style={{ width: '50px',marginRight:'10px' }} />Collar</td>
                <td className="align-middle">$150</td>
                <td className="align-middle"><b>1</b>
                </td>
                <td className="align-middle">$150</td>
                <td className="align-middle"><button className="btn btn-sm btn-danger"><i className="fa fa-times"></i></button></td>
              </tr>
              {/* ... Puedes repetir esta estructura para cada producto ... */}
            </tbody>
          </table>
          
        </div>
        <div className="col-lg-4">
          <form className="mb-30" action="">
            <div className="input-group" style={{width:'50%'}}>
              <input type="text" className="form-control border-0 "  placeholder="Coupon Code" />
              <div className="input-group-append">
                <button className="btn btn-primary">Enviar</button>
              </div>
            </div>
          </form>
          <h5 className="section-title position-relative text-uppercase s m-3" ><span className=" pr-3">Recibo De Pago</span></h5>
          <div className="bg-light p-30 mb-5 " style={{width:'50%'}} >
            <div className="border-bottom pb-2">
              <div className="d-flex justify-content-between mb-3">
                <h6>Subtotal</h6>
                <h6>$15.000</h6>
              </div>
              <div className="d-flex justify-content-between">
                <h6 className="font-weight-medium">IVA</h6>
                <h6 className="font-weight-medium">$10%</h6>
              </div>
            </div>
            <div className="pt-3">
              <div className="d-flex justify-content-between mt-2">
                <h5>Total</h5>
                <h5>$16.000</h5>
              </div>
              <button className=" align-middle btn btn-block btn-primary font-weight-bold my-3 py-3">Comprar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Cart;
