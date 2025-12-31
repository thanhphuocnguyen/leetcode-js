const howManyBanas = (piles: number[], k: number): number => {
  let hours = 0;
  for (let banas of piles) {
    hours += Math.ceil(banas / k);
  }
  return hours;
};

function minEatingSpeed(piles: number[], h: number): number {
  let min = piles[0];
  let max = piles[0];

  for (let i = 0; i < piles.length; i++) {
    if (piles[i] < min) {
      min = piles[i];
    }
    if (piles[i] > max) {
      max = piles[i];
    }
  }
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let hours = howManyBanas(piles, middle);

    if (hours > h) {
      min = middle + 1;
    } else {
      max = middle - 1;
    }
  }
  return min;
}

console.log(minEatingSpeed([3, 6, 7, 11], 8));
