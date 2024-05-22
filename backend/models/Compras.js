import mongoose from 'mongoose';
const comprasSchema = mongoose.Schema({

    nombre: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
    },
    total: {
        type: Number,
        trim: true,
        required: true,
    },
    productos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Producto",
        },
    ],
}, {
        timestamps: true,
        _id: {auto: true},
    }
);

const Compras = mongoose.model("Compras", comprasSchema);
export default Compras;
