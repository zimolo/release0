/**
 * Base class of aggregation root
 */
var handler = function(n,events) {
	this.name=n;
	this.handemethod_prefix='H_'
	/**
	 * if interstedEvnets={'productAdded','productDeleted'}
	 * then handler class MUST have methods:
	 * H_productAdded and H_productDeleted
	 */
	this.interestedEvents=events;
}

handler.prototype.canHandle=function(event){
	return event.name in this.interestedEvents;
}
handler.prototype.handle=function(event){
	var handlefunc=this[event.name];
	handlefunc(event.data);
}
module.exports = handler;