import Compras from '../models/Compras.js';

const obtenerCompras = async (req, res) => {  
    try {
      const { nombre } = req.query;
      if (!nombre) {
        return res.status(400).json({ msg: "Cliente ID es requerido " });
      }

      const compras = await Compras.find({nombre}).populate("nombre", "nombre").populate({path: "productos", select: "nombre"});

      res.json(compras); 
    }catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error al obtener las compras" });
    }
    
};

const obtenerComprasAd = async (req, res) => {
    try {
      const compras = await Compras.find()
        .populate("nombre", "nombre")
        .populate({
          path: "productos",
          select: "nombre"
        });
      res.json(compras); 
    } catch (error) {
      console.log(error);
      res.status(500).send('Error al obtener las compras');
    }
  };

  const nuevaCompra = async (req, res) => {
    const { nombre, productos } = req.body;
  
    const total = productos.reduce((acc, producto) => acc + producto.precio, 0);
  
    const compra = new Compras({
      nombre,
      productos,
      total
    });
  
    try {
      const compraAlmacenada = await compra.save();
      res.json({
        message: "Compra realizada exitosamente.",
        compra: compraAlmacenada,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error al realizar la compra." });
    }
  };

  const obtenerCompra = async (req, res) => {
    const { id } = req.params;

    try {
        const compra = await Compras.findById(id)
            .populate("nombre", "nombre")
            .populate("productos", "nombre precio img descripcion");

        if (!compra) {
            const error = new Error("No Encontrado");
            return res.status(401).json({ msg: error.message });
        }

        res.json(compra);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al obtener la compra" });
    }
};



// const editarCompra = async (req, res) => {
//     const { id } = req.params;

//     const compra = await Compras.findById(id);

//     console.log(compra);
//     if (!compra) {
//         const error = new Error("No Encontrado");
//         return res.status(404).json({ msg: "Acción No Valida " });
//     }
//     if (compra.creador.toString() !== req.usuario._id.toString()) {
//         const error = new Error("Acción no Valida");
//         return res.status(401).json({ msg: error.message });
//     }

//     compra.nombre = req.body.nombre || compra.nombre;
//     compra.descripcion = req.body.descripcion || compra.descripcion;
//     compra.fechaEntrega = req.body.fechaEntrega || compra.fechaEntrega;
//     compra.cliente = req.body.cliente || compra.cliente;

//     try {
//         const compraAlmacenado = await compra.save();
//         res.json(compraAlmacenado);
//     } catch (error) {
//         console.log(error);
//     }
// };



// const eliminarcompra = async (req, res) => {
//     const { id } = req.params;

//     const compra = await Compras.findById(id);

//     console.log(compra);
//     if (!compra) {
//         const error = new Error("No Encontrado");
//         return res.status(404).json({ msg: "Acción No Valida " });
//     }
//     if (compra.creador.toString() !== req.usuario._id.toString()) {
//         const error = new Error("Acción no Valida");
//         return res.status(401).json({ msg: error.message });
//     }

//     try {
//         await compra.deleteOne();
//         res.json({ msg: "compra Eliminado" });
//     } catch (error) {
//         console.log(error);
//     }
// };


export {
    obtenerCompras,
    nuevaCompra,
    obtenerCompra,
    obtenerComprasAd,
    //editarCompra,
    //eliminarCompra,
    
}
