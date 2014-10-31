
var handler = function(commandname) {
	this.commandname=commandname;
}

handler.prototype.handle=function(command,callback){
	throw 'BaseCommandHandler.handle() not implemented';
}

module.exports = handler;