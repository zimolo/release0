/**
 * initizlize all the DDD related components:
 *
 * register all the event controllers and command controllers
 *
 */

var Gate = require('./DomainGate.js');
var EventBus = require('./EventBus.js');
var config = require('./DDD_Bootstraper_config.js');

module.exports.bootstrap=function(){
    config.forEach(
        function(entry){
            require(entry.CommandHandler).forEach(
                function(handler){
                    Gate.registerCommandHandler(new handler());
                }
            );


        }

    );


}

/*
 init event handlers
 */