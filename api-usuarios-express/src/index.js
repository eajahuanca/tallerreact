const express = require('express'); const cors = require('cors'); const app = express(); 
 
// settings 
app.set('port', process.env.PORT || 5000); 
 
// middlewares 
app.use(express.urlencoded({extended: false})); 
app.use(express.json()); 
app.use(cors()); 
 
// routes 
app.use('/api-cognos/usuarios', require('./rutas/usuarios-rutas.js')); 
 
// starting the server 
app.listen(app.get('port'), () => {     
    console.log(`Server escuchando en el puerto ${app.get('port')}`); 
}); 