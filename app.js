import express from 'express';
const app = express();

app.listen(3000, ()=>{
    console.log('Servidor a la espera de conexiones');
})

app.get('/',(req, res)=>{
    res.send('La conexión ha sido correcta')
})