(function (exports) {
    'use strict';

    var isEmptyArray = function (array) {
        return array === undefined || array === null || (Array.isArray(array) && array.length === 0);
    };

    /**
     * Returns the first item of the array which matchs the predicate.
     *
     * @param {Array} array The array.
     * @param {Function} predicate The predicate function.
     * @param {Object=} predicateOwner The context of this.
     * @return {*}
     */
    exports.arrayFirst = function (array, predicate, predicateOwner) {
        if (isEmptyArray(array)) {
            return null;
        }

        if (!Array.isArray(array)) {
            throw new Error('Parameter "array" is of type ' + typeof array + '! Type Array expected');
        }

        for (var i = 0, j = array.length; i < j; i++) {
            if (predicate.call(predicateOwner, array[i])) {
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
     */
    exports.arrayForEach = function (array, action) {
        if (isEmptyArray(array)) {
            return;
        }

        if (!Array.isArray(array)) {
            throw new Error('Parameter "array" is of type ' + typeof array + '! Type Array expected');
        }

        for (var i = 0, j = array.length; i < j; i++) {
            action(array[i]);
        }
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

        if (!Array.isArray(array)) {
            throw new Error('Parameter "array" is of type ' + typeof array + '! Type Array expected');
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
     */
    exports.arrayRemoveItem = function (array, itemToRemove) {
        if (isEmptyArray(array)) {
            return;
        }

        if (!Array.isArray(array)) {
            throw new Error('Parameter "array" is of type ' + typeof array + '! Type Array expected');
        }

        var index = exports.arrayIndexOf(array, itemToRemove);

        if (index >= 0) {
            array.splice(index, 1);
        }
    };

    /**
     * Removes the item from the array.
     *
     * @param {Array} array The array
     * @param {Function} mapping The mapping function
     * @return {Array}
     */
    exports.arrayMap = function (array, mapping) {
        var result = [];

        if (isEmptyArray(array)) {
            return result;
        }

        if (!Array.isArray(array)) {
            throw new Error('Parameter "array" is of type ' + typeof array + '! Type Array expected');
        }

        for (var i = 0, j = array.length; i < j; i++) {
            result.push(mapping(array[i]));
        }

        return result;
    };

    /**
     * Gets the distinct values of an array.
     *
     * @param {Array} array The array.
     * @return {Array}
     */
    exports.arrayGetDistinctValues = function (array) {
        var result = [];

        if (isEmptyArray(array)) {
            return result;
        }

        if (!Array.isArray(array)) {
            throw new Error('Parameter "array" is of type ' + typeof array + '! Type Array expected');
        }

        for (var i = 0, j = array.length; i < j; i++) {
            if (exports.arrayIndexOf(result, array[i]) < 0) {
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
     * @return {Array}
     */
    exports.arrayFilter = function (array, predicate) {
        var result = [];

        if (isEmptyArray(array)) {
            return result;
        }

        if (!Array.isArray(array)) {
            throw new Error('Parameter "array" is of type ' + typeof array + '! Type Array expected');
        }

        for (var i = 0, j = array.length; i < j; i++) {
            if (predicate(array[i])) {
                result.push(array[i]);
            }
        }

        return result;
    };

    /**
     * Pushes the values to the array in one step.
     *
     * @param {Array} array The array.
     * @param {*} valuesToPush {*} The values to push in the array.
     * @param {Boolean} clearArray Should the array be cleared before pushing the new values.
     * @return {Array}
     */
    exports.arrayPushAll = function (array, valuesToPush, clearArray) {
        if (isEmptyArray(array)) {
            return [];
        }

        if (!Array.isArray(array)) {
            throw new Error('Parameter "array" is of type ' + typeof array + '! Type Array expected');
        }

        if (clearArray) {
            array.length = 0;
        }

        if (valuesToPush instanceof Array) {
            array.push.apply(array, valuesToPush);
        } else {
            for (var i = 0, j = valuesToPush.length; i < j; i++) {
                array.push(valuesToPush[i]);
            }
        }

        return array;
    };

    /**
     * Performs action for each item in object
     *
     * @param {Object} obj The object.
     * @param {function(property, valueOfProperty)} action The action to perform with each object item.
     */
    exports.objectForEach = function (obj, action) {
        if (!obj) {
            return;
        }

        if (typeof obj !== 'object') {
            throw new Error('Parameter "obj" is of type ' + typeof obj + '! Type Object expected');
        }

        var i;
        var keys = Object.keys(obj);
        var length = keys.length;

        for (i = 0; i < length; i++) {
            action(keys[i], obj[keys[i]]);
        }
    };

})(typeof(window) === 'undefined' ? module.exports : (window.lxHelpers = window.lxHelpers || {}));