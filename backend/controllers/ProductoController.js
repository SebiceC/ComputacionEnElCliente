import Producto from '../models/Producto.js';

// Obtener todos los productos
const obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.find({});
        res.json(productos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener productos' });
    }
};

// Crear un nuevo producto
const crearProducto = async (req, res) => {
    const { nombre, precio, descripcion, marca, especificaciones, colores_disponibles } = req.body;
    const nuevoProducto = new Producto({
        nombre,
        precio,
        descripcion,
        marca,
        especificaciones,
        colores_disponibles
    });

    try {
        const productoGuardado = await nuevoProducto.save();
        res.status(201).json(productoGuardado);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el producto' });
    }
};

// Obtener un producto por ID
const obtenerProductoPorId = async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);
        if (producto) {
            res.json(producto);
        } else {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el producto' });
    }
};

// Actualizar un producto
const actualizarProducto = async (req, res) => {
    const { nombre, precio, descripcion, marca, especificaciones, colores_disponibles } = req.body;
    try {
        const producto = await Producto.findById(req.params.id);
        if (producto) {
            producto.nombre = nombre;
            producto.precio = precio;
            producto.descripcion = descripcion;
            producto.marca = marca;
            producto.especificaciones = especificaciones;
            producto.colores_disponibles = colores_disponibles;

            const productoActualizado = await producto.save();
            res.json(productoActualizado);
        } else {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el producto' });
    }
};

// Eliminar un producto
const eliminarProducto = async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);
        if (producto) {
            await producto.remove();
            res.json({ message: 'Producto eliminado' });
        } else {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el producto' });
    }
};

export {
    obtenerProductos,
    crearProducto,
    obtenerProductoPorId,
    actualizarProducto,
    eliminarProducto,
};
