import mongoose from 'mongoose';

const productoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    marca: {
        type: String,
        required: true,
    },
    especificaciones: {
        type: String,
        required: true,
    },
    colores_disponibles: {
        type: [String],
        required: true,
    },
}, {
    timestamps: true,
});

const Producto = mongoose.model('Producto', productoSchema);

export default Producto;
