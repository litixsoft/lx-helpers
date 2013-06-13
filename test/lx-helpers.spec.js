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
        expect(lxHelpers.getType([])).toBe('[object Array]');
        expect(lxHelpers.getType({})).toBe('[object Object]');
        expect(lxHelpers.getType()).toBe('[object Undefined]');
        expect(lxHelpers.getType(function () {})).toBe('[object Function]');
        expect(lxHelpers.getType(null)).toBe('[object Null]');
        expect(lxHelpers.getType(undefined)).toBe('[object Undefined]');
        expect(lxHelpers.getType(true)).toBe('[object Boolean]');
        expect(lxHelpers.getType(13)).toBe('[object Number]');
        expect(lxHelpers.getType(13.99)).toBe('[object Number]');
        expect(lxHelpers.getType('asddad')).toBe('[object String]');
        expect(lxHelpers.getType(new Date())).toBe('[object Date]');
    });

    it('has a function isArray() which should return if the given value is an array', function () {
        expect(lxHelpers.isArray([])).toBeTruthy();
        expect(lxHelpers.isArray({})).toBeFalsy();
        expect(lxHelpers.isArray()).toBeFalsy();
        expect(lxHelpers.isArray(function () {})).toBeFalsy();
        expect(lxHelpers.isArray(null)).toBeFalsy();
        expect(lxHelpers.isArray(undefined)).toBeFalsy();
        expect(lxHelpers.isArray(true)).toBeFalsy();
        expect(lxHelpers.isArray(13)).toBeFalsy();
        expect(lxHelpers.isArray('asddad')).toBeFalsy();
    });

    it('has a function isObject() which should return if the given value is an object', function () {
        expect(lxHelpers.isObject([])).toBeFalsy();
        expect(lxHelpers.isObject({})).toBeTruthy();
        expect(lxHelpers.isObject()).toBeFalsy();
        expect(lxHelpers.isObject(function () {})).toBeFalsy();
        expect(lxHelpers.isObject(null)).toBeFalsy();
        expect(lxHelpers.isObject(undefined)).toBeFalsy();
        expect(lxHelpers.isObject(true)).toBeFalsy();
        expect(lxHelpers.isObject(13)).toBeFalsy();
        expect(lxHelpers.isObject('asddad')).toBeFalsy();
    });

    it('has a function isFunction() which should return if the given value is a function', function () {
        expect(lxHelpers.isFunction([])).toBeFalsy();
        expect(lxHelpers.isFunction({})).toBeFalsy();
        expect(lxHelpers.isFunction()).toBeFalsy();
        expect(lxHelpers.isFunction(function () {})).toBeTruthy();
        expect(lxHelpers.isFunction(null)).toBeFalsy();
        expect(lxHelpers.isFunction(undefined)).toBeFalsy();
        expect(lxHelpers.isFunction(true)).toBeFalsy();
        expect(lxHelpers.isFunction(13)).toBeFalsy();
        expect(lxHelpers.isFunction('asddad')).toBeFalsy();
    });

    it('has a function isDate() which should return if the given value is a Date', function () {
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

        expect(lxHelpers.isEmpty(fn)).toBeFalsy();
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
            var func2 = function () { return lxHelpers.arrayIndexOf({}, function () {}); };
            var func3 = function () { return lxHelpers.arrayIndexOf(1, function () {}); };
            var func4 = function () { return lxHelpers.arrayIndexOf('1', function () {}); };
            var func5 = function () { return lxHelpers.arrayIndexOf([1, 2], function () {}); };

            expect(func2).toThrow();
            expect(func3).toThrow();
            expect(func4).toThrow();
            expect(func5).not.toThrow();
        });

        it('should return -1 when the parameter array is null, undefined or empty array', function () {
            var item = lxHelpers.arrayIndexOf(null, function () {});
            var item1 = lxHelpers.arrayIndexOf(undefined, function () {});
            var item2 = lxHelpers.arrayIndexOf([], function () {});

            expect(item).toBe(-1);
            expect(item1).toBe(-1);
            expect(item2).toBe(-1);
        });

        it('should return the index of the given item in the array', function () {
            var arr = [1, 2, 3];
            var arr2 = ['1', '2', '3'];

            var res1 = lxHelpers.arrayIndexOf(arr, 2);
            var res2 = lxHelpers.arrayIndexOf(arr2, '3');

            expect(res1).toBe(1);
            expect(res2).toBe(2);
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

            lxHelpers.forEach(obj, function (key, value) { obj[key] = value + 'Action'; });
            lxHelpers.forEach(arr, function (value) { res.push(value + 'Action'); });

            expect(Object.keys(obj).length).toBe(2);
            expect(obj.name).toBe('testAction');
            expect(obj.role).toBe('userAction');
            expect(res[0]).toBe('testAction');
            expect(res[1]).toBe('userAction');
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
});