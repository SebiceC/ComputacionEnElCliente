import express, { application } from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db";
import usuarioRoutes from './routes/usuarioRoutes';
import proyectoRoutes from './routes/proyectoRoutes';

const app = express();
app.use(express.json());

dotenv.config();

conectarDB();

app.use("/api/usuarios", usuarioRoutes);
app.use("/api/proyectos", proyectoRoutes);


const PORT = process.env.PORT || 40000;

app.listen(PORT, ()=> {
    console.log(`Servidor corriendo en el puerto ${PORT}`);


});
