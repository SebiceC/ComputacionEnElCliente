import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { FaShoppingCart } from "react-icons/fa";
import "../css/Cart.css";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [session, setSession] = useState(null);
  const [compras, setCompras] = useState([]);
  const [viewCompras, setViewCompras] = useState(false);
  const [selectedCompra, setSelectedCompra] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);

    const storedSession = JSON.parse(localStorage.getItem("session"));
    if (storedSession && storedSession.id) {
      setSession(storedSession);
    }
  }, []);

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    alert("Producto eliminado con éxito");
  };

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.precio, 0);
  };

  const handleBuy = async () => {
    if (!session) {
      alert("Debes iniciar sesión para realizar una compra.");
      return;
    }
    try {
      const response = await axios.post("http://localhost:4000/api/compras", {
        nombre: session.id,
        productos: cart,
      });
      console.log(response.data.message);
      setCart([]);
      localStorage.removeItem("cart");
      alert(response.data.message);
    } catch (error) {
      console.error("Error al realizar la compra", error);
    }
  };

  const fetchCompras = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/compras", {
        params: { nombre: session.id },
      });
      setCompras(response.data);
    } catch (error) {
      console.error("Error al obtener las compras", error);
    }
  };

  useEffect(() => {
    if (viewCompras && session) {
      fetchCompras();
    }
  }, [viewCompras, session]);

  const handleCompraClick = async (compraId) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/compras/${compraId}`
      );
      setSelectedCompra(response.data);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error al obtener los detalles de la compra", error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCompra(null);
  };

  if (viewCompras) {
    return (
      <div className="cart-container">
        <NavBar />
        <div className="container">
          <h3 style={{ marginTop: "20px", textAlign: "center" }}>
            Tus Compras
          </h3>
          {compras.length === 0 ? (
            <p>No has realizado ninguna compra.</p>
          ) : (
            <table className="table table-light table-borderless table-hover text-center mb-0">
              <thead className="thead-dark">
                <tr>
                  <th className="bg-dark text-white">ID Compra</th>
                  <th className="bg-dark text-white">Total</th>
                  <th className="bg-dark text-white">Productos</th>
                </tr>
              </thead>
              <tbody className="align-middle">
                {compras.map((compra) => (
                  <tr
                    key={compra._id}
                    onClick={() => handleCompraClick(compra._id)}
                    style={{ cursor: "pointer" }}
                  >
                    <td className="align-middle">{compra._id}</td>
                    <td className="align-middle">${compra.total}</td>
                    <td className="align-middle">
                      {compra.productos.map((producto, index) => (
                        <div key={index}>{producto.nombre}</div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <button
            className="btn btn-primary mt-3"
            onClick={() => setViewCompras(false)}
            style={{ marginBottom: "1rem" }}
          >
            Volver al Carrito
          </button>
        </div>
        <Footer />
        {isModalOpen && (
          <CompraModal compra={selectedCompra} onClose={closeModal} />
        )}
      </div>
    );
  }

  return (
    <div className="cart-container">
      <NavBar cart={cart} />

      {cart.length === 0 ? (
        <div className="container-fluid">
          <div className="empty-cart">
            <FaShoppingCart size={50} color="gray" />
            <h2>Tu carrito está vacío</h2>
            <p>
              No tienes nada en el carrito en este momento. ¡Explora nuestros
              productos y añade tus favoritos!
            </p>
            <button
              className="btn btn-secondary mt-3"
              onClick={() => setViewCompras(true)}
            >
              Ver Compras
            </button>
          </div>
        </div>
      ) : (
        <div className="container-fluid1">
          <div className="flexi">
            <div className="col-lg-2 table-responsive mb-0" style={{ width: "100%" }} >
              <table className="table table-light table-borderless table-hover text-center mb-0">
                <thead className="thead-dark">
                  <tr>
                    <th className="bg-dark text-white">Productos</th>
                    <th className="bg-dark text-white">Precio</th>
                    <th className="bg-dark text-white">Cantidad</th>
                    <th className="bg-dark text-white">Total</th>
                    <th className="bg-dark text-white">Eliminar</th>
                  </tr>
                </thead>
                <tbody className="align-middle">
                  {cart.map((producto, index) => (
                    <tr key={index}>
                      <td className="align-middle">
                        <img
                          src={producto.img}
                          alt=""
                          style={{ width: "50px", marginRight: "10px" }}
                        />
                        {producto.nombre}
                      </td>
                      <td className="align-middle">${producto.precio}</td>
                      <td className="align-middle">
                        <b>1</b>
                      </td>
                      <td className="align-middle">${producto.precio}</td>
                      <td className="align-middle">
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => removeFromCart(index)}
                        >
                          <i className="fa fa-times"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-lg-6 payment-receipt-container">
              <h5 className="section-title position-relative text-uppercase s m-3">
                <span className="pr-3">Recibo de Pago</span>
              </h5>
              <div className="bg-light payment-receipt">
                <div className="border-bottom pb-2">
                  <div className="d-flex justify-content-between mb-3">
                    <h6>Subtotal</h6>
                    <h6>${getTotal()}</h6>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-medium">IVA</h6>
                    <h6 className="font-weight-medium">
                      ${(getTotal() * 0.1).toFixed(2)}
                    </h6>
                  </div>
                </div>
                <div className="pt-3">
                  <div className="d-flex justify-content-between mt-2">
                    <h5>Total</h5>
                    <h5>${(getTotal() * 1.1).toFixed(2)}</h5>
                  </div>
                  <div className="botones">
                    <button
                      className="btn btn-primary font-weight-bold mt-3"
                      onClick={handleBuy}
                    >
                      Comprar
                    </button>
                    <button
                      className="btn btn-secondary mt-3"
                      onClick={() => setViewCompras(true)}
                    >
                      Ver Compras
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

const CompraModal = ({ compra, onClose }) => {
  if (!compra) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h3>Detalles de la Compra</h3>
        <p>ID Compra: {compra._id}</p>
        <p>Total: ${compra.total}</p>
        <h4>Productos:</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            {compra.productos.map((producto, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={producto.img}
                    alt={producto.nombre}
                    style={{ width: "50px" }}
                  />
                </td>
                <td>{producto.nombre}</td>
                <td>${producto.precio}</td>
                <td>{producto.descripcion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
