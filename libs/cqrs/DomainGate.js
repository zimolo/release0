/**
 * Domain Gate is the entry point from application layer to the domian layer
 * It accepts various commands and dispatch them to corresponding command handler
 * 
 */

var gate = (function() {
	var _this = {},
		_commandHandlers = {}; //{eventclass:handler,eventclass:handler,..........}

	_this.registerCommandHandler = function(handler) {
		_commandHandlers[handler.commandname]=handler;
	};

	_this.dispatch = function(command,callback) {
		var handler=_commandHandlers[command.name];
		handler.handle(command,callback);
	};

	return _this;
})();

module.exports = gate;