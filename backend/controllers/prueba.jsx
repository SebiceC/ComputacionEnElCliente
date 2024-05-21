import  { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import producto1 from '../img/sarten1.jpg';
import producto2 from '../img/pocillos1.jpg';
import producto3 from '../img/tabla1.jpg';
import producto4 from '../img/cubiertos1.jpg';

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
        <div className="container">
            <div className="row">
                {productos.map((producto, index) => (
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
    );
};

export default ShopFilter;

     