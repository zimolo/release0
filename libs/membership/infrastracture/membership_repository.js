/**
 * Created by tyler on 10/26/2014.
 */
//repository is a pattern to seperate the object persistence logics from application layer
var User=require('./../domain/user.js');

module.exports.find_one_user=function(options,callback){
    User.findOne(options,callback);
}

module.exports.find_all_user=function(callback){
    User.find({},callback);
}

module.exports.save_user=function(newuser,callback){
    newuser.save(callback);
}

module.exports.update_user=function(uname,fn,ln,callback){
    User.update({username:uname }, { $set: { firstname: fn, lastname:ln }}, callback);
}