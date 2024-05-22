import express from 'express';
import {
    obtenerCompras,
    nuevaCompra,
    obtenerCompra,
    //obtenerComprasAd,
} from '../controllers/comprasController.js';

const router = express.Router();

router
    .route('/')
    .get( obtenerCompras)
    //.get( obtenerComprasAd)
    .post( nuevaCompra) 

router
    .route('/:id')
    .get( obtenerCompra)

export default router;
