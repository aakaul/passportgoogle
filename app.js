/*jshint esversion: 6 */
const express = require('express');

//import routes to the app.js file
const authRoutes = require('C:/Users/Adarsh/Documents/mysites/nodejs/passport.js/routes/auths-routes.js');

//link and run passport-auth fil
const passportSetup = require('C:/Users/Adarsh/Documents/mysites/nodejs/passport.js/config/passport-setup.js');

const app = express();

//set view engine

app.set('view engine', 'ejs');

// set up authRoutes
app.use('/auth', authRoutes );

//create a simple route for home

app.get('/', (req,res) => {
  res.render('../templetes/home.ejs');
});

// listen

app.listen(3000, function () {
  console.log('connected to port 3000');
});
