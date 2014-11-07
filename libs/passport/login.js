/**
 * Created by tyler on 10/25/2014.
 */
var LocalStrategy   = require('passport-local').Strategy;
var Repository = require('../membership/infrastracture/membership_repository.js');

module.exports = function(passport){

    passport.use('loginstrategy', new LocalStrategy({
                passReqToCallback : true
            },
            function(req, username, password, done) {
                console.log('asldkjsalkdjsad');

                // check in mongo if a user with username exists or not
                func=function() {
                    console.log('asldkjsalkdjsad');
                    Repository.find_one_user({ 'username': username },
                        function (err, user) {
                            // In case of any error, return using the done method
                            if (err)
                                return done(err);
                            // Username does not exist, log the error and redirect back
                            if (!user) {
                                console.log('User Not Found with username ' + username);
                                return done(null, false, req.flash('message', 'User Not found.'));
                            }
                            // User exists but wrong password, log the error
                            if (!user.passwordMatch(password)) {
                                console.log('Invalid Password');
                                return done(null, false, req.flash('message', 'Invalid Password')); // redirect back to login page
                            }
                            // User and password both match, return user from done method
                            // which will be treated like success
                            return done(null, user);
                        }
                    );
                };

                // Delay the execution of findOrCreateUser and execute
                // the method in the next tick of the event loop
                process.nextTick(func);

            })
    );



}