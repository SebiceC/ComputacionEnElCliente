import Usuario from "../models/Usuario.js";
import generarId from "../helpers/generarId.js";
//import generarJWT from "../helpers/generarJWT.js";

const registrar = async (req, res) => {
    const {email} = req.body;
    const existeUsuario = await Usuario.findOne({ email });

    if (existeUsuario){
        const error = new Error("Usuario ya registrado");
        return res.status(400).json({ msg: error.message });
    }

    try {
        const usuario = new Usuario(req.body);
        usuario.token = generarId();
        await usuario.save();
        res.json({
            msg: "Usuario Creado Correctamente",
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: error.message });
    }
};

const autenticar = async (req, res) => {
    const { email, password } = req.body;
  
    //si el usuario existe
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      const error = new Error("Usuario no existe");
      return res.status(404).json({ msg: error.message });
    }
  
    //comprobar el password
    if (await usuario.comprobarPassword(password)) {
      return res.json({
        _id: usuario._id,
        nombre: usuario.nombre,
        email: usuario.email,
        msg: "Iniciado sesion correctamente",
      });
    } else {
      const error = new Error("El password es incorrecto");
      return res.status(402).json({ msg: error.message });
    }
  };


// const confirmar = async (req, res) => {
    
//     const { token } = req.params;
//     const usuarioConfirmar = await Usuario.findOne({ token });
//     if (!usuarioConfirmar) {
//         const error = new Error("Token no valido");
//         return res.status(403).json({ msg: error.message });
//     }
//     try {
//         usuarioConfirmar.confirmado = true;
//         usuarioConfirmar.token = ""
//         await usuarioConfirmar.save();
//         res.json({ msg: "Usuario confirmado correctamente" });
//     } catch (error) {
//         console.log(error);
//     }
// };

// const olvidePassword = async (req, res) => {
//     const {email} = req.body;
//     const usuario = await Usuario.findOne({ email });
//     if (!usuario) {
//         const error = new Error ("El usuario no existe");
//         return res.status(404).json({ msg: error.message })
//     }

//     try {
//         usuario.token = generarId();
//         await usuario.save();

//         const resetUrl = `http://localhost:5173/olvide-password/${usuario.token}`;
//         const mailOptions = {
//             from: process.env.EMAIL_USER,
//             to: usuario.email,
//             subject: 'Password Reset',
//             html: `<p>To reset your password, click the following link:</p><a href="${resetUrl}">Reset Password</a>`
//         }; 

//         transporter.sendMail(mailOptions, (error, info) => {
//             if (error) {
//                 console.log(error);
//                 return res.status(500).json({ msg: 'Error sending email' });
//             }
//             res.json({ msg: 'Hemos enviado un email con las instrucciones' });
//         });
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({ msg: "Hubo un error, intenta nuevamente" });
//     }
// };


// const comprobarToken = async (req, res) => {
//     const { token } = req.params;

//     const tokenValido = await Usuario.findOne({ token });

//     if (tokenValido) {
//         res.json({ msg: "Token valid y el usuario existe"});
//     } else {
//         const error = new Error ("Token no valido");
//         return res.status(404).json({ msg: error.message });
//     }
// };

// const nuevoPassword = async (req, res) => {
//     const { token } = req.params;
//     const { password } = req.body;

//     const usuario = await Usuario.findOne({ token });

//     if (usuario) {
//         usuario.password = password;
//         usuario.token = "";
//         try {
//             await usuario.save();
//             res.json({ msg: "Password modificado correctamente" });
//         } catch (error) {
//             console.log(error);
//         }
//     } else {
//         const error = new Error ("Token no valido");
//         return res.status(404).json({ msg: error.message });
//     }
// };

const perfil = (req, res) => {
    const { usuario } = req;

    res.json(usuario);
}

const obtenerUsuarios = async (req, res) => {
    try {
      const usuarios = await Usuario.find();
      res.json(usuarios);
    } catch (error) {
      console.log(error);
    }
  };

export { registrar, autenticar, perfil, obtenerUsuarios };