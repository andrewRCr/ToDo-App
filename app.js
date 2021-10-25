// Andrew Creekmore
// CS 361 
// Fall 2021

// SETUP AND ROUTING
require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
var exphbs = require('express-handlebars');     // Import express-handlebars
app.engine('.hbs', exphbs({                     // Create an instance of the handlebars engine to process templates
    extname: ".hbs"
}));

// handle JSON and form data
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// use Heroku-defined port
const port = process.env.PORT || 3000;

// set public folder and templating engine
app.use(express.static('public'));
app.set('view engine', '.hbs');

// define default route
app.get('/', (req, res) => res.render('index'))

require("./app/routes/entry.routes.js")(app);


app.listen(port, () => console.log(`App listening at http://localhost:${port}; ctrl + C to stop.`));