/**
 *
 * stores definitions of all the MongoDB documents
 */

var mongoose = require('mongoose');
var Schema=mongoose.Schema;


var schem = new Schema({
    username: String,
    firstname: String,
    lastname: String,
    email: String,
    psw: String},{collection:'user'});
module.exports=mongoose.model('user',schem);