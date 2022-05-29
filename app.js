const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port =process.env.PORT;



app.set("view engine", "hbs");
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estatico

app.use( express.static('public') );

app.get('/', (req, res) => {
  res.render('home',{
    nombre: 'Miguel Espinosa',
    titulo:'Curso Node'
  });
})

app.get('/generic', (req, res) => {
  res.render('generic',{
    nombre: 'Miguel Angel Espinosa Garnica',
    titulo:'Curso Node generic'
  });
})

app.get('/elements', (req, res) => {
  res.render('elements',{
    nombre: 'Miguel Angel Espinosa Garnica',
    titulo:'Curso Node Elements'
  });
})


app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
  })


app.listen(port, () => {
    console.log(`Ejemplo corriendo en el puerto:${port}`)
})