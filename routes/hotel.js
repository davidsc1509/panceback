const express = require('express')

const router = express.Router();

const { crearHotel } = require('../controllers/hotel');

router.post('/hotel/new', crearHotel);