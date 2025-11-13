/**
 * @param {number[]} arr
 * @return {number}
 */
var findLengthOfShortestSubarray = function (arr) {
  let n = arr.length;
  let left = 0,
    right = n - 1;
  while (left + 1 < n) {
    if (arr[left] <= arr[left + 1]) {
      left++;
    } else {
      break;
    }
  }

  if (left == n - 1) {
    return 0;
  }

  while (right > left) {
    if (arr[right] >= arr[right - 1]) {
      right--;
    } else {
      break;
    }
  }

  let ans = Math.min(n - left - 1, right);
  for (let i = 0, j = right; i <= left && j < n; ) {
    if (arr[i] <= arr[j]) {
      i++;
      ans = Math.min(ans, j - i - 1);
    } else {
      j++;
    }
  }
  return ans;
};

console.log(findLengthOfShortestSubarray([1, 2, 3, 10, 4, 2, 3, 5]));
