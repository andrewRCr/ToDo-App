// Andrew Creekmore
// CS 361 
// Fall 2021

// setup and routing
const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(express.static('public'));
app.set('view engine', 'ejs');

// define default route
app.get('/', (req, res) => res.render('index'))

app.listen(port, () => console.log(`App listening at http://localhost:${port}; ctrl + C to stop.`));


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