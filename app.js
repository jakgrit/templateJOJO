const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);


const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const port = 6969;

mongoose.connect('mongodb://localhost:27017/project01');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req, res) => {
    res.render('login');
});


app.use('/login', require('./routes/login'));


http.listen(port, function() {
    console.log('PornChai '+port+' at '+new Date());
});
