## v0.3.0
#### Features
* add function isNumber()
* **getType():** now detects Infinite and NaN

#### Breaking Changes
* **getType():** now returns the type in lower case without the part ‘[object]‘

### v0.2.5
#### Features
* add break condition to forEach function

### v0.2.4
#### Features
* add function arrayHasItem(array, item) to check if an array contains the given item.

### v0.2.3
#### Features
* add function for getting a TypeError with a message.

### v0.2.2
#### Features
* function isEmpty() now only checks length for arrays and objects. Functions now return always true.

### v0.2.1
#### Features
* add function getType() to get the full type of the value (e.g. getType(null) === '[object Null]')

## v0.2.0
#### Features
* add zip file in dist folder containing the debug and min version of lx-helpers
* add function isEmpty() to check if the given value has no items/keys
* add function isArray() to check if the given value is an array
* add function isObject() to check if the given value is an object
* add function isFunction() to check if the given value is a function
* add function isDate() to check if the given value is a date
* add function forEach() to iterate over array, objects or functions
* update devDependencies

## v0.1.0 project initial