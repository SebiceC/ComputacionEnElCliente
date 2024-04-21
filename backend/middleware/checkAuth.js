import { jwt } from "jsonwebtoken";
import { Usuario } from "../models/Usuario";

const checkAuth = async (req, res, next) => {
    let token;
    if ( 
        req.headers.autorization && 
        req.headers.autorization.startsWith('Bearer')
    ) {
        try {
            token = req.headers.autorization.split(" ")[1];

            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            req.usuario = await Usuario.findById(decoded.id).select("-password -confirmado - token -createdAt -updatedAt -__v");

            return next();
        } catch (error) {
            return res.status(404).json({ msg: 'Hubo un error'});
        }
    
        
    }
    
    if (!token) {
        const error = new Error("Token no valido");
        res.status(401).json({ msg: error.message });
    }
    
    next();
};

export default checkAuth;