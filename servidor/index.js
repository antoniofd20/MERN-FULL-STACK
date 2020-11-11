// Importamos express
const express = require('express');
const conectarDB = require('./config/db');

// Crear el servidor
const app = express();

// Conectar a la base de datos
conectarDB();

// Crear un puerto
const PORT = process.env.PORT || 4000;

/**
 * DEFINIR LA PAGINA PRINCIPAL
 * app.get('/', (req,res) => {
 *     res.send('Hola mundo!')
 * });
 */

// Arrancar el servidor
app.listen(PORT, () => {
    console.log(`El servidor esta funcionando en el puerto ${PORT}`)
});