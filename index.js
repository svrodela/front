const express =require('express');
const router = express.Router();
const app = express();
const path= require('path');
//const mongoose = require('mongoose');
//configuración engine
app.set('port', process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

const indexRoutes = require('./routes/index.js');
app.use('/',indexRoutes);



const request = require('request');
/*
request('https://colmena.onrender.com/grafica', function (error, response, body) {
  console.error('error:', error); 
  console.log('statusCode:', response && response.statusCode); 
  console.log('body:', body); 
});

router.get('/ver', async (req, res) => {
  //const valores = await Valor.find();
  console.log("hola");
  //res.render('index.ejs');
});*/

app.listen(app.get('port'),()=>{
  console.log('Servidor funcionando en el puerto',app.get('port'))
});