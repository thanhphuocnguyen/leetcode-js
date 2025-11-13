/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  const mp = new Map();
  nums1.forEach((num) => {
    mp.set(num, (mp.get(num) ?? 0) + 1);
  });

  const arr1 = [],
    arr2 = [];

  nums2.forEach((num) => {
    if (!mp.has(num)) {
      arr2.push(num);
      mp.set(num, 0);
    } else {
      mp.set(num, 0);
    }
  });

  mp.forEach((v, k) => {
    if (v > 0) {
      arr1.push(k);
    }
  });

  return [arr1, arr2];
};

console.log(
  findDifference(
    [-80, -15, -81, -28, -61, 63, 14, -45, -35, -10],
    [-1, -40, -44, 41, 10, -43, 69, 10, 2]
  )
);
console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]));
