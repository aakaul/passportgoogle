/*jshint esversion: 6 */

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys.js');

passport.use(
  new GoogleStrategy({
    //options for the google start

    clientID: keys.google.clientID,
    clientSceret: keys.google.clientSceret,
  callbackURL:'/auth/google/redirect'

  }),function () {
    //passport callback function
  }
);
