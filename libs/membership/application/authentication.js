/**
 * Created by tyler on 10/25/2014.
 */
var express = require('express');
var router = express.Router();

/**
 * all the routes for authentication
 */
module.exports=function(passport) {
    router.post('/login',
        passport.authenticate('loginstrategy', {
            failureRedirect: '/auth/loginFailure',
            successRedirect: '/dash'
        })
    );

    router.post('/register',
        passport.authenticate('registerstrategy', {
            successRedirect: '/dash',
            failureRedirect: '/signup',
            failureFlash : true
        }));
    router.get('/logout',function(req, res){
            req.session.destroy();
            req.logout();
            res.redirect('/');
        }
    );

    router.get('/loginFailure', function (req, res, next) {
        res.send('Failed to authenticate!');
    });

    router.get('/loginSuccess', function (req, res, next) {
        res.send('Successfully authenticated');
    });
    return router;
}