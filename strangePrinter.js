/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function (s) {
  s = rmDupConsecutive(s);
  const n = s.length;
  const memo = new Array(n);
  for (let i = 0; i < n; i++) {
    memo[i] = new Array(n);
  }
  return dp(0, n - 1, s, memo);
};

const dp = (start, end, str, memo) => {
  if (start > end) return 0;
  if (memo[start][end] !== undefined) return memo[start][end];
  // calculate base case first
  let minTurns = 1 + dp(start + 1, end, str, memo);
  for (let i = start + 1; i <= end; i++) {
    if (str[start] === str[i]) {
      // split string to two parts and calculate if there are cases that lower than current minTurns
      let newMinTurns = dp(start, i - 1, str, memo) + dp(i + 1, end, str, memo);
      minTurns = Math.min(newMinTurns, minTurns);
    }
  }
  memo[start][end] = minTurns;
  return minTurns;
};

const rmDupConsecutive = (s) => {
  const n = s.length;
  let shorten = '';
  let i = 0;
  while (i < n) {
    let curr = s[i];
    shorten += curr;
    while (i < n && s[i] == curr) {
      i++;
    }
  }
  return shorten;
};

console.log(strangePrinter('abcabcabc')); // 2
