"use strict";

var fs = require('fs-extra');
var sleep = require('system-sleep')


async function checkarrlength(array) {
	let count = 0;
	if (!Array.isArray(array)) {
		throw new Error("are you sure you are adding an array?");
	} else {
		for (var i = 0, len = array.length; i < len; i++) {
			count++;
		}
		return count;
	}
}

async function processarr(arr, name) {
	if (!name) throw new Error("Name parameter is empty");
	if (!Array.isArray(arr)) {
		throw new Error("are you sure you are adding an array?");
	} else {
		if (checkarrlength(arr) >= 100) {
			var data1 = [];
			while (checkarrlength(arr)) {
				data1.push(arr.splice(0, 10));
			}
			const exists = await fs.pathExists('./data/' + name + '.json');
			if (!exists) {
				fs.createFile('./data/' + name + '.json').then(() => {
					console.log('created file')
				}).catch(err => {
					console.error(err)
				});
			}
			const json = {
				data: data1
			};
			fs.writeJson('./data/' + name + '.json', json).then(() => {
				console.log("Converted your large array into chunks and saved")
			}).catch(err => {
				console.error(err)
			});
		} else {
			const exists = await fs.pathExists('./data/' + name + '.json');
			if (!exists) {
				fs.createFile('./data/' + name + '.json').then(() => {
					console.log('created file')
				}).catch(err => {
					console.error(err)
				});
			}
			const json = {
				data: arr
			};
			fs.writeJson('./data/' + name + '.json', json).then(() => {
				console.log('Successfully saved the array')
			}).catch(err => {
				console.error(err)
			});
		}
	}
}


async function getdata(name) {
	sleep(1000) //so that when you use processarr and getdata together, it can wait and grab data after processarr finishes
	const exists = await fs.pathExists('./data/' + name + '.json');
	if (exists) {
		const obj = fs.readJson('./data/' + name + '.json', { throws: false }).then(data => {
			console.log(data.data);
			return data.data;
		}).catch(err => {
			console.error(err)
		});
	} else {
		throw new Error("File does not exist")
	}
}


module.exports = {
	arr: processarr,
	getdata: getdata
}
