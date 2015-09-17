var db = require('../config');
var crypto = require('crypto');



var Link = mongoose.model('Link', urlsSchema);

urlsSchema.methods.initialize = function(){  //RESEARCH EVENT TRIGGERS
    this.on('creating', function(model, attrs, options){
      var shasum = crypto.createHash('sha1');
      shasum.update(model.get('url'));
      model.set('code', shasum.digest('hex').slice(0, 5));
    });
  };



//EVERYTHING BELOW IS OLD CODE FROm PREVIOUS SPRINT

// var Link = db.Model.extend({
//   // tableName: 'urls',
//   // hasTimestamps: true,
//   // defaults: {
//   //   visits: 0
//   // },
//   // initialize: function(){
//   //   this.on('creating', function(model, attrs, options){
//   //     var shasum = crypto.createHash('sha1');
//   //     shasum.update(model.get('url'));
//   //     model.set('code', shasum.digest('hex').slice(0, 5));
//   //   });
//   // }
// });

module.exports = Link;
