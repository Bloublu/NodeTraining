// declaration constantes et import
const express = require('express');
const app = express();
const session = require('express-session');
const port = 24;


//Parametres
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.static(__dirname + '/public'));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}));
app.set('view engine', 'ejs');



// Routes
app.get('/', (req, res) => {
    if (!req.session.tasks){
        req.session.tasks = [];
    } 
    res.render('todolist', {tasks: req.session.tasks.sort(((a, b) => Number(a.done) - Number(b.done)))});
});

app.post('/task', (req, res) => {
    if(req.body.task){
        req.session.tasks.push({
            title: req.body.task,
            done: false,
        });
    }
    res.redirect('/');
});

app.get('/task/:id/done', (req, res) => {
        if(req.session.tasks[req.params.id]) {
                req.session.tasks[req.params.id].done = true;
        }   
        res.redirect('/'); 
     
        
});

app.get('/task/:id/delete', (req, res) => {
    if(req.session.tasks[req.params.id]) {
        req.session.tasks.splice(req.params.id, 1);
    }   
    res.redirect('/');
});

app.get('/task/:id/cancel', (req, res) => {
    if(req.session.tasks[req.params.id]) {
        req.session.tasks[req.params.id].done = false;
    }
    res.redirect('/');
});

app.listen(port, (req, res) => {
   console.log(`Server lancé sur le port ${port}`);
});

