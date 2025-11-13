const PERMISSIONS = ['F', 'R', 'S', 'T']; // F: Full access, R: Read only, S: Settings, T: Touch

//create an array USER_PERMISSIONS with the combination of each element in PERMISSIONS
function getCombinations(array, n) {
  const results = [];

  // Recursive function to generate combinations
  function generateCombinations(current, start) {
    if (current.length === n) {
      results.push(current);
      return;
    }

    for (let i = start; i < array.length; i++) {
      generateCombinations(current + array[i], i + 1);
    }
  }

  generateCombinations('', 0);
  return results;
}

console.log(PERMISSIONS.map((_, i) => getCombinations(PERMISSIONS, i + 1)));
