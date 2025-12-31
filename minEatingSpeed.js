var howManyBanas = function (piles, k) {
  var hours = 0;
  for (var _i = 0, piles_1 = piles; _i < piles_1.length; _i++) {
    var banas = piles_1[_i];
    hours += Math.ceil(banas / k);
  }
  return hours;
};
function minEatingSpeed(piles, h) {
  var min = piles[0];
  var max = piles[0];
  for (var i = 0; i < piles.length; i++) {
    if (piles[i] < min) {
      min = piles[i];
    }
    if (piles[i] > max) {
      max = piles[i];
    }
  }
  while (min <= max) {
    var middle = Math.floor((min + max) / 2);
    var hours = howManyBanas(piles, middle);
    if (hours > h) {
      min = middle + 1;
    } else {
      max = middle - 1;
    }
  }
  return min;
}
console.log(minEatingSpeed([3, 6, 7, 11], 8));
