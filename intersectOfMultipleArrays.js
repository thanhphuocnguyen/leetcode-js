/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function (nums) {
  freq = new Array(1001).fill(0);
  nums.forEach((arr) => {
    arr.forEach((num) => {
      freq[num]++;
    });
  });
  const ans = [];
  freq.forEach((f, i) => {
    if (f == nums.length) {
      ans.push(i);
    }
  });
  return ans;
};

console.log(
  intersection([
    [3, 1, 2, 4, 5],
    [1, 2, 3, 4],
    [3, 4, 5, 6],
  ])
);
