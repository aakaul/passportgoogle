
/*jshint esversion: 6 */

const router = require('express').Router();
const passport = require('passport');

//auth login
router.get('/login',(req,res) => {
  res.render('../templetes/login.ejs', {user: req.user });
});

// auth logout

router.get('/logout',function (req,res) {
//handle with passport
res.send('logging out');
});

// auth with google

router.get('/google',passport.authenticate('google',{
  scope: ['profile']
}));

// callback route for google to redirect to
router.get('/google/redirect', (req, res) => {
    res.send('you reached the redirect URI');
});

module.exports = router;
