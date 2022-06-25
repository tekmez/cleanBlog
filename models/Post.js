const mongoose = require('mongoose');
// schema
const Schema = mongoose.Schema;
// create schema
const postSchema = new Schema({
  title: String,
  description: String,
  dateCreated: { type: Date, default: Date.now },
});
// create model
const Post = mongoose.model('post', postSchema);

module.exports = Post;
