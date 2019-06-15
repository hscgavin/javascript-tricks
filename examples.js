const isType = type => target => Object.prototype.toString.call(target) === `[object ${type}]`;
const isObject = isType('Object');
const isNumber = isType('Number');
const isArray = isType('Array');
console.log(isObject({foo: 'bar'}))
console.log(isNumber(5));
console.log(isArray([]));

const errorHandled = async (asyncFunc) => {
  try {
    const res = await asyncFunc();
    return [null, res];
  } catch (error) {
    return [error, null]
  }
}
const [error, res] = await errorHandled(asyncFunc);