# lx-helpers [![Build Status](https://travis-ci.org/litixsoft/lx-helpers.png?branch=master)](https://travis-ci.org/litixsoft/lx-helpers) [![david-dm](https://david-dm.org/litixsoft/lx-helpers.png)](https://david-dm.org/litixsoft/lx-helpers/) [![david-dm](https://david-dm.org/litixsoft/lx-helpers/dev-status.png)](https://david-dm.org/litixsoft/lx-helpers#info=devDependencies&view=table)

Litixsoft helper functions for Javascript (client and server).

## Getting Started

### Install:

[![NPM](https://nodei.co/npm/lx-helpers.png??downloads=true&stars=true)](https://nodei.co/npm/lx-helpers/)

## Documentation
[http://www.litixsoft.de/products-lxhelpers](http://www.litixsoft.de/products-lxhelpers) (german)

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](http://gruntjs.com/).

## Release History
### v0.2.5
* add break condition to forEach function

### v0.2.4
* add function arrayHasItem(array, item) to check if an array contains the given item.

### v0.2.3
* add function for getting a TypeError with a message.

### v0.2.2
* function isEmpty() now only checks length for arrays and objects. Functions now return always true.

### v0.2.1
* add function getType() to get the full type of the value (e.g. getType(null) === '[object Null]')

### v0.2.0
* add zip file in dist folder containing the debug and min version of lx-helpers
* add function isEmpty() to check if the given value has no items/keys
* add function isArray() to check if the given value is an array
* add function isObject() to check if the given value is an object
* add function isFunction() to check if the given value is a function
* add function isDate() to check if the given value is a date
* add function forEach() to iterate over array, objects or functions
* update devDependencies

### v0.1.0 project initial

## Author
[Litixsoft GmbH](http://www.litixsoft.de)

## License
Copyright (C) 2013 Litixsoft GmbH <info@litixsoft.de>
Licensed under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.