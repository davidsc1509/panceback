const { Schema, model } = require('mongoose');

const platoSchema = Schema({
    nombre: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },
    imagen:{
        type: String,
        required: false,

    }
})

module.exports = model('Plato', platoSchema)