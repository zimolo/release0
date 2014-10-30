/**
 * unit testing of even bus
 */
var assert = require('assert');

var baseAggrRoot = require('../libs/cqrs/BaseAggrRoot.js');
var baseEventHandler = require('../libs/cqrs/BaseEventHandler.js');
var domainEvent = require('../libs/cqrs/DomainEvent.js');
var EventBus = require('../libs/cqrs/EventBus.js');
var util = require('util');


//==========MOCK product aggregation root
var Product=function() {
    this.name='';
    this.quantity=0;
};
Product.prototype.add=function(){
    this.quantity+=1;
}
util.inherits(Product, baseAggrRoot);
//========================


//===============MOCK domain event
var productAddedEvent=new domainEvent('productAddedEvent','productadded');

//==============MOCK product eventHandler
var ProductEventHandler=function(events){
    this.message='dummy message';
    baseAggrRoot.call(this,'producteventhandler',events);
};
util.inherits(ProductEventHandler,baseEventHandler);
ProductEventHandler.prototype.H_productAddedEvent=function(data){
    this.message=data;
}

util.inherits(Product, baseAggrRoot);

productEventHandler=new ProductEventHandler(['productAddedEvent']);





//==============test cases

describe('Creating a obj',function(){
    var obj;

    before(function(done){
        done();
    });

    it('product should be instance of aggregate root',function(){
        assert.equal(Product.super_, baseAggrRoot);
    });
    it('test productAddedEvent should be created correctly',function(){
        assert.equal(productAddedEvent.name, 'productAddedEvent');
    });
    it('test register eventhandler successfully',function(){
        EventBus.registerEventHandler(productEventHandler);
        EventBus.publish(productAddedEvent);

        assert.equal(productEventHandler.message, 'productadded');
    });
});
 
 