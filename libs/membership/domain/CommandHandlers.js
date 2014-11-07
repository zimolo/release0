/**
 * Created by tyler on 10/30/2014.
 */
var baseEventHandler = require('../../cqrs/BaseCommandHandler.js');
var repo=require('../infrastracture/membership_repository.js');
var util=require('util');
module.exports=[
    (function() {
        var command=function() {
            command.super_.call(this, 'UserUpdateCommand');
        };
        util.inherits(command, baseEventHandler);
        command.prototype.handle = function (command, callback) {
            /**
             * here you put the code to load your domain model, ex, User
             * from database using Repository, then update the model, ex,
             * change user property based on the command properties. for example,
             * UserUpdateCommand has properties firstname and lastname.
             */
            repo.update_user(command.uname,command.newFirstName,command.newLastName,function(err,user){
                callback(err);
            })
        };
        return command;
    })()/*,
    function(){
        command2 definition
    },
    function(){
        command3 definition
    }*/
];