const express = require('express');
const path = require('path');
const ejs = require('ejs');
const Post = require('./models/Post');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// connect to mongoDB
mongoose.connect('mongodb://localhost/cleanBlog-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//TEMPLATE ENGINE
app.set('view engine', 'ejs');
// MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Routes
// get
app.get('/', async (req, res) => {
  const post = await Post.find();
  res.render('index', { post });
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
// post
app.post('/post', async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server started ${port}`);
});
