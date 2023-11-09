// Create web server
// 1. Load modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Comment = require('./models/comment');

// 2. Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/comment', {useNewUrlParser: true});

// 3. Create web server
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// 4. Create router
// 4-1. Create comment
app.post('/comments', function(req, res) {
    Comment.create({