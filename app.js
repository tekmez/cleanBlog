const express = require('express');
const path = require('path');
const postController = require('./controllers/postController');
const pageController = require('./controllers/pageController');
const ejs = require('ejs');
const Post = require('./models/Post');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
const port = process.env.PORT || 5000;

// connect to mongoDB
mongoose.connect(
  'mongodb+srv://agenor:stekast33@cleanblog.tuwdz.mongodb.net/cleanBlog-db?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

// MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method', { methods: ['POST', 'GET'] }));

// Routes
app.get('/', postController.getAllPosts);
app.get('/post/:id', postController.getPost);
app.get('/post/edit/:id', postController.getEditPost);
app.get('/about', pageController.getAboutPage);
app.get('/add_post', pageController.getAddPage);
app.post('/post', postController.createPost);
app.put('/post/:id', postController.updatePost);
app.delete('/post/:id', postController.deletePost);

app.listen(port, () => {
  console.log(`Server started ${port}`);
});
