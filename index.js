const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');
const port = 2501;
const app = express();
const myRouter = require("./routes/router.js");

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
//app.use('/imgs', express.static(path.join(__dirname, 'public/imgs')));

app.use("/", myRouter);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});