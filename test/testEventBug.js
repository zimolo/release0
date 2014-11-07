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
var productDelEvent=new domainEvent('productDeledEvent','productdeled');

//==============MOCK product eventHandler
//==========definition
var ProductEventHandler=function(){
    this.message='dummy message';
    ProductEventHandler.super_.call(this,'producteventhandler',['productAddedEvent','productDeledEvent']);
};
util.inherits(ProductEventHandler,baseEventHandler);
ProductEventHandler.prototype.H_productAddedEvent=function(data){
    this.message=data;
    assert.equal(this.message,'productadded');
}
ProductEventHandler.prototype.H_productDeledEvent=function(data){
    this.message=data;
    assert.equal(this.message,'productdeled');
}
util.inherits(Product, baseAggrRoot);
//=========init
productEventHandler=new ProductEventHandler();

EventBus.registerEventHandler(productEventHandler);




//==============test cases

describe('test event bus',function(){
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
    it('test publish product add event successfully',function(){

        EventBus.publish(productAddedEvent);

    });
    it('test publish product del event successfully',function(){


        EventBus.publish(productDelEvent);

    });
});

