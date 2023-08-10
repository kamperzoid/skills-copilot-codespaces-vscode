// Create web server

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Create a route
// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

// Create a route
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Members API routes
app.use('/api/members', require('./routes/api/members'));

// Listen on port
app.listen(port, () => console.log(`Server started on port ${port}`));