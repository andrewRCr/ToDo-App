// Andrew Creekmore
// CS 361 
// Fall 2021

// SETUP AND ROUTING
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();
var exphbs = require('express-handlebars');     // import express-handlebars
app.engine('.hbs', exphbs({                     // create instance of handlebars engine
    extname: ".hbs"
}));

// handle JSON and form data
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors());
// enable CORS without external module
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// use Heroku-defined port
const port = process.env.PORT || 3000;

// set public folder and templating engine
app.use(express.static('public'));
app.set('view engine', '.hbs');

// define default route
app.get('/', (req, res) => res.render('index'))

// define all other routes
require("./app/routes/entry.routes.js")(app);


app.listen(port, () => console.log(`App listening at http://localhost:${port}; ctrl + C to stop.`));