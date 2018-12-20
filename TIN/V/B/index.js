const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/views')));

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
});

app.get('/hello', function (req, res) {
    res.end('Hello world!');
});

app.get('/form', function (req, res) {
    res.sendFile(__dirname + '/views/form.html');
});

app.post('/formdata', function (req, res) {

    if (req.body.last_name === '' || req.body.first_name === '') {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end('Wprowadzono niepoprawne dane');
    } else {
        res.render('formView', {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            town: req.body.town
        });
    }


});

app.listen(8000);
