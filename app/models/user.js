var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');


var User = mongoose.model('User', usersSchema);


usersSchema.methods.initialize = function(){
    this.on('creating', this.hashPassword); //NEED TO RESEARCH EVENT TRIGGERS 
  };

usersSchema.methods.comparePassword = function(attemptedPassword, callback) {
    bcrypt.compare(attemptedPassword, this.get('password'), function(err, isMatch) {
      callback(isMatch);
    });
  };

usersSchema.methods.hashPassword = function(){
    var cipher = Promise.promisify(bcrypt.hash);
    return cipher(this.get('password'), null, null).bind(this)
      .then(function(hash) {
        this.set('password', hash);
      });
  };

//Extend teh model with specific methods/statics 
//to hash the password and compare the password to the stored hash version



//EVERYTHING BELOW IS OLD CODE FROm PREVIOUS SPRINT

// var User = db.Model.extend({
//   // tableName: 'users',
//   // hasTimestamps: true,
//   // initialize: function(){
//   //   this.on('creating', this.hashPassword);
//   // },
//   // comparePassword: function(attemptedPassword, callback) {
//   //   bcrypt.compare(attemptedPassword, this.get('password'), function(err, isMatch) {
//   //     callback(isMatch);
//   //   });
//   // },
//   // hashPassword: function(){
//   //   var cipher = Promise.promisify(bcrypt.hash);
//   //   return cipher(this.get('password'), null, null).bind(this)
//   //     .then(function(hash) {
//   //       this.set('password', hash);
//   //     });
//   // }
// });

module.exports = User;
