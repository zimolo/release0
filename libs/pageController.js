/**
 * Created by tyler on 10/25/2014.
 */
var express = require('express');
var router = express.Router();

/**
 * all the routes for the page redirection
 */
var util=require('./util.js');


module.exports = function(passport) {
    router.get('/', function (req, res) {
        res.render('home');
    });

    router.get('/signup', function (req, res) {
        res.render('signUp',{message: req.flash('message')});
    });

    router.get('/test', util.isAuthenticated,function(req, res){
        res.render('test');
    });

    router.get('/thumbnail', util.isAuthenticated,function (req, res) {
        res.render('thumbnail');
    });

    router.get('/dash', util.isAuthenticated, function (req, res) {
        res.render('dash');
    });

    router.get('/forget', function (req, res) {
        res.render('forgetPassword');
    });
    return router;
}



