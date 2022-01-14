 require('dotenv').config();
 const express = require('express');
 const app = express();
 const mongoose = require('mongoose');
  mongoose.connect(process.env.CONNECTIONSTRING)
.then(()=>{
     app.emit('pronto');
    })
.catch(e => console.log(e));


 const routes = require('./routes');
 const path = require('path');
 const meuMiddleWare = require('./src/middleware/midleware')


 app.use(express.urlencoded({extended: true}));
 app.use(express.static('./public'));

 //Nosso Próprio MiddleWare
app.use(meuMiddleWare)
 app.set('views', path.resolve(__dirname, 'src', 'views'));
 app.set('view engine', 'ejs');
 app.use(routes);

app.on( 'pronto', ()=>{
app.listen(3900, ()=>{
    console.log('Aberto, na porta http://localhost:3900');
    console.log('Servidor sendo executado');
  });
});