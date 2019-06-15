## Check JavaScript Data Types
JavaScript variables can hold many data types: numbers, strings, booleans, objects, array and more.

Every object has a toString() method that is automatically called when the object is to be represented as a text value or when an object is referred to in a manner in which a string is expected. By default, the toString()method is inherited by every object descended from Object. If this method is not overridden in a custom object,toString() returns “[object type]”, where type is the object type.

We can leverage it to check data type:

```js
// ES6
const isType = type => target => Object.prototype.toString.call(target) === `[object ${type}]`;
const isObject = isType('Object');
const isNumber = isType('Number');
const isArray = isType('Array');

console.log(isObject({foo: 'bar'})) //true
console.log(isNumber(5)); // true
console.log(isArray([])); // true
```