const express = require('express');
// const firebase = require('firebase');
const bodyParser = require('body-parser');

//Connect to database
require('./config/client');

const app = express();

const PORT = 5000;



  
app.listen(PORT, () => {
    console.log(`Application started on port ${PORT}`)
})