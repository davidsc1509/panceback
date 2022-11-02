const { Schema, model } = require('mongoose');

const reservaSchema = Schema({
    
    fecha: {
        type: Date,
        required: true,
    }, 
    hora: {
        type: Date,
        required: true,
    }, 
    platos: {
        type: Array,
        ref: "Plato",
        required: false,
    },
    
    
})

module.exports = model('Reserva', reservaSchema)