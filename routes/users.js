var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', function(req, res, next) {
  res.render('register',{
    title: 'Register'
  });
});

router.get('/login', function(req, res, next) {
  res.render('login',{
    title: 'Login'
  });
});

router.post('/users/register',function(req, res, next){
  // Get Form Values
  var name = req.body.name;
  var email = req.body.email;
  var username = req.body.username;
  var password = req.body.password;
  var password2 = req.body.password2;
  
  // Check for Image Field
  if(req.files.profile_image){
    console.log('Uploading File...');
    // File Info
    var profile_image_original_name = req.files.profile_image.original_name;
    var profile_image_name          = req.files.profile_image.name;
    var profile_image_mime          = req.files.profile_image.mimetype;
    var profile_image_path          = req.files.profile_image.path;
    var profile_image_ext           = req.files.profile_image.extension;
    var profile_image_size          = req.files.profile_image.size;
  } else {
    // Set a Default Image
    var profile_image_name = 'no_image.png';
  }
  
  // Form Validation
  req.checkBody('name');

});


module.exports = router;