//MongoDB PW:FDSlk3sa
//MongoDB connection:mongodb+srv://Lopez:<password>@cluster0.vshxc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const express = require('express');
const bodyParser = require('body-parser');
//const mongoose = require('mongoose');
const path = require('path');
const db = require('./config/db.config');



require('dotenv').config();

const postRoutes = require('./routes/post');
const sauceRoutes = require('./routes/sauce');
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');

const app = express();

// mongoose.connect(`mongodb+srv://${process.env.User}:${process.env.Password}@cluster0.vshxc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
//   .then(() => {
//     console.log('Successfully connected to MongoDB Atlas!');
//   })
//   .catch((error) => {
//     console.log('Unable to connect to MongoDB Atlas!');
//     console.error(error);
//   });

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.use(bodyParser.json());
  db.authenticate().then( () =>console.log("Data  Base Connected !")).catch((err) => console.log(err));

  app.use('/images', express.static(path.join(__dirname, 'images')));
  
  app.use('/api/post', postRoutes);
  app.use('/api/sauces', sauceRoutes);
  //app.use('/api/stuff', stuffRoutes);
  app.use('/api/auth', userRoutes);

module.exports = app;