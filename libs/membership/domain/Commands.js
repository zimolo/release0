/**
 * Created by tyler on 10/30/2014.
 */
var baseCommand = require('../../cqrs/BaseCommand.js');
var util=require('util');
var UserUpdateCommand=function(uname,ln,fn){
    this.uname=uname;
    this.newLastName=ln;
    this.newFirstName=fn;
    UserUpdateCommand.super_.call(this,'UserUpdateCommand');
}
util.inherits(UserUpdateCommand,baseCommand);
module.exports.UserUpdateCommand=UserUpdateCommand;

/**
module.exports= definition of other commands
 */