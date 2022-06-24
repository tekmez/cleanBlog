const express = require('express');
const path = require('path');
const ejs = require('ejs');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/index', (req, res) => {
  res.render('index');
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/add_post', (req, res) => {
  res.render('add_post');
});
app.get('/post', (req, res) => {
  res.render('post');
});

app.listen(port, () => {
  console.log(`Server started ${port}`);
});
