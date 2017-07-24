var db = require('../config');
var crypto = require('crypto');
var Promise = require('bluebird');



var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  initialize: function() {
    
  }
});

module.exports = User;