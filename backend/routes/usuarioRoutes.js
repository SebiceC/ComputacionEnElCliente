import express from "express";

import { 
    registrar,
    autenticar,    
    perfil,
    obtenerUsuarios,

} from "../controllers/usuarioController.js"

const router = express.Router();

router.post("/", registrar); //crea un nuevo usuario
router.get("/", obtenerUsuarios); //muestra todos los usuarios
router.post("/login", autenticar);
router.get("/perfil", perfil);

export default router;  