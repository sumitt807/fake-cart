const express = require("express");
var bodyParser = require('body-parser');
var cors = require('cors')
const app = express();
const path = require("path");


app.use(cors())
app.use(express.static('public'));
app.set("view engine", "ejs");
app.set('views', 'public/views');


app.get('/', function (req, res) {
    res.render('index');
});

app.get('/about', function (req, res) {
    res.sendFile(path.resolve(__dirname) + "/view/about.html");
});


const products = require('./products');
app.use('/products', products);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Listening on port ' + PORT));  