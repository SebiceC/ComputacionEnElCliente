//const express = require("express");
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import conectarDB from "./config/db.js";
import usuarioRoutes from './routes/usuarioRoutes.js';
import comprasRoutes from './routes/comprasRoutes.js';
import productoRoutes from './routes/productoRoutes.js'; // Importa la ruta de productos



const app = express();
app.use(express.json());

dotenv.config();

conectarDB();

// Configurar CORS
const whitelist = ['http://localhost:5174', 'http://localhost:5173', 'http://localhost:4000'];

const corsOption = {
    origin: function(origin, callback){
        if(whitelist.includes(origin) !== -1 || !origin){
            // puede consultar la API
            callback(null, true);
        }else{
            // No esta permitido
            callback(new Error("No permitido por CORS"));
        }
    },
};

app.use(cors(corsOption));

// Routing
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/compras', comprasRoutes);
app.use('/api/productos', productoRoutes); // Usa la ruta de productos


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})