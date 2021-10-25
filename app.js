// Andrew Creekmore
// CS 361 
// Fall 2021

// SETUP AND ROUTING
require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// use Heroku-defined port
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

// define default route
app.get('/', (req, res) => res.render('index'))

require("./app/routes/entry.routes.js")(app);





app.listen(port, () => console.log(`App listening at http://localhost:${port}; ctrl + C to stop.`));







