/**
 * Created by tyler on 10/25/2014.
 */
var express = require('express');
var router = express.Router();
var gate = require('../../cqrs/DomainGate.js');
var commands=require('../domain/commands.js');
var readmodels=require('../domain/readmodels.js');

/**
 * all the routes for authentication
 */
module.exports=function(passport) {
    router.post('/updateuserinfo', function (req, res, next) {
        var username=req.body.username;
        var fn=req.body.firstname;
        var ln=req.body.lastname;
        console.log(req.body);
        console.log('updating user with parameters:'+username+' '+fn+' '+ln);
        var command=new commands.UserUpdateCommand(username,fn,ln);
        gate.dispatch(command,function(err){
            res.send(err);
        });

    });

    router.get('/alluser', function (req, res, next) {
        readmodels.readAllUsers(function(err,users){
            if(err)
                res.send(err);
            else
                res.json(users);
        });
    });
    return router;
}