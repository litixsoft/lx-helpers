/*global describe, expect, it */
'use strict';

var lxHelpers = require('../lib/lx-helpers.js');

var data = [
    {id: 1, name: '1'},
    {id: 2, name: '2'},
    {id: 3, name: '3'}
];

describe('LxHelpers', function () {
    it('has a function getType() which should return the full type of the value', function () {
        expect(lxHelpers.getType([])).toBe('array');
        expect(lxHelpers.getType({})).toBe('object');
        expect(lxHelpers.getType()).toBe('undefined');
        expect(lxHelpers.getType(function () {})).toBe('function');
        expect(lxHelpers.getType(null)).toBe('null');
        expect(lxHelpers.getType(undefined)).toBe('undefined');
        expect(lxHelpers.getType(true)).toBe('boolean');
        expect(lxHelpers.getType(13)).toBe('number');
        expect(lxHelpers.getType(13.99)).toBe('number');
        expect(lxHelpers.getType('asddad')).toBe('string');
        expect(lxHelpers.getType(String('asddad'))).toBe('string');
        expect(lxHelpers.getType(new Date())).toBe('date');
        expect(lxHelpers.getType(Infinity)).toBe('infinity');
        expect(lxHelpers.getType(NaN)).toBe('nan');
    });

    it('has a function isArray() which should true return if the given value is an array', function () {
        expect(lxHelpers.isArray([])).toBeTruthy();
        expect(lxHelpers.isArray({})).toBeFalsy();
        expect(lxHelpers.isArray()).toBeFalsy();
        expect(lxHelpers.isArray(function () {})).toBeFalsy();
        expect(lxHelpers.isArray(null)).toBeFalsy();
        expect(lxHelpers.isArray(undefined)).toBeFalsy();
        expect(lxHelpers.isArray(true)).toBeFalsy();
        expect(lxHelpers.isArray(13)).toBeFalsy();
        expect(lxHelpers.isArray('asddad')).toBeFalsy();
        expect(lxHelpers.isArray(NaN)).toBeFalsy();
        expect(lxHelpers.isArray(Infinity)).toBeFalsy();
        expect(lxHelpers.isArray(new RegExp())).toBeFalsy();
        /*jshint -W053 */
        expect(lxHelpers.isArray(new String('ww'))).toBeFalsy();
        /*jshint -W053 */
        expect(lxHelpers.isArray(new Boolean(true))).toBeFalsy();
        /*jshint -W053 */
        expect(lxHelpers.isArray(new Number(10))).toBeFalsy();
    });

    it('has a function isObject() which should true return if the given value is an object', function () {
        expect(lxHelpers.isObject([])).toBeFalsy();
        expect(lxHelpers.isObject({})).toBeTruthy();
        expect(lxHelpers.isObject()).toBeFalsy();
        expect(lxHelpers.isObject(function () {})).toBeFalsy();
        expect(lxHelpers.isObject(null)).toBeFalsy();
        expect(lxHelpers.isObject(undefined)).toBeFalsy();
        expect(lxHelpers.isObject(true)).toBeFalsy();
        expect(lxHelpers.isObject(13)).toBeFalsy();
        expect(lxHelpers.isObject('asddad')).toBeFalsy();
        expect(lxHelpers.isObject(NaN)).toBeFalsy();
        expect(lxHelpers.isObject(Infinity)).toBeFalsy();
    });

    it('has a function isFunction() which should true return if the given value is a function', function () {
        expect(lxHelpers.isFunction([])).toBeFalsy();
        expect(lxHelpers.isFunction({})).toBeFalsy();
        expect(lxHelpers.isFunction()).toBeFalsy();
        expect(lxHelpers.isFunction(function () {})).toBeTruthy();
        expect(lxHelpers.isFunction(null)).toBeFalsy();
        expect(lxHelpers.isFunction(undefined)).toBeFalsy();
        expect(lxHelpers.isFunction(true)).toBeFalsy();
        expect(lxHelpers.isFunction(13)).toBeFalsy();
        expect(lxHelpers.isFunction('asddad')).toBeFalsy();
        expect(lxHelpers.isFunction(NaN)).toBeFalsy();
        expect(lxHelpers.isFunction(Infinity)).toBeFalsy();
    });

    it('has a function isDate() which should return true if the given value is a Date', function () {
        expect(lxHelpers.isDate([])).toBeFalsy();
        expect(lxHelpers.isDate({})).toBeFalsy();
        expect(lxHelpers.isDate()).toBeFalsy();
        expect(lxHelpers.isDate(function () {})).toBeFalsy();
        expect(lxHelpers.isDate(null)).toBeFalsy();
        expect(lxHelpers.isDate(undefined)).toBeFalsy();
        expect(lxHelpers.isDate(true)).toBeFalsy();
        expect(lxHelpers.isDate(13)).toBeFalsy();
        expect(lxHelpers.isDate('asddad')).toBeFalsy();
        expect(lxHelpers.isDate(new Date())).toBeTruthy();
        expect(lxHelpers.isDate(NaN)).toBeFalsy();
        expect(lxHelpers.isDate(Infinity)).toBeFalsy();
    });

    it('has a function isNumber() which should return true if the given value is a Number', function () {
        expect(lxHelpers.isNumber([])).toBeFalsy();
        expect(lxHelpers.isNumber({})).toBeFalsy();
        expect(lxHelpers.isNumber()).toBeFalsy();
        expect(lxHelpers.isNumber(function () {})).toBeFalsy();
        expect(lxHelpers.isNumber(null)).toBeFalsy();
        expect(lxHelpers.isNumber(undefined)).toBeFalsy();
        expect(lxHelpers.isNumber(true)).toBeFalsy();
        expect(lxHelpers.isNumber(13)).toBeTruthy();
        /*jshint -W053 */
        expect(lxHelpers.isNumber(new Number(13))).toBeTruthy();
        expect(lxHelpers.isNumber('asddad')).toBeFalsy();
        expect(lxHelpers.isNumber(new Date())).toBeFalsy();
        expect(lxHelpers.isNumber(NaN)).toBeFalsy();
        expect(lxHelpers.isNumber(Infinity)).toBeFalsy();
    });

    it('has a function isString() which should return true if the given value is a string', function () {
        expect(lxHelpers.isString([])).toBeFalsy();
        expect(lxHelpers.isString({})).toBeFalsy();
        expect(lxHelpers.isString()).toBeFalsy();
        expect(lxHelpers.isString(function () {})).toBeFalsy();
        expect(lxHelpers.isString(null)).toBeFalsy();
        expect(lxHelpers.isString(undefined)).toBeFalsy();
        expect(lxHelpers.isString(true)).toBeFalsy();
        expect(lxHelpers.isString(13)).toBeFalsy();
        expect(lxHelpers.isString('asddad')).toBeTruthy();
        /*jshint -W053 */
        expect(lxHelpers.isString(new String('wayne'))).toBeTruthy();
        expect(lxHelpers.isString(new Date())).toBeFalsy();
        expect(lxHelpers.isString(NaN)).toBeFalsy();
        expect(lxHelpers.isString(Infinity)).toBeFalsy();
        expect(lxHelpers.isString(new RegExp())).toBeFalsy();
    });

    it('has a function isRegExp() which should return true if the given value is a regular expression object', function () {
        expect(lxHelpers.isRegExp([])).toBeFalsy();
        expect(lxHelpers.isRegExp({})).toBeFalsy();
        expect(lxHelpers.isRegExp()).toBeFalsy();
        expect(lxHelpers.isRegExp(function () {})).toBeFalsy();
        expect(lxHelpers.isRegExp(null)).toBeFalsy();
        expect(lxHelpers.isRegExp(undefined)).toBeFalsy();
        expect(lxHelpers.isRegExp(true)).toBeFalsy();
        expect(lxHelpers.isRegExp(13)).toBeFalsy();
        expect(lxHelpers.isRegExp('asddad')).toBeFalsy();
        /*jshint -W053 */
        expect(lxHelpers.isRegExp(new String('wayne'))).toBeFalsy();
        expect(lxHelpers.isRegExp(new Date())).toBeFalsy();
        expect(lxHelpers.isRegExp(NaN)).toBeFalsy();
        expect(lxHelpers.isRegExp(Infinity)).toBeFalsy();
        expect(lxHelpers.isRegExp(new RegExp())).toBeTruthy();
    });

    it('has a function isBoolean() which should return true if the given value is a boolean', function () {
        expect(lxHelpers.isBoolean([])).toBeFalsy();
        expect(lxHelpers.isBoolean({})).toBeFalsy();
        expect(lxHelpers.isBoolean()).toBeFalsy();
        expect(lxHelpers.isBoolean(function () {})).toBeFalsy();
        expect(lxHelpers.isBoolean(null)).toBeFalsy();
        expect(lxHelpers.isBoolean(undefined)).toBeFalsy();
        expect(lxHelpers.isBoolean(true)).toBeTruthy();
        /*jshint -W053 */
        expect(lxHelpers.isBoolean(new Boolean(false))).toBeTruthy();
        expect(lxHelpers.isBoolean(13)).toBeFalsy();
        expect(lxHelpers.isBoolean('asddad')).toBeFalsy();
        /*jshint -W053 */
        expect(lxHelpers.isBoolean(new String('wayne'))).toBeFalsy();
        expect(lxHelpers.isBoolean(new Date())).toBeFalsy();
        expect(lxHelpers.isBoolean(NaN)).toBeFalsy();
        expect(lxHelpers.isBoolean(Infinity)).toBeFalsy();
        expect(lxHelpers.isBoolean(new RegExp())).toBeFalsy();
    });

    it('has a function isEmpty() which should return if the given value has no items or keys', function () {
        expect(lxHelpers.isEmpty([])).toBeTruthy();
        expect(lxHelpers.isEmpty({})).toBeTruthy();
        expect(lxHelpers.isEmpty(function () {})).toBeTruthy();
        expect(lxHelpers.isEmpty(null)).toBeTruthy();
        expect(lxHelpers.isEmpty(undefined)).toBeTruthy();
        expect(lxHelpers.isEmpty(true)).toBeTruthy();
        expect(lxHelpers.isEmpty(13)).toBeTruthy();
        expect(lxHelpers.isEmpty('asddad')).toBeTruthy();

        expect(lxHelpers.isEmpty([1, 2, 3])).toBeFalsy();
        expect(lxHelpers.isEmpty({name: 'wayne'})).toBeFalsy();

        var fn = function () {
            this.name = 'wayne';
            return this;
        };
        fn.lastname = 'Noob';

        expect(lxHelpers.isEmpty(fn)).toBeTruthy();
    });

    describe('has a function arrayFirst() which', function () {
        it('should throw an exception when the parameter array is not of type Array', function () {
            var func2 = function () { return lxHelpers.arrayFirst({}, function () {}); };
            var func3 = function () { return lxHelpers.arrayFirst(1, function () {}); };
            var func4 = function () { return lxHelpers.arrayFirst('1', function () {}); };
            var func5 = function () { return lxHelpers.arrayFirst([1, 2], function () {}); };

            expect(func2).toThrow();
            expect(func3).toThrow();
            expect(func4).toThrow();
            expect(func5).not.toThrow();
        });

        it('should return null when the parameter array is null, undefined or empty array', function () {
            var item = lxHelpers.arrayFirst(null, function () {});
            var item1 = lxHelpers.arrayFirst(undefined, function () {});
            var item2 = lxHelpers.arrayFirst([], function () {});

            expect(item).toBeNull();
            expect(item1).toBeNull();
            expect(item2).toBeNull();
        });

        it('should return the item which fullfill the given predicate', function () {
            var item = lxHelpers.arrayFirst([1, 2, 3], function (item) { return item === 1; });
            var item1 = lxHelpers.arrayFirst([1, 2, 3], function (item) { return item > 1; });
            var item2 = lxHelpers.arrayFirst(data, function (item) { return item.name === '3'; });

            expect(item).toBe(1);
            expect(item1).toBe(2);
            expect(item2).toBe(data[2]);
        });

        it('should return null if the item not fullfill the given predicate', function () {
            var item = lxHelpers.arrayFirst([1, 2, 3], function (item) { return item === 5; });
            var item1 = lxHelpers.arrayFirst([1, 2, 3], function (item) { return item > 5; });
            var item2 = lxHelpers.arrayFirst(data, function (item) { return item.name === '5'; });

            expect(item).toBeNull();
            expect(item1).toBeNull();
            expect(item2).toBeNull();
        });
    });

    describe('has a function arrayForEach() which', function () {
        it('should throw an exception when the parameter array is not of type Array', function () {
            var func2 = function () { return lxHelpers.arrayForEach({}, function () {}); };
            var func3 = function () { return lxHelpers.arrayForEach(1, function () {}); };
            var func4 = function () { return lxHelpers.arrayForEach('1', function () {}); };
            var func5 = function () { return lxHelpers.arrayForEach([1, 2], function () {}); };

            expect(func2).toThrow();
            expect(func3).toThrow();
            expect(func4).toThrow();
            expect(func5).not.toThrow();
        });

        it('should perform the action for each item in the array', function () {
            var arr = [1, 2, 3];
            var result = [];
            lxHelpers.arrayForEach(arr, function (item) { result.push(item + 10); });

            expect(result[0]).toBe(11);
            expect(result[1]).toBe(12);
            expect(result[2]).toBe(13);
            expect(result.length).toBe(3);
        });
    });

    describe('has a function arrayIndexOf() which', function () {
        it('should throw an exception when the parameter array is not of type Array', function () {
            expect(function () { return lxHelpers.arrayIndexOf({}, 1);}).toThrow();
            expect(function () { return lxHelpers.arrayIndexOf(1, 1);}).toThrow();
            expect(function () { return lxHelpers.arrayIndexOf('1', 1);}).toThrow();
            expect(function () { return lxHelpers.arrayIndexOf([1, 2], 1);}).not.toThrow();
        });

        it('should return -1 when the parameter array is null, undefined or empty array', function () {
            expect(lxHelpers.arrayIndexOf(null, 1)).toBe(-1);
            expect(lxHelpers.arrayIndexOf(undefined, 1)).toBe(-1);
            expect(lxHelpers.arrayIndexOf([], 1)).toBe(-1);
        });

        it('should return the index of the given item in the array', function () {
            var arr = [1, 2, 3];
            var arr2 = ['1', '2', '3'];

            var res1 = lxHelpers.arrayIndexOf(arr, 2);
            var res2 = lxHelpers.arrayIndexOf(arr2, '3');

            expect(res1).toBe(1);
            expect(res2).toBe(2);
        });

        it('should return the index of the given item in the array also when the native indexOf function does not exists', function () {
            var indexOfFunction = lxHelpers.clone(Array.prototype.indexOf);
            Array.prototype.indexOf = 5;

            var arr = [1, 2, 3];
            var arr2 = ['1', '2', '3'];

            var res1 = lxHelpers.arrayIndexOf(arr, 2);
            var res2 = lxHelpers.arrayIndexOf(arr2, '3');

            expect(res1).toBe(1);
            expect(res2).toBe(2);

            Array.prototype.indexOf = indexOfFunction;
        });

        it('should return the index when the item is a prediacte function', function () {
            var arr = [
                {id: 1, name: '1'},
                {id: 2, name: '2'},
                {id: 3, name: '3'},
                {id: 4, name: '4'}
            ];

            var res = lxHelpers.arrayIndexOf(arr, function (item) {
                return item.id === 3;
            });

            expect(res).toBe(2);
        });

        it('should return -1 if the given item is not in the array', function () {
            var arr = [1, 2, 3];
            var arr2 = ['1', '2', '3'];

            var res1 = lxHelpers.arrayIndexOf(arr, 55);
            var res2 = lxHelpers.arrayIndexOf(arr2, 'wayne');

            expect(res1).toBe(-1);
            expect(res2).toBe(-1);
        });
    });

    describe('has a function arrayHasItem() which', function () {
        it('should throw an exception when the parameter array is not of type Array', function () {
            var func2 = function () { return lxHelpers.arrayHasItem({}, function () {}); };
            var func3 = function () { return lxHelpers.arrayHasItem(1, function () {}); };
            var func4 = function () { return lxHelpers.arrayHasItem('1', function () {}); };
            var func5 = function () { return lxHelpers.arrayHasItem([1, 2], function () {}); };

            expect(func2).toThrow();
            expect(func3).toThrow();
            expect(func4).toThrow();
            expect(func5).not.toThrow();
        });

        it('should return false when the parameter array is null, undefined or empty array', function () {
            var item = lxHelpers.arrayHasItem(null, function () {});
            var item1 = lxHelpers.arrayHasItem(undefined, function () {});
            var item2 = lxHelpers.arrayHasItem([], function () {});

            expect(item).toBeFalsy();
            expect(item1).toBeFalsy();
            expect(item2).toBeFalsy();
        });

        it('should return true if the item in the array', function () {
            var arr = [1, 2, 3];
            var arr2 = ['1', '2', '3'];

            var res1 = lxHelpers.arrayHasItem(arr, 2);
            var res2 = lxHelpers.arrayHasItem(arr2, '3');

            expect(res1).toBeTruthy();
            expect(res2).toBeTruthy();
        });

        it('should return true when the item is a prediacte function and it is evaluated to true', function () {
            var arr = [
                {id: 1, name: '1'},
                {id: 2, name: '2'},
                {id: 3, name: '3'},
                {id: 4, name: '4'}
            ];

            var res = lxHelpers.arrayHasItem(arr, function (item) {
                return item.id === 4;
            });

            expect(res).toBeTruthy();
        });

        it('should return false if the given item is not in the array', function () {
            var arr = [1, 2, 3];
            var arr2 = ['1', '2', '3'];

            var res1 = lxHelpers.arrayHasItem(arr, 55);
            var res2 = lxHelpers.arrayHasItem(arr2, 'wayne');

            expect(res1).toBeFalsy();
            expect(res2).toBeFalsy();
        });
    });

    describe('has a function arrayRemoveItem() which', function () {
        it('should throw an exception when the parameter array is not of type Array', function () {
            var func2 = function () { return lxHelpers.arrayRemoveItem({}, function () {}); };
            var func3 = function () { return lxHelpers.arrayRemoveItem(1, function () {}); };
            var func4 = function () { return lxHelpers.arrayRemoveItem('1', function () {}); };
            var func5 = function () { return lxHelpers.arrayRemoveItem([1, 2], function () {}); };

            expect(func2).toThrow();
            expect(func3).toThrow();
            expect(func4).toThrow();
            expect(func5).not.toThrow();
        });

        it('should remove the item from the array', function () {
            var arr = [1, 2, 3];
            var arr2 = ['1', '2', '3'];

            lxHelpers.arrayRemoveItem(arr, 2);
            lxHelpers.arrayRemoveItem(arr2, '3');

            expect(arr.length).toBe(2);
            expect(arr2.length).toBe(2);
            expect(lxHelpers.arrayIndexOf(arr, 2)).toBe(-1);
            expect(lxHelpers.arrayIndexOf(arr2, '3')).toBe(-1);
        });

        it('should do nothing if the given item is not in the array', function () {
            var arr = [1, 2, 3];
            var arr2 = ['1', '2', '3'];

            lxHelpers.arrayRemoveItem(arr, 44);
            lxHelpers.arrayRemoveItem(arr2, 'wayne');

            expect(arr.length).toBe(3);
            expect(arr2.length).toBe(3);
        });

        it('should do nothing if the array is empty', function () {
            var arr = [];

            lxHelpers.arrayRemoveItem(arr, 44);

            expect(arr.length).toBe(0);
        });
    });

    describe('has a function arrayMap() which', function () {
        it('should throw an exception when the parameter array is not of type Array', function () {
            var func2 = function () { return lxHelpers.arrayMap({}, function () {}); };
            var func3 = function () { return lxHelpers.arrayMap(1, function () {}); };
            var func4 = function () { return lxHelpers.arrayMap('1', function () {}); };
            var func5 = function () { return lxHelpers.arrayMap([1, 2], function () {}); };

            expect(func2).toThrow();
            expect(func3).toThrow();
            expect(func4).toThrow();
            expect(func5).not.toThrow();
        });

        it('should return an emty array when the parameter array is null, undefined or empty array', function () {
            var res = lxHelpers.arrayMap(null, function () {});
            var res1 = lxHelpers.arrayMap(undefined, function () {});
            var res2 = lxHelpers.arrayMap([], function () {});

            expect(Array.isArray(res)).toBeTruthy();
            expect(res.length).toBe(0);
            expect(Array.isArray(res1)).toBeTruthy();
            expect(res1.length).toBe(0);
            expect(Array.isArray(res2)).toBeTruthy();
            expect(res2.length).toBe(0);
        });

        it('should return the mapped array', function () {
            var arr = [1, 2, 3];
            var res = lxHelpers.arrayMap(arr, function (item) { return item + 10; });

            expect(res[0]).toBe(11);
            expect(res[1]).toBe(12);
            expect(res[2]).toBe(13);
            expect(res.length).toBe(3);
        });
    });

    describe('has a function arrayGetDistinctValues() which', function () {
        it('should throw an exception when the parameter array is not of type Array', function () {
            var func2 = function () { return lxHelpers.arrayGetDistinctValues({}); };
            var func3 = function () { return lxHelpers.arrayGetDistinctValues(1); };
            var func4 = function () { return lxHelpers.arrayGetDistinctValues('1'); };
            var func5 = function () { return lxHelpers.arrayGetDistinctValues([1, 2]); };

            expect(func2).toThrow();
            expect(func3).toThrow();
            expect(func4).toThrow();
            expect(func5).not.toThrow();
        });

        it('should return an emty array when the parameter array is null, undefined or empty array', function () {
            var res = lxHelpers.arrayGetDistinctValues(null);
            var res1 = lxHelpers.arrayGetDistinctValues(undefined);
            var res2 = lxHelpers.arrayGetDistinctValues([]);

            expect(Array.isArray(res)).toBeTruthy();
            expect(res.length).toBe(0);
            expect(Array.isArray(res1)).toBeTruthy();
            expect(res1.length).toBe(0);
            expect(Array.isArray(res2)).toBeTruthy();
            expect(res2.length).toBe(0);
        });

        it('should return a new array with the distinct values', function () {
            var arr = [1, 2, 3, 3, 4, 4, 1, 5, 6];
            var arr1 = ['1', '2', '3', '2', '3'];
            var res = lxHelpers.arrayGetDistinctValues(arr);
            var res1 = lxHelpers.arrayGetDistinctValues(arr1);

            expect(Array.isArray(res)).toBeTruthy();
            expect(res.length).toBe(6);
            expect(Array.isArray(res1)).toBeTruthy();
            expect(res1.length).toBe(3);
        });
    });

    describe('has a function arrayFilter() which', function () {
        it('should throw an exception when the parameter array is not of type Array', function () {
            var func2 = function () { return lxHelpers.arrayFilter({}, function () {}); };
            var func3 = function () { return lxHelpers.arrayFilter(1, function () {}); };
            var func4 = function () { return lxHelpers.arrayFilter('1', function () {}); };
            var func5 = function () { return lxHelpers.arrayFilter([1, 2], function () {}); };

            expect(func2).toThrow();
            expect(func3).toThrow();
            expect(func4).toThrow();
            expect(func5).not.toThrow();
        });

        it('should return an emty array when the parameter array is null, undefined or empty array', function () {
            var res = lxHelpers.arrayFilter(null, function () {});
            var res1 = lxHelpers.arrayFilter(undefined, function () {});
            var res2 = lxHelpers.arrayFilter([], function () {});

            expect(Array.isArray(res)).toBeTruthy();
            expect(res.length).toBe(0);
            expect(Array.isArray(res1)).toBeTruthy();
            expect(res1.length).toBe(0);
            expect(Array.isArray(res2)).toBeTruthy();
            expect(res2.length).toBe(0);
        });

        it('should return the filtered array', function () {
            var arr = [1, 2, 3, 3, 4, 4, 1, 5, 6];
            var arr1 = ['1', '2', '3', '2', '3'];

            var res = lxHelpers.arrayFilter(arr, function (item) { return item < 4; });
            var res1 = lxHelpers.arrayFilter(arr1, function (item) { return item === '3'; });
            var res2 = lxHelpers.arrayFilter(data, function (item) { return item.id >= 2; });

            expect(res.length).toBe(5);
            expect(res1.length).toBe(2);
            expect(res2.length).toBe(2);
        });
    });

    describe('has a function arrayPushAll() which', function () {
        it('should throw an exception when the parameter array is not of type Array', function () {
            var func2 = function () { return lxHelpers.arrayPushAll({}); };
            var func3 = function () { return lxHelpers.arrayPushAll(1); };
            var func4 = function () { return lxHelpers.arrayPushAll('1'); };
            var func5 = function () { return lxHelpers.arrayPushAll([1, 2], []); };

            expect(func2).toThrow();
            expect(func3).toThrow();
            expect(func4).toThrow();
            expect(func5).not.toThrow();
        });

        it('should throw an exception when the parameter valuesToPush is not of type Array', function () {
            var func2 = function () { return lxHelpers.arrayPushAll([], {}); };
            var func3 = function () { return lxHelpers.arrayPushAll([], 1); };
            var func4 = function () { return lxHelpers.arrayPushAll([], '1'); };

            expect(func2).toThrow();
            expect(func3).toThrow();
            expect(func4).toThrow();
        });

        it('should return an array with the pushed values', function () {
            var arr = [1, 2, 3];
            var res = lxHelpers.arrayPushAll(arr, [3, 4, 5]);

            expect(Array.isArray(res)).toBeTruthy();
            expect(res.length).toBe(6);
        });

        it('should return an array with the pushed values when the array is not defined', function () {
            var arr = null;
            var res = lxHelpers.arrayPushAll(arr, [3, 4, 5]);

            expect(Array.isArray(res)).toBeTruthy();
            expect(res.length).toBe(3);

            arr = undefined;
            res = lxHelpers.arrayPushAll(arr, [3, 4, 5]);

            expect(Array.isArray(res)).toBeTruthy();
            expect(res.length).toBe(3);
        });

        it('should clear the array and return an array with the pushed values when param clearArray is true', function () {
            var arr = [1, 2, 3];
            var res = lxHelpers.arrayPushAll(arr, [3, 4, 5], true);

            expect(Array.isArray(res)).toBeTruthy();
            expect(res.length).toBe(3);
        });
    });

    describe('has a function objectForEach() which', function () {
        it('should throw an exception when the parameter obj is not of type object', function () {
            var func2 = function () { return lxHelpers.objectForEach([], function () {}); };
            var func3 = function () { return lxHelpers.objectForEach(1, function () {}); };
            var func4 = function () { return lxHelpers.objectForEach('1', function () {}); };
            var func5 = function () { return lxHelpers.objectForEach(true, function () {}); };
            var func6 = function () { return lxHelpers.objectForEach(new Date(), function () {}); };
            var func7 = function () { return lxHelpers.objectForEach(function () {}, function () {}); };
            var func8 = function () { return lxHelpers.objectForEach({}, function () {}); };

            expect(func2).toThrow();
            expect(func3).toThrow();
            expect(func4).toThrow();
            expect(func5).toThrow();
            expect(func6).toThrow();
            expect(func7).toThrow();
            expect(func8).not.toThrow();
        });

        it('should throw an exception when the parameter acion is not of type function', function () {
            expect(function () { return lxHelpers.objectForEach({}, 2); }).toThrow();
        });

        it('should perform the action for each item of the object', function () {
            var obj = {
                name: 'test',
                role: 'user'
            };

            lxHelpers.objectForEach(obj, function (key, value) { obj[key] = value + 'Action'; });

            expect(Object.keys(obj).length).toBe(2);
            expect(obj.name).toBe('testAction');
            expect(obj.role).toBe('userAction');
        });

        it('should perform the action for each item of the object and break when the action function returns false', function () {
            var obj = {
                name: 'test',
                role: 'user',
                test: 1,
                wayne: 2
            };

            lxHelpers.objectForEach(obj, function (key, value) {
                if (value === 1) {
                    return false;
                }

                obj[key] = value + 'Action';
            });

            expect(Object.keys(obj).length).toBe(4);
            expect(obj.name).toBe('testAction');
            expect(obj.role).toBe('userAction');
            expect(obj.test).toBe(1);
            expect(obj.wayne).toBe(2);
        });
    });

    describe('has a function forEach() which', function () {
        it('should throw an exception when the parameter action is no function', function () {
            var func2 = function () { return lxHelpers.forEach([1, 2], null); };

            expect(func2).toThrow();
        });

        it('should perform the action for each item', function () {
            var obj = {
                    name: 'test',
                    role: 'user'
                },
                arr = ['test', 'user'],
                res = [];

            lxHelpers.forEach(obj, function (value, key) { obj[key] = value + 'Action'; });
            lxHelpers.forEach(arr, function (value) { res.push(value + 'Action'); });

            expect(Object.keys(obj).length).toBe(2);
            expect(obj.name).toBe('testAction');
            expect(obj.role).toBe('userAction');
            expect(res[0]).toBe('testAction');
            expect(res[1]).toBe('userAction');
        });

        it('should stop immediately when the object is empty', function () {
            var obj = {},
                arr = [],
                res = [];

            lxHelpers.forEach(obj, function (value, key) { obj[key] = value + 'Action'; });
            lxHelpers.forEach(arr, function (value) { res.push(value + 'Action'); });

            expect(Object.keys(obj).length).toBe(0);
            expect(arr.length).toBe(0);
            expect(res.length).toBe(0);
        });

        it('should handle arrays and objects', function () {
            var data = {
                obj: {
                    name: 'test',
                    role: 'user'
                },
                arr: ['Atest', 'Auser']
            };
            var res = [];

            lxHelpers.forEach(data, function (value) {
                if (lxHelpers.isArray(value) || lxHelpers.isObject(value)) {
                    lxHelpers.forEach(value, function (item) {
                        res.push(item + 'Action');
                    });
                }
            });

            expect(res[0]).toBe('testAction');
            expect(res[1]).toBe('userAction');
            expect(res[2]).toBe('AtestAction');
            expect(res[3]).toBe('AuserAction');
        });

        it('should stop if the action returns false', function () {
            var obj = {
                    name: 'test',
                    role: 'user',
                    s: '1',
                    t: '2',
                    v: '3'
                },
                arr = ['test', 'user', '1', '2', '3'],
                res = [],
                resObj = {};

            lxHelpers.forEach(obj, function (value, key) {
                if (value === '1') {
                    return false;
                }

                resObj[key] = value + 'Action';
            });

            lxHelpers.forEach(arr, function (value) {
                if (value === '1') {
                    return false;
                }

                res.push(value + 'Action');
            });

            expect(Object.keys(resObj).length).toBe(2);
            expect(resObj.name).toBe('testAction');
            expect(resObj.role).toBe('userAction');
            expect(res.length).toBe(2);
            expect(res[0]).toBe('testAction');
            expect(res[1]).toBe('userAction');
        });

        it('should get the index of the current array element', function () {
            var data = ['a', 'b', 'c'];

            lxHelpers.forEach(data, function (item, index) {
                data[index] = item + index;
            });

            expect(data).toEqual(['a0', 'b1', 'c2']);
        });
    });

    describe('has a function createGuid() which', function () {
        it('should return a new GUID', function () {
            var res = lxHelpers.createGuid();

            expect(typeof res).toBe('string');
            expect(res.length).toBe(36);
        });
    });

    describe('has a function capitalizeFirstLetter() which', function () {
        it('should throw an exception when the parameter obj is not of type string', function () {
            var func2 = function () { return lxHelpers.capitalizeFirstLetter(['3']); };
            var func3 = function () { return lxHelpers.capitalizeFirstLetter(1); };
            var func4 = function () { return lxHelpers.capitalizeFirstLetter(true); };
            var func5 = function () { return lxHelpers.capitalizeFirstLetter(new Date()); };
            var func6 = function () { return lxHelpers.capitalizeFirstLetter(function () {}); };
            var func7 = function () { return lxHelpers.capitalizeFirstLetter({}); };
            var func8 = function () { return lxHelpers.capitalizeFirstLetter(''); };

            expect(func2).toThrow();
            expect(func3).toThrow();
            expect(func4).toThrow();
            expect(func5).toThrow();
            expect(func6).toThrow();
            expect(func7).toThrow();
            expect(func8).not.toThrow();
        });

        it('should return the word with capitalized first letter', function () {
            var res = lxHelpers.capitalizeFirstLetter('wayne');

            expect(typeof res).toBe('string');
            expect(res).toBe('Wayne');
        });

        it('should return an empty string when param word is empty or evaluated as empty', function () {
            var res = lxHelpers.capitalizeFirstLetter('');
            var res1 = lxHelpers.capitalizeFirstLetter(null);
            var res2 = lxHelpers.capitalizeFirstLetter(undefined);
            var res3 = lxHelpers.capitalizeFirstLetter(false);
            var res4 = lxHelpers.capitalizeFirstLetter(0);

            expect(res).toBe('');
            expect(res1).toBe('');
            expect(res2).toBe('');
            expect(res3).toBe('');
            expect(res4).toBe('');
        });
    });

    describe('has a function clone() which', function () {
        it('should clone primitive types', function () {
            var res = lxHelpers.clone('wayne');
            var res1 = lxHelpers.clone(1);
            var res2 = lxHelpers.clone(true);
            var res3 = lxHelpers.clone(null);
            var res4 = lxHelpers.clone(undefined);

            expect(res).toBe('wayne');
            expect(res1).toBe(1);
            expect(res2).toBe(true);
            expect(res3).toBe(null);
            expect(res4).toBe(undefined);
        });

        it('should clone a RegExp', function () {
            var data = new RegExp('ddd');
            var res = lxHelpers.clone(data);

            expect(typeof res).toBe('object');
            expect(res instanceof RegExp).toBeTruthy();
        });

        it('should clone a Date', function () {
            var date = new Date(2013, 5, 1);
            var res = lxHelpers.clone(date);

            date.setYear(2020);

            expect(typeof res).toBe('object');
            expect(res instanceof Date).toBeTruthy();
            expect(res.getFullYear()).toBe(2013);
            expect(date.getFullYear()).toBe(2020);
        });

        it('should clone an array', function () {
            var data = [1, 2, 3, 4];
            var res = lxHelpers.clone(data);

            expect(Array.isArray(res)).toBeTruthy();
            expect(res.length).toBe(4);
        });

        it('should clone an object', function () {
            var data = {
                id: 1,
                user: {
                    name: 'wayne',
                    isMale: true
                },
                start: new Date(),
                locations: [
                    {
                        id: 1,
                        street: 'street',
                        zip: '12345',
                        hasDoor: true,
                        windows: [
                            {key: '1'},
                            {key: '2'},
                            {key: '3'}
                        ],
                        doors: [6, 7, 8]
                    },
                    {id: 2, street: 'street1', zip: '22222', hasDoor: true},
                    {id: 3, street: 'street2', zip: '33333', hasDoor: false}
                ]
            };
            var res = lxHelpers.clone(data);

            // manipulate original object
            data.user = {
                name: 'test',
                isMale: false
            };
            data.locations[0].doors = [];
            data.locations[0].windows[1].key = 'changed';
            data.start = null;

            expect(typeof res).toBe('object');
            expect(res.id).toBe(1);
            expect(res.user.name).toBe('wayne');
            expect(res.user.isMale).toBe(true);
            expect(typeof res.start).toBe('object');
            expect(Array.isArray(res.locations)).toBeTruthy();
            expect(Array.isArray(res.locations[0].windows)).toBeTruthy();
            expect(Array.isArray(res.locations[0].doors)).toBeTruthy();
            expect(res.locations[0].windows[1].key).toBe('2');
            expect(res.locations[2].hasDoor).toBe(false);
        });
    });

    describe('has a function getTypeError() which', function () {
        it('should return an TypeError with the correct message', function () {
            var sut = lxHelpers.getTypeError('id', '12345646', {});
            var func = function (names) {
                if (!lxHelpers.isArray(names)) {
                    throw lxHelpers.getTypeError('names', names, []);
                }
            };

            expect(typeof sut).toBe('object');
            expect(sut instanceof TypeError).toBe(true);
            expect(typeof sut.message).toBeDefined();
            expect(func).toThrow();
        });
    });

    describe('has a function roundPrecise() which', function () {
        it('should return NaN', function () {
            expect(lxHelpers.roundPrecise(1, 1.1)).toBeNaN();
            expect(lxHelpers.roundPrecise('a', 1)).toBeNaN();
            expect(lxHelpers.roundPrecise('a', 1.1)).toBeNaN();
            expect(lxHelpers.roundPrecise(1.4, 'a')).toBeNaN();
            expect(lxHelpers.roundPrecise(1.4, '2')).toBeNaN();
            expect(lxHelpers.roundPrecise()).toBeNaN();
            expect(lxHelpers.roundPrecise(null, 2)).toBeNaN();
            expect(lxHelpers.roundPrecise(1.5, null)).toBeNaN();
            expect(lxHelpers.roundPrecise(null, null)).toBeNaN();
            expect(lxHelpers.roundPrecise(undefined, null)).toBeNaN();
        });

        it('should round a number as string', function () {
            expect(lxHelpers.roundPrecise('1.4', 2)).toBe(1.4);
            expect(lxHelpers.roundPrecise('1.45', 2)).toBe(1.45);
            expect(lxHelpers.roundPrecise('1.455', 2)).toBe(1.46);
        });

        it('should round a number', function () {
            expect(lxHelpers.roundPrecise(1, 1)).toBe(1);
            expect(lxHelpers.roundPrecise(-1, 1)).toBe(-1);
            expect(lxHelpers.roundPrecise(1.5, 1)).toBe(1.5);
            expect(lxHelpers.roundPrecise(-1.5, 1)).toBe(-1.5);
            expect(lxHelpers.roundPrecise(1.55, 1)).toBe(1.6);
            expect(lxHelpers.roundPrecise(-1.55, 1)).toBe(-1.6);
            expect(lxHelpers.roundPrecise(1.555, 1)).toBe(1.6);
            expect(lxHelpers.roundPrecise(-1.555, 1)).toBe(-1.6);

            expect(lxHelpers.roundPrecise(1, 2)).toBe(1);
            expect(lxHelpers.roundPrecise(-1, 2)).toBe(-1);
            expect(lxHelpers.roundPrecise(1.5, 2)).toBe(1.5);
            expect(lxHelpers.roundPrecise(-1.5, 2)).toBe(-1.5);
            expect(lxHelpers.roundPrecise(1.55, 2)).toBe(1.55);
            expect(lxHelpers.roundPrecise(-1.55, 2)).toBe(-1.55);
            expect(lxHelpers.roundPrecise(1.555, 2)).toBe(1.56);
            expect(lxHelpers.roundPrecise(-1.555, 2)).toBe(-1.56);
        });
    });

    describe('has a function removeTagsAndComments() which', function () {
        it('should throw an exception when the parameters are not of type string', function () {
            expect(function () { return lxHelpers.removeTagsAndComments(); }).toThrow();
            expect(function () { return lxHelpers.removeTagsAndComments(10); }).toThrow();
            expect(function () { return lxHelpers.removeTagsAndComments('', 10); }).toThrow();
        });

        it('should handle empty values', function () {
            expect(lxHelpers.removeTagsAndComments('')).toBe('');
            expect(lxHelpers.removeTagsAndComments('', null)).toBe('');
            expect(lxHelpers.removeTagsAndComments('', undefined)).toBe('');
            expect(lxHelpers.removeTagsAndComments('', 0)).toBe('');
            /*jshint -W053 */
            expect(lxHelpers.removeTagsAndComments(new String())).toBe('');
        });

        it('should remove html tags from a string', function () {
            expect(lxHelpers.removeTagsAndComments('<p>name</p>')).toBe('name');
            expect(lxHelpers.removeTagsAndComments('<!-- test --><p>name</p>')).toBe('name');
            expect(lxHelpers.removeTagsAndComments('<p>name</p><script>var i = 0;</script>')).toBe('namevar i = 0;');
            expect(lxHelpers.removeTagsAndComments('<div><p>name</p></div>')).toBe('name');
            expect(lxHelpers.removeTagsAndComments('<div><p>name</p></div>aaa<br><br /><strong>gg</strong>')).toBe('nameaaagg');
            expect(lxHelpers.removeTagsAndComments('<div><p>name</p><img src="xxx.png" onmouseover="makeBIG()">')).toBe('name');
            expect(lxHelpers.removeTagsAndComments('<div><p>name</p><a href="http://kwww.litixsoft.de">litixsoft</a>')).toBe('namelitixsoft');
        });

        it('should remove html tags from a string and the ones that are allowed', function () {
            expect(lxHelpers.removeTagsAndComments('<p>name</p>', '<p>')).toBe('<p>name</p>');
            expect(lxHelpers.removeTagsAndComments('<p>name</p><script>var i = 0;</script>', '<script>')).toBe('name<script>var i = 0;</script>');
            expect(lxHelpers.removeTagsAndComments('<div><p>name</p></div>', '<p>')).toBe('<p>name</p>');
            expect(lxHelpers.removeTagsAndComments('<div><p>name</p></div>aaa<br><br /><strong>gg</strong>', '<div>')).toBe('<div>name</div>aaagg');
            expect(lxHelpers.removeTagsAndComments('<div><p>name</p><img src="xxx.png" onmouseover="makeBIG()">', '<p><img>')).toBe('<p>name</p><img src="xxx.png" onmouseover="makeBIG()">');
            expect(lxHelpers.removeTagsAndComments('<div><p>name</p><a href="http://kwww.litixsoft.de">litixsoft</a>', '<a>')).toBe('name<a href="http://kwww.litixsoft.de">litixsoft</a>');
        });
    });
});