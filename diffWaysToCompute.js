/**
 * @param {string} expression
 * @return {number[]}
 */

var zero = '0'.charCodeAt(0);
var nine = '9'.charCodeAt(0);
var diffWaysToCompute = function (expression) {
  const n = expression.length;
  const dp = new Array(n);
  dp.fill(new Array(n));

  initializeBaseCase(expression, dp);
  for (let length = 3; length <= n; length++) {
    for (let start = 0; start + length - 1 < n; start++) {
      let end = start + length - 1;
      processSubExpr(expression, dp, start, end);
    }
  }
  return dp[0][n - 1];
};

const initializeBaseCase = (expr, dp) => {
  let n = expr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      dp[i][j] = [];
    }
  }

  for (let i = 0; i < n; i++) {
    if (isDigit(expr[i])) {
      let digit1 = expr.charCodeAt(i) - zero;
      if (i + 1 < n && isDigit(expr[i + 1])) {
        let digit2 = expr.charCodeAt(i + 1) - zero;
        dp[i][i + 1].push(digit1 * 10 + digit2);
      }
      dp[i][i].push(digit1);
    }
  }
};

const processSubExpr = (expr, dp, start, end) => {
  for (let i = start; i <= end; i++) {
    if (isDigit(expr[i])) {
      continue;
    }
    // skip the operator
    const leftResults = dp[start][i - 1];
    const rightResults = dp[i + 1][end];
    computeResults(expr[i], leftResults, rightResults, dp[start][end]);
  }
};

const computeResults = (op, left, right, ans) => {
  for (const numLeft of left) {
    for (const numRight of right) {
      switch (op) {
        case '+':
          ans.push(numLeft + numRight);
          break;
        case '-':
          ans.push(numLeft - numRight);
          break;
        case '*':
          ans.push(numLeft * numRight);
          break;
        default:
          break;
      }
    }
  }
};

const isDigit = (c) => {
  return c.charCodeAt(0) >= zero && c <= nine;
};

console.log(diffWaysToCompute('2*3-4*5'));
