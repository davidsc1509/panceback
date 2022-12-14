const { Schema, model } = require('mongoose');

const hotelSchema = Schema({
    nombre: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    }, 
    direccion: {
        type: String,
        required: true,
    }, 
    precio: {
        type: Number,
        required: true,
    }, 
    nroHabitaciones:{
        type: Number,
        required: true,
    },
    latitud: {
        type: Number,
        required: true,
    }, 
    longitud: {
        type: Number,
        required: true,
    }, 
    reserva: {
        type: Array,
        ref: "Reserva",
        required: false,
    }

})

module.exports = model('Hotel', hotelSchema)