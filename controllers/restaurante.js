const express = require('express');
const restaurantes = require('../models/restaurantes')

const crearRestaurante = async (req, res = express.request) => {

    const { nombre, direccion, latitud, longitud} = req.body
    try {
        const Restaurante = new restaurantes(req.body);
        await Restaurante.save();

        res.status(200).json({
            ok: true,
            Restaurante
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            error
        })
    }
}



