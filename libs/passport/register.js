/**
 * Created by tyler on 10/25/2014.
 */
var LocalStrategy   = require('passport-local').Strategy;
var Repository = require('../membership/infrastracture/membership_repository.js');
var User = require('../membership/domain/user.js');

module.exports = function(passport){

    passport.use('registerstrategy', new LocalStrategy({
                passReqToCallback : true
            },
            function(req, username, password, done) {
                // check in mongo if a user with username exists or not
                console.log('asldkjsalkdjsad');
                Repository.find_one_user({ 'username' :  username },
                    function(err, user) {
                        // In case of any error, return using the done method
                        if (err)
                            return done(err);
                        // Username does not exist, log the error and redirect back
                        if (user){
                            console.log('User already exists with username '+username);
                            return done(null, false, req.flash('message', 'User exists.'));
                        }
                        var newuser=new User();
                        newuser.username=username;
                        newuser.psw=password;
                        newuser.email=req.param('email');
                        newuser.firstname=req.param('firstname');
                        newuser.lastname=req.param('lastname');
                        Repository.save_user(newuser,function(err) {
                            if (err){
                                console.log('Error in Saving user: '+err);
                                throw err;
                            }
                            console.log('User Registration succesful');
                            return done(null, newuser);
                        });
                        return done(null, newuser);
                    }
                );

            })
    );



}