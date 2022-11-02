const { Schema, model } = require('mongoose');

const platoSchema = Schema({
    nombre: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    }
})

module.exports = model('Plato', platoSchema)