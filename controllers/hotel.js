const express = require('express');
const hoteles = require('../models/hoteles');

const crearHotel = async (req, res = express.request) => {

    const { nombre, descripcion, direccion, precio, latitud, longitud } = req.body
    try {
        const Hotel = new hoteles(req.body);
        await Hotel.save();

        res.status(200).json({
            ok: true,
            Hotel
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            error
        })
    }

}

module.exports = {
    crearHotel
}