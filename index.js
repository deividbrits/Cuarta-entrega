const express = require('express');
const routes = require('../Cuarta entrega/routes/rutas');

const app = express();

app.use(express.json())

app.use('api',routes) 


app.listen(3000, () => {
    console.log('servidor iniciado en puerto 3000');
} )