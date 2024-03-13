const express = require('express');
const morgan = require('morgan');
require('dotenv').config(); // Load enviroment variable from a .env file
const PORT = process.env.PORT || 3000;

const app = express();

// HTTP request logging Middleware with Morgan
app.use(morgan('dev'));

// Set up Middleware to serve static files from the 'public' folder
app.use(express.static('public'));

// Define routes for different pages
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/galeria', (req, res) => {
    res.sendFile(__dirname + '/public/contacto.html');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});