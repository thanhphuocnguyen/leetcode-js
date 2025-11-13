/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
  if (Array.isArray(obj)) {
    const newArr = [];
    for (const el of obj) {
      if (el) {
        newArr.push(compactObject(el));
      }
    }
    return newArr;
  } else if (typeof obj === 'object') {
    const newObj = {};
    for (const key in obj) {
      if (obj[key]) {
        newObj[key] = compactObject(obj[key]);
      }
    }
    return newObj;
  } else {
    return obj;
  }
};

console.log(compactObject([null, 0, 5, [0], [false, 16]]));
