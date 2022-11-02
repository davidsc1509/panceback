const express = require('express')
require('dotenv').config()
const { dbConnection } = require('./database/dbConfig')

const app = express();

dbConnection();

app.use(express.json());

app.use('/api/routes/hotel', require('./routes/hotel')) //Igual con todas