
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
    return this.interestedEvents.indexOf(event.name)>=0;
}
handler.prototype.handle=function(event){

    var handlefunc=this[this.handemethod_prefix+event.name];
    handlefunc(event.data);
}
module.exports = handler;