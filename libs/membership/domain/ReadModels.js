/**
 * Created by tyler on 10/30/2014.
 */
/*
this is the read part of Command Query Resibonsibility Seperation.
It only responsible for reading and returning data
 */

var repo=require('../infrastracture/membership_repository.js');

module.exports.readAllUsers=function(callback){
    //seems like redundant to put this logic into an extra layer ha?
    //logics in this layer can grow more and more complex, for example,
    //not only read data from repository, but also  optimize the data
    //formate to return just-enough data.
    repo.find_all_user(callback);
}