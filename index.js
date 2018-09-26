"use strict";

var fs = require('fs-extra');
var sleep = require('system-sleep');
var fs1 = require('fs');


function checkarrlength(array) {
	let count = 0;
	if (!Array.isArray(array)) {
		throw "are you sure you are adding an array?";
	} else {
		for (var i = 0, len = array.length; i < len; i++) {
			count++;
		}
		return count;
	}
}

function processarr(arr, name) {
  if(!name) throw "Name parameter is empty";
	if (!Array.isArray(arr)) {
		throw "are you sure you are adding an array?";
	} else {
		if (checkarrlength(arr) >= 100) {
			var data1 = [];
			while (checkarrlength(arr)) {
				data1.push(arr.splice(0, 10));
			}
			console.log("Converted your large array into chunks and saved")
			if (!fs1.existsSync('./data/' + name + '.json')) {
				fs.createFile('./data/' + name + '.json', function (err) {})
			}
			sleep(1000)
			var json = {
				data: data1
			};
			fs.writeJson('./data/' + name + '.json', json, function (err) {});
		} else {
      console.log("Array saved")
			if (!fs1.existsSync('./data/' + name + '.json')) {
				fs.createFile('./data/' + name + '.json', function (err) {})
			}
			sleep(1000)
			var json = {
				data: arr
			};
			fs.writeJson('./data/' + name + '.json', json, function (err) {});
		}
	}
}


function getdata(name) {
        
	if (fs1.existsSync('./data/' + name + '.json')) {
		sleep(1000)
		var obj = JSON.parse(fs1.readFileSync('./data/' + name + '.json', 'utf8'));
                console.log(obj.data);
		return obj.data;
	} else {
	 throw "File does not exist"
	}
}


module.exports = {
arr: processarr,
getdata: getdata
}