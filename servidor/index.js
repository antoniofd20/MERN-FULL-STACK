// Importamos express
const express = require('express');
const conectarDB = require('./config/db');

// Crear el servidor
const app = express();

// Conectar a la base de datos
conectarDB();

// Habilitar express.json
app.use(express.json({ extended: true}));

// Crear un puerto
const PORT = process.env.PORT || 4000;

 // Importar rutas
 app.use('/api/usuarios', require('./routes/usuarios'));

// Arrancar el servidor
app.listen(PORT, () => {
    console.log(`El servidor esta funcionando en el puerto ${PORT}`)
});