/**
 * unit testing of domain gate
 */
var assert = require('assert');
var baseEventHandler = require('../libs/cqrs/BaseCommandHandler.js');
var baseCommand = require('../libs/cqrs/BaseCommand.js');
var gate = require('../libs/cqrs/DomainGate.js');
var util = require('util');




//===============MOCK command
/**
 * in each domain directory, one commands.js module returns all the command objects
 */
var COMM1=function(data1,data2){
	this.data1=data1;
	this.data2=data2;
	COMM1.super_.call(this,'COMM1');
}
util.inherits(COMM1,baseCommand);

var COMM2=function(data1){
	this.data1=data1;
	COMM2.super_.call(this,'COMM2');
}
util.inherits(COMM2,baseCommand);

//===============MOCK command handler
/**
 * in each domain directory, one commandhandlers.js module returns all the command handlers
 */
var COMM1Handler=function(){
	COMM1Handler.super_.call(this,'COMM1');
};
util.inherits(COMM1Handler,baseEventHandler);
COMM1Handler.prototype.handle=function(command,callback){
    assert.equal(command.data1,'data1');
    assert.equal(command.data2,'data2');
    callback('suc');
}

var COMM2Handler=function(){
	COMM2Handler.super_.call(this,'COMM2');
};
util.inherits(COMM2Handler,baseEventHandler);
COMM2Handler.prototype.handle=function(command,callback){
	assert.equal(command.data1,'data1');
    callback('err');
}

//=========init
gate.registerCommandHandler(new COMM1Handler());
gate.registerCommandHandler(new COMM2Handler());



//==============test cases

describe('test commandGate',function(){
    var obj;

    before(function(done){
        done();
    });

    it('command1 executed successfully',function(){
        
    	gate.dispatch(new COMM1('data1','data2'),function(status){
            assert.equal(status,'suc');
        });

    });
    it('command2 executed successfully',function(){

        
    	gate.dispatch(new COMM2('data1'),function(status){
            assert.equal(status,'err');

        });

    });
});
 
 