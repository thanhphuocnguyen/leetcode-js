/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  if (n == 0) {
    return arr;
  }
  const ans = [];
  for (const el of arr) {
    if (Array.isArray(el)) {
      ans.push(...flat(el, n - 1));
    } else {
      ans.push(el);
    }
  }
  return ans;
};

console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 2));
