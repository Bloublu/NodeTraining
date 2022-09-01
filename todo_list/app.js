const express = require('express');
const app = express();
const port = 3000;

const tasks = [
    {
        title: "apprendre Nodejs",
        done: false,
    },
    {
        title: "faire les courses",
        done: true,
    }
];

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('todolist', {tasks: tasks});
});

app.post('/task', (req, res) => {
    tasks.push({
        title: req.body.task,
        done: false,
    });
    res.redirect('/');
});

app.listen(port, (req, res) => {
   console.log(`Server lancé sur le port ${port}`);
});