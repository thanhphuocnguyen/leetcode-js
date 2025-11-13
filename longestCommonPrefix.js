/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function (arr1, arr2) {
  const trie = new Trie();
  for (const num of arr1) {
    trie.insert(num);
  }

  let longestPrefix = 0;
  for (const num of arr2) {
    longestPrefix = Math.max(trie.findLongestPrefix(num), longestPrefix);
  }
  return longestPrefix;
};
class TrieNode {
  constructor() {
    this.children = new Array(10);
  }
}
class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(num) {
    let node = this.root;
    for (let char of num.toString()) {
      let digit = parseInt(char);
      if (node.children[digit] == undefined) {
        node.children[digit] = new TrieNode();
      }
      node = node.children[digit];
    }
  }

  findLongestPrefix(num) {
    let node = this.root;
    let len = 0;
    for (let char of num.toString()) {
      let digit = parseInt(char);
      if (node.children[digit] == undefined) {
        break;
      }
      node = node.children[digit];
      len++;
    }
    return len;
  }
}

longestCommonPrefix([1, 10, 100], [1000]);
