function maximumTripletValue(nums: number[]): number {
  const n = nums.length;
  const prefixMax = new Array<number>(n);
  const suffixMax = new Array<number>(n);
  prefixMax[0] = nums[0];
  suffixMax[n - 1] = nums[n - 1];
  for (let i = 1; i < n; i++) {
    prefixMax[i] = Math.max(prefixMax[i - 1], nums[i]);
    suffixMax[n - 1 - i] = Math.max(suffixMax[n - i], nums[n - 1 - i]);
  }
  let ans = 0;
  for (let i = 1; i < n - 1; i++) {
    ans = Math.max(ans, (prefixMax[i - 1] - nums[i]) * suffixMax[i + 1]);
  }
  return ans;
}

maximumTripletValue([12, 6, 1, 2, 7]); // Output: 60
