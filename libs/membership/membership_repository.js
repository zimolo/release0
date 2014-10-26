/**
 * Created by tyler on 10/26/2014.
 */
//repository is a pattern to seperate the object persistence logics from application layer
var User=require('./user.js');

module.exports.find_one_user=function(options,callback){
    User.findOne(options,callback);
}

module.exports.save_user=function(newuser,callback){
    newuser.save(callback);
}