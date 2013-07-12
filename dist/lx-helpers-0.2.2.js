/*!
 * lx-helpers - v0.2.2 - 2013-07-12
 * https://github.com/litixsoft/lx-helpers
 *
 * Copyright (c) 2013 Litixsoft GmbH
 * Licensed MIT
 */

(function (exports) {
    'use strict';

    function isEmptyArray (array) {
        return array === undefined || array === null || (exports.isArray(array) && exports.isEmpty(array));
    }

    /**
     * Gets the full type of the value.
     *
     * @param {*} value The value to test.
     * @returns {string}
     */
    exports.getType = function (value) {
        return Object.prototype.toString.call(value);
    };

    /**
     * Returns if the value is an array.
     *
     * @param {*} value The value to test.
     * @returns {boolean}
     */
    exports.isArray = function (value) {
        return exports.getType(value) === '[object Array]';
    };

    /**
     * Returns if the value is an object.
     *
     * @param {*} value The value to test.
     * @returns {boolean}
     */
    exports.isObject = function (value) {
        return exports.getType(value) === '[object Object]';
    };

    /**
     * Returns if the value is a function.
     *
     * @param {*} value The value to test.
     * @returns {boolean}
     */
    exports.isFunction = function (value) {
        return exports.getType(value) === '[object Function]';
    };

    /**
     * Returns if the value is a Date.
     *
     * @param {*} value The value to test.
     * @returns {boolean}
     */
    exports.isDate = function (value) {
        return exports.getType(value) === '[object Date]';
    };

    /**
     * Returns if the value has no items/keys.
     *
     * @param {*} value The value to test.
     * @returns {boolean}
     */
    exports.isEmpty = function (value) {
        if (exports.isArray(value)) {
            return value.length === 0;
        }

        if (exports.isObject(value)) {
            return Object.keys(value).length === 0;
        }

        return true;
    };

    /**
     * Returns the first item of the array which matchs the predicate.
     *
     * @param {Array} array The array.
     * @param {Function} predicate The predicate function.
     * @param {Object=} context The context of this.
     * @return {*}
     */
    exports.arrayFirst = function (array, predicate, context) {
        if (isEmptyArray(array)) {
            return null;
        }

        if (!exports.isArray(array)) {
            throw new Error('Param "array" is of type ' + exports.getType(array) + '! Type [object Array] expected');
        }

        for (var i = 0, j = array.length; i < j; i++) {
            if (predicate.call(context, array[i])) {
                return array[i];
            }
        }

        return null;
    };

    /**
     * Perform action for each array item.
     *
     * @param {Array} array The array.
     * @param {Function} action The action to perform with each array item.
     * @param {Object=} context The context of this.
     */
    exports.arrayForEach = function (array, action, context) {
        if (!exports.isArray(array)) {
            throw new Error('Param "array" is of type ' + exports.getType(array) + '! Type [object Array] expected');
        }

        return exports.forEach(array, action, context);
    };

    /**
     * Return the index of the item in the array.
     *
     * @param {Array} array The array.
     * @param {*} item The item to search for.
     * @return {Number}
     */
    exports.arrayIndexOf = function (array, item) {
        if (isEmptyArray(array)) {
            return -1;
        }

        if (!exports.isArray(array)) {
            throw new Error('Param "array" is of type ' + exports.getType(array) + '! Type [object Array] expected');
        }

        if (typeof Array.prototype.indexOf === 'function') {
            return Array.prototype.indexOf.call(array, item);
        }

        for (var i = 0, j = array.length; i < j; i++) {
            if (array[i] === item) {
                return i;
            }
        }

        return -1;
    };

    /**
     * Removes the item from the array.
     *
     * @param {Array} array The array.
     * @param {*} itemToRemove The item to remove.
     * @param {Object=} context The context of this.
     */
    exports.arrayRemoveItem = function (array, itemToRemove, context) {
        if (isEmptyArray(array)) {
            return;
        }

        if (!exports.isArray(array)) {
            throw new Error('Param "array" is of type ' + exports.getType(array) + '! Type [object Array] expected');
        }

        var index = exports.arrayIndexOf(array, itemToRemove, context);

        if (index >= 0) {
            array.splice(index, 1);
        }
    };

    /**
     * Applies the mapping function on each item of the array and return the mapped array.
     *
     * @param {Array} array The array.
     * @param {Function} mapping The mapping function.
     * @param {Object=} context The context of this.
     * @return {Array}
     */
    exports.arrayMap = function (array, mapping, context) {
        var result = [];

        if (isEmptyArray(array)) {
            return result;
        }

        if (!exports.isArray(array)) {
            throw new Error('Param "array" is of type ' + exports.getType(array) + '! Type [object Array] expected');
        }

        for (var i = 0, j = array.length; i < j; i++) {
            result.push(mapping.call(context, array[i]));
        }

        return result;
    };

    /**
     * Gets the distinct values of an array.
     *
     * @param {Array} array The array.
     * @param {Object=} context The context of this.
     * @return {Array}
     */
    exports.arrayGetDistinctValues = function (array, context) {
        var result = [];

        if (isEmptyArray(array)) {
            return result;
        }

        if (!exports.isArray(array)) {
            throw new Error('Param "array" is of type ' + exports.getType(array) + '! Type [object Array] expected');
        }

        for (var i = 0, j = array.length; i < j; i++) {
            if (exports.arrayIndexOf(result, array[i], context) < 0) {
                result.push(array[i]);
            }
        }

        return result;
    };

    /**
     * Filters an array.
     *
     * @param {Array} array The array.
     * @param {Function} predicate The predicate function.
     * @param {Object=} context The context of this.
     * @return {Array}
     */
    exports.arrayFilter = function (array, predicate, context) {
        var result = [];

        if (isEmptyArray(array)) {
            return result;
        }

        if (!exports.isArray(array)) {
            throw new Error('Param "array" is of type ' + exports.getType(array) + '! Type [object Array] expected');
        }

        for (var i = 0, j = array.length; i < j; i++) {
            if (predicate.call(context, array[i])) {
                result.push(array[i]);
            }
        }

        return result;
    };

    /**
     * Pushes the values to the array in one step.
     *
     * @param {Array} array The array.
     * @param {Array} valuesToPush The values to push in the array.
     * @param {Boolean=} clearArray Should the array be cleared before pushing the new values.
     * @return {Array}
     */
    exports.arrayPushAll = function (array, valuesToPush, clearArray) {
        array = array || [];

        if (!exports.isArray(array)) {
            throw new Error('Param "array" is of type ' + exports.getType(array) + '! Type [object Array] expected');
        }

        if (!exports.isArray(valuesToPush)) {
            throw new Error('Param "valuesToPush" is of type ' + exports.getType(valuesToPush) + '! Type [object Array] expected');
        }

        if (clearArray) {
            array.length = 0;
        }

        array.push.apply(array, valuesToPush);

        return array;
    };

    /**
     * Performs action for each item in object.
     *
     * @param {Object} obj The object.
     * @param {function(key, value)} action The action to perform with each object item.
     * @param {Object=} context The context of this.
     */
    exports.objectForEach = function (obj, action, context) {
        if (!exports.isObject(obj)) {
            throw new Error('Param "obj" is of type ' + exports.getType(obj) + '! Type [object Object] expected');
        }

        return exports.forEach(obj, action, context);
    };

    /**
     * Performs action for each item.
     *
     * @param {Array|Object|Function} obj The object with items.
     * @param {Function} action The action to perform with each item.
     * @param {Object=} context The context of this.
     */
    exports.forEach = function (obj, action, context) {
        if (exports.isEmpty(obj)) {
            return;
        }

        if (!exports.isFunction(action)) {
            throw new Error('Param "action" is of type ' + Object.prototype.toString.call(obj) + '! Type [object Function] expected');
        }

        var i, length, keys;

        if (exports.isArray(obj)) {
            for (i = 0, length = obj.length; i < length; i++) {
                action.call(context, obj[i]);
            }
        }

        if (exports.isObject(obj)) {
            keys = Object.keys(obj);
            length = keys.length;

            for (i = 0; i < length; i++) {
                action.call(context, keys[i], obj[keys[i]]);
            }
        }
    };

    /**
     * Creates a new GUID
     *
     * @returns {string}
     */
    exports.createGuid = function () {
        var S4 = function () {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        };

        return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4());
    };

    /**
     * Capitalize the first letter of a word and returns the word.
     *
     * @param {String} word The word.
     * @return {String} The capitalized word.
     */
    exports.capitalizeFirstLetter = function (word) {
        word = word || '';

        if (typeof word !== 'string') {
            throw new Error('Param "word" is of type ' + typeof word + '! Type String expected');
        }

        return word.charAt(0).toUpperCase() + word.slice(1);
    };

    /**
     * Clones a javascript object, array or primitive
     *
     * @param {*} src The source.
     * @returns {*}
     */
    exports.clone = function (src) {
        var result = {};

        function mixin (dest, source, cloneFunc) {
            if (exports.isObject(source)) {
                exports.objectForEach(source, function (key, value) {
                    dest[key] = cloneFunc ? cloneFunc(value) : value;
                });
            }

            return dest;
        }

        if (!src || typeof src !== 'object' || typeof src === 'function') {
            return src;
        }

        // Date
        if (src instanceof Date) {
            return new Date(src.getTime());
        }

        // RegExp
        if (src instanceof RegExp) {
            return new RegExp(src);
        }

        // Array
        if (exports.isArray(src)) {
            result = [];

            exports.arrayForEach(src, function (item) {
                result.push(exports.clone(item));
            });
        }

        return mixin(result, src, exports.clone);
    };

})(typeof(window) === 'undefined' ? module.exports : (window.lxHelpers = window.lxHelpers || {}));