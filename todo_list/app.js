const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('todolist');
});

app.listen(port, (req, res) => {
   console.log(`Server lancé sur le port ${port}`);
});