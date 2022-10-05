const express = require('express')

//Crear servidor de express
const app = express();

//ROUTES
app.use('/api/auth' , require('./routes/auth'));

//Nos aseguramos de que no sea el mismo puerto que Angular APP
app.listen(4000, () => {
    console.log(`Servidor corriendo en el puerto ${ 4000 } `);
});