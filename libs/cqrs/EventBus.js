/**
 * event bus coordinates all the domain event handlings
 * thoughout all the bounded contexts
 */

var eventBus = (function() {
    var _this = {},
        _eventHandlers = [];

    _this.registerEventHandler = function(eventHandler) {
        _eventHandlers.push(eventHandler);
    };

    _this.publish = function(domainEvent) {
        _eventHandlers.forEach(function(eventHandler) {
            if(eventHandler.canHandle(domainEvent)){
                process.nextTick(function() {
                    eventHandler.handle(domainEvent);
                });
            }
        });
    };

    return _this;
})();

module.exports = eventBus;