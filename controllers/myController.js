exports.inicio = (req, res) => {
    let arr = { name: "Patricio", edad: "12", apellido: "Gallo Dillon" }
    res.render('ejs', arr);
};

exports.costilla = (req, res) => {
    let arr = { name: "gaby", edad: "20", apellido: "costila" }
    res.render('ejs', arr);
};

exports.pajan = (req, res) => {
    let arr = { name: "Juan", edad: "10", apellido: "Pajan" }
    res.render('ejs', arr);
};

exports.pocho = (req, res) => {
    let arr = { name: "Pocho", edad: "18", apellido: "Little" }
    res.render('ejs', arr);
};

exports.medran = (req, res) => {
    let arr = { name: "Franco Ismael", edad: "15", apellido: "Medrano Britos" }
    res.render('ejs', arr);
};

exports.bolita = (req, res) => {
    let arr = { name: "Lauti", edad: "2", apellido: "Bolita" }
    res.render('ejs', arr);
};

exports.pepis = (req, res) => {
    let arr = { name: "Pepii", edad: "pepii", apellido: "pepiii" }
    res.render('ejs', arr);
};