require ('dotenv').config();
const express = require('express');
const routes = require('../Cuarta entrega/routes/rutas');

const app = express();
const port = process.env.PORT  || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api',routes) 


app.listen(port, () => {
    console.log('servidor iniciado en puerto :' + port);
} );