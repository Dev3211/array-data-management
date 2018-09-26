

"use strict";

var fs = require('fs-extra');
var sleep = require('system-sleep')

var data = []
for (var i = 0; i < 500; i++) data[i] = i;

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
	if (!name) throw "Name parameter is empty";
	if (!Array.isArray(arr)) {
		throw "are you sure you are adding an array?";
	} else {
		if (checkarrlength(arr) >= 100) {
			var data1 = [];
			while (checkarrlength(arr)) {
				data1.push(arr.splice(0, 10));
			}
			if (!fs.pathExists('./data/' + name + '.json')) {
				fs.createFile('./data/' + name + '.json')
			}
			var json = {
				data: data1
			};
			fs.writeJson('./data/' + name + '.json', json)
				.then(() => {
					console.log("Converted your large array into chunks and saved")
				})
				.catch(err => {
					console.error(err)
				})
		} else {
			if (!fs.pathExists('./data/' + name + '.json')) {
				fs.createFile('./data/' + name + '.json')
			}
			var json = {
				data: arr
			};
			fs.writeJson('./data/' + name + '.json', json)
				.then(() => {
					console.log('Successfully saved the array')
				})
				.catch(err => {
					console.error(err)
				})
		}
	}
}


function getdata(name) {
	sleep(1000) //so that when you use processarr and getdata together, it can wait and grab data after processarr first task finishes
	if (fs.pathExists('./data/' + name + '.json')) {
		var obj = fs.readJsonSync('./data/' + name + '.json', {
			throws: false
		})
		console.log(obj.data);
	} else {
		throw "File does not exist"
	}
}


module.exports = {
	arr: processarr,
	getdata: getdata
}
