// Andrew Creekmore
// CS 361 
// Fall 2021

// SETUP AND ROUTING
const express = require('express');
const bodyParser = require("body-parser");
const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT;

app.use(express.static('public'));
app.set('view engine', 'ejs');

// define default route
app.get('/', (req, res) => res.render('index'))

require("./app/routes/entry.routes.js")(app);

app.listen(port, () => console.log(`App listening at http://localhost:${port}; ctrl + C to stop.`));

// MICROSERVICE - DATABASE + REST API

// CREATE TABLE IF NOT EXISTS `customers` (
//     id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
//     email varchar(255) NOT NULL,
//     name varchar(255) NOT NULL,
//     active BOOLEAN DEFAULT false
//   ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
  


// TODO APP

// array to hold task items
let tasks = [];

// creates new task using text entered into text input + adds it to 'tasks' array
function addTask(text) {
    const task = {
        text,
        checked: false,
        // create unique yet arbitrary id value
        id: Date.now(),
    };

    tasks.push(task);
    console.log(tasks);
}