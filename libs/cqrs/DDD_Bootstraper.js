/**
 * initizlize all the DDD related components:
 *
 * register all the event controllers and command controllers
 *
 */

var Gate = require('./DomainGate.js');
var EventBus = require('./EventBus.js');

/**
 * init command handlers
 */
module.exports.bootstrap=function(){
    require('../membership/domain/CommandHandlers.js').forEach(
        function(handler){
            Gate.registerCommandHandler(new handler());
        }
    );

}

/*
    init event handlers
 */