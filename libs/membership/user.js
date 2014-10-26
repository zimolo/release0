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

schem.methods.passwordMatch=function(password){
    //TODO: add encryption logics in here
    return this.psw==password;
}
module.exports=mongoose.model('user',schem);