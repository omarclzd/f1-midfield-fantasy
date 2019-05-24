var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatar: String,
  googleId: String,
  teams: [{type: Schema.Types.ObjectId, ref: 'Team'}]
}, {
  timestamps: true 
});

module.exports = mongoose.model('User', userSchema );