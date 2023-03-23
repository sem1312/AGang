const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');
const port = 2500;
const app = express();

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('dev'));
app.use(express(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('ejs');
});

app.get('/inicio', (req, res) => {
  const { name, edad, apellido } = req.body;
  console.log(`Nombre: ${name}, Edad: ${edad}, Apellido: ${apellido}`);
  let arr = {name:"patrisio", edad:"12",apellido:"gallo filon"}
  res.render('ejs', arr);
});
app.get('/costi', (req, res) => {
  const { name, edad, apellido } = req.body;
  console.log(`Nombre: ${name}, Edad: ${edad}, Apellido: ${apellido}`);
  let arr = {name:"gaby", edad:"20",apellido:"costila"}
  res.render('ejs', arr);
});
app.get('/vulliez', (req, res) => {
  const { name, edad, apellido } = req.body;
  console.log(`Nombre: ${name}, Edad: ${edad}, Apellido: ${apellido}`);
  let arr = {name:"Juan Wu", edad:"10",apellido:"Pajan"}
  res.render('ejs', arr);
});
app.get('/pocho', (req, res) => {
  const { name, edad, apellido } = req.body;
  console.log(`Nombre: ${name}, Edad: ${edad}, Apellido: ${apellido}`);
  let arr = {name:"Pocho", edad:"18",apellido:"Little"}
  res.render('ejs', arr);
});
app.get('/medran', (req, res) => {
  const { name, edad, apellido } = req.body;
  console.log(`Nombre: ${name}, Edad: ${edad}, Apellido: ${apellido}`);
  let arr = {name:"Franco Ismael", edad:"15",apellido:"Medrano Britos"}
  res.render('ejs', arr);
});
app.get('/cuesta', (req, res) => {
  const { name, edad, apellido } = req.body;
  console.log(`Nombre: ${name}, Edad: ${edad}, Apellido: ${apellido}`);
  let arr = {name:"Lauti", edad:"2",apellido:"Bolita"}
  res.render('ejs', arr);
});
app.get('/pepis', (req, res) => {
  const { name, edad, apellido } = req.body;
  console.log(`Nombre: ${name}, Edad: ${edad}, Apellido: ${apellido}`);
  let arr = {name:"Pepii", edad:"pepii",apellido:"pepiii"}
  res.render('ejs', arr);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});