//require is in global object
var countModule = require('./count')

console.log(countModule.counter(['napper', 'napster', 'marcus', 'wolf']));
console.log(countModule.adder(1, 87));
console.log(countModule.pi);

//inbuilt core modules shipped with node.js
//event module exports eventemitter
var events = require('events');

var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(message){
    console.log(message);
});

myEmitter.emit('someEvent', 'the event was emitted');


// utility module lets you do many things one is it allows to inherit nodejs object
var util = require('util');
var Person = function(name){
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var wolf = new Person('wolf');

var people = [james, mary, wolf];

people.forEach(function(person){
    person.on('speak', function(message){
        console.log(person.name + ' said: ' + message);
    });
});


james.emit('speak', 'hey dudes');
mary.emit('speak', 'hey dudes? really?');
wolf.emit('speak', 'aaaaaaaaoooooooouuuuu');
james.emit('speak', 'ohhhh yeah!!!!');