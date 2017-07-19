module.exports.counter = function(arr){
    return 'There are ' + arr.length + ' elements in this array';
};

module.exports.adder = function(num1, num2){
    //`(backtick is for template string)
    return `The sum of the two number is ${num1 + num2}`;
}

var pi = 3.142;
 
module.exports.pi = pi;