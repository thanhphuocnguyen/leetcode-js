/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumSubarrayLength = function (nums, k) {
  ans = nums.length + 1;
  for (let i = 0; i < nums.length; i++) {
    let orResult = nums[i];
    if (orResult >= k) {
      return 1;
    }
    for (let j = i + 1; j < nums.length; j++) {
      orResult |= nums[j];
      if (orResult >= k) {
        ans = Math.min(ans, j - i + 1);
      }
    }
  }
  return (ans = ans === nums.length + 1 ? -1 : ans);
};

console.log(minimumSubarrayLength([2, 1, 8], 10)); // 2
