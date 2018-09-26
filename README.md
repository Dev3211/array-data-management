# array-data-management

It can manage your data by using an array, it can also save your array data permanently in a JSON file and get it.

## Installation

npm install @dev3211/array-data-management

npm install fs-extra

npm install system-sleep

## Usage

var grab = require('@dev3211/array-data-management');

var processarray = grab.arr

var getarray = grab.getdata

var array = ['hey', 'one', 'two', 'three']; //small array

processarray(array, 'well');

var test = getarray('well');

console.log(test[0]) //hey

## Tests

  `npm test`
  
## Contributing

You are free to contribute if you experience any bugs, it would be appreciated for sure.
