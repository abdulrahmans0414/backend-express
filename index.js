import { render } from 'ejs';
import express from 'express';
import path from 'path';

const app = express();

const users = [];

// settings up view engine
app.set('view engine', 'ejs');

// statisify data 
// express.static(path.join(path.resolve(),'public'));

// middleware setup
app.use(express.static(path.join(path.resolve(), 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', { name: "Abdul Rahman" });
    // res.sendFile("index.html");
})

// message comformation that data are save
app.get('/success', (req, res) => {
    res.render('success',)
})

// Create data from 
app.post('/contact', (req, res) => {
    users.push({ username: req.body.name, email: req.body.email, password: req.body.password })
    res.redirect('/success');
})

// user save information
app.get('/users', (req, res) => {
    res.json({
        users
    })
})

app.listen(5000, () => {
    console.log(`listening on http://localhost:${5000}`);
})
