/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function (nums, p) {
  let total = 0;
  for (let num of nums) {
    total += num;
  }

  if (total % p === 0) {
    return 0;
  }

  let min = nums.length;

  for (let start = 0; start < nums.length; start++) {
    let subSum = 0;
    for (let end = start; end < nums.length; end++) {
      subSum += nums[end];
      let remainSum = (total - subSum) % p;
      if (remainSum === 0) {
        min = Math.min(min, end - start + 1);
      }
    }
  }

  return min === nums.length ? -1 : min;
};

console.log(minSubarray([6, 3, 5, 2], 9)); // 1
