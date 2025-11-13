/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function (nums) {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = n - 1; j > i; j--) {
      const product = nums[i] * nums[j];
      const productSet = new Set();
      for (let k = i + 1; k < j; k++) {
        if (product % nums[k] == 0) {
          const quotient = product / nums[k];
          if (productSet.has(quotient)) {
            ans += 8;
          }
          productSet.add(nums[k]);
        }
      }
    }
  }
  return ans;
};

console.log(tupleSameProduct([1, 2, 4, 5, 10]));
