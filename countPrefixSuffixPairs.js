/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function (words) {
  words.sort((a, b) => a.length - b.length);
  let ans = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      ans += isPrefixAndSuffix(words[i], words[j]) ? 1 : 0;
    }
  }
  return ans;
};

var isPrefixAndSuffix = function (word1, word2) {
  const n1 = word1.length;
  const n2 = word2.length;
  for (let i = 0; i < n1; i++) {
    if (word1[i] != word2[i] || word1[i] != word2[n2 - n1 + i]) {
      return false;
    }
  }
  return true;
};

console.log(countPrefixSuffixPairs(['a', 'aba', 'ababa', 'aa']));
