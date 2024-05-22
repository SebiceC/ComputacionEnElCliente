import express from 'express';
import {
    obtenerProductos,
    crearProducto,
    obtenerProductoPorId,
    actualizarProducto,
    eliminarProducto,
} from '../controllers/ProductoController.js';

const router = express.Router();

router.route('/')
    .get(obtenerProductos)
    .post(crearProducto);

router.route('/:id')
    .get(obtenerProductoPorId)
    .put(actualizarProducto)
    .delete(eliminarProducto);

export default router;
