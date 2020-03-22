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

## Error Handling with async/await

If you don't like to wrap async/await inside a try/catch block when everytime you use it. try this:
```js
const errorHandled = async (asyncFunc) => {
  try {
    const res = await asyncFunc();
    return [null, res];
  } catch (error) {
    return [error, null]
  }
}

// usage
const [error, res] = await errorHandled(asyncFunc)
```

## Escape html to prevent xss

```js
const escapeHTML = str => {
  str.replace(
    /[&<>'"]/g,
    tag =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;"
      }[tag] || tag)
  );
};
```

## Detect device type - mobile or desktop

```js
const detectDeviceType = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
    ? "Mobile"
    : "Desktop";
};
```
