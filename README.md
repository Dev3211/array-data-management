# array-data-management

It can manage your data by using an array, it can also save your array data permanently in a JSON file and get it.

## Installation

npm install array-management

npm install fs-extra

npm install system-sleep

## Usage

```
var grab = require('array-management');

var processarray = grab.arr

var getarray = grab.getdata

var array = ['hey', 'one', 'two', 'three']; //small array

processarray(array, 'well');

var test = getarray('well');

console.log(test[0]) //hey
```

## Tests

  `npm test`
  
## Contributing

You are free to contribute if you experience any bugs, it would be appreciated for sure.

## Useful features:

1. Add data faster than ever 

2. Format and optimize larger arrays 

3. Get data faster than ever 

4. Take up less space 

5. Create JSON files to store your array data


6. Can process up larger/smaller arrays in a short-span of time along with file creation

7. Handles your data correctly and does not mess it up
