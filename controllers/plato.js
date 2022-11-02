const express = require('express');
const platos = require('../models/platos')

const crearPlato = async (req, res = express.request) => {

    const { nombre, precio} = req.body
    try {
        const Plato = new platos(req.body);
        await Plato.save();

        res.status(200).json({
            ok: true,
            Plato
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            error
        })
    }

}

const eliminarPlato = async (req, res = express.request) => { 

    const { nombre } = req.body 
    const Plato = await platos.findOne({ nombre: nombre })
    if (!Plato){
        res.json({
            mensaje: 'El plato no existe'
        })
    }else{   
        await Plato.findByIdAndRemove({_id:Plato._id})
        const token = jwt.sign({_id:Plato._id},"Secreto")
        res.json({
            mensaje: "Producto " + Plato.nombre + " fué eliminado",
            token, token
        })    
    }
}