'use strict';

var data = require('../index.js');
var processarray = data.arr
var getarray = data.getdata

var array = ['hey', 'one', 'two', 'three']; //small array

var large = []; //large array with 500 elements 

for (var i = 0; i < 500; i++) large[i] = i; //add 500 elements


processarray(array, 'well');
processarray(large, 'ok');

//it can also overwrite data if your array changes

//accessing your array data

var test = getarray('well');

console.log(test[0])

var test1 = getarray('ok');
console.log(test1[0][5]); //acts like a multi dimensional array, [the array line to access], [array index of that line]

