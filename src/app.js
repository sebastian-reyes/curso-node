import express from 'express';
import router from './routes/index.routes.js'

const app = express();

app.listen(3000, ()=>{
    console.log('Servidor a la espera de conexiones');
})

const rutas = router;

//Rutas
app.use(rutas);
//app.use(require('./routes/index.routes'))