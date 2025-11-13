/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    let x = 0;

    const combined = functions.reduceRight(
      (acc, f) => (num) => acc(f(num)),
      (num) => num
    );
    return combined(x);
  };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
const fn = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
fn(4); // 65
