const express = require('express');
const app = express();
const mongoose = require('mongoose');

const userRouter=require('./routes/users.js');

mongoose.connect( 'mongodb://localhost:27017/usuario', { useNewUrlParser: true, useCreateIndex: true } )
.then( () => console.log( 'conexión con MongoDB establecida con éxito' ) )
.catch( error => console.log( 'Error al conectar a MongoDB: ' + error ) )

app.use( function ( req, res, next ) {
  res.header( "Access-Control-Allow-Origin", "*" );
  res.header( "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept" );
  next();
} );

app.use(express.json());

app.use('/user',userRouter);

// app.get('/', (req, res) => {
//   res.send('Hola express!')
// });

// app.post('/signup', (req,res) => {
//   res.send(req.body);
// })

app.listen(3000, () => console.log('servidor levantado'));