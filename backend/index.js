const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Loginproject', {useNewUrlParser:true})
.then(()=>console.log('conexion con mongoDB creada con exito'))
.catch(err => console.log('error al conectar con mongoDB'+ err));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola express!')
});

app.post('/signup', (req,res) => {
  res.send(req.body);
})

app.listen(3000, () => console.log('servidor levantado'));