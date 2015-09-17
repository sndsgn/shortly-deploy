var mongoose = require('mongoose');
var path = require('path');

var db = mongoose.createConnection('mongodb://127.0.0.1/shortlydb');

db.urlsSchema = mongoose.Schema({
      url: String,
      base_url: String,
      code: String,
      title: String,
      visits: {type: Number, default: 0},
      timeStamp: {type: Date, default: Date.now}
});

// db.collection('urls', function(error, collection) {
//   if(error) {
//     //create collection with mongoose
//     console.log('Created collection', collection);
//   } else {
//     console.log('Collection ' + 'urls does not exist.');
//   }
// });

// //BOOKSHELF CODE
// db.knex.schema.hasTable('urls').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('urls', function (link) {
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });


db.usersSchema = mongoose.Schema({
      username: String,
      password: String,
     timeStamp: {type: Date, default: Date.now}   
});

// db.collection('users', function(error, collection) {
//   if(error) {
//     //create collection with mongoose
//     console.log('Created collection', collection);
//   } else {
//     console.log('Collection ' + 'users does not exist.');
//   }
// });

// db.knex.schema.hasTable('users').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('users', function (user) {
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

module.exports = db;
