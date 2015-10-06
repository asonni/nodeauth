var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

mongoose.connect('mongodb://localhost/nodeauth');

var db = mongoose.connection;

// User Schema
var UserSchema = mongoose.Schema({
  username: {
    type: String,
    index: true
  },
  password:{
    type: String,
    required: true,
    bcrypt: true
  },
  email:{
    type: String
  },
  name:{
    type: String
  }
  // profileimage:{
  //   type: String
  // }
});

var User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function(newUser,cb){
  bcrypt.hash(newUser.password, 10, function(err, hash){
    if(err) throw err;
    // Set hashed passowrd
    newUser.passowrd = hash;
    // Create User
    newUser.save(cb);
  });
}