/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const n = height.length;
  const maxHeightLeft = new Array(n);
  maxHeightLeft[0] = height[0];
  const maxHeightRight = new Array(n);
  maxHeightRight[n - 1] = height[n - 1];
  for (let i = 1; i < n; i++) {
    maxHeightLeft[i] = Math.max(maxHeightLeft[i - 1], height[i]);
    maxHeightRight[n - 1 - i] = Math.max(
      maxHeightRight[n - i],
      height[n - 1 - i]
    );
  }
  let ans = 0;

  for (let i = 0; i < n; i++) {
    ans += Math.min(maxHeightLeft[i], maxHeightRight[i]) - height[i];
  }

  return ans;
};

trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
