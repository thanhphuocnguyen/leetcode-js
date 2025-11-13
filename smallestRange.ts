function smallestRange(nums: number[][]): number[] {
  const k = nums.length;
  const indices: number[] = new Array<number>(k);
  for (let i = 0; i < k; i++) {
    indices[i] = 0;
  }
  const range: number[] = [0, Number.POSITIVE_INFINITY];

  while (true) {
    let currMin = Number.POSITIVE_INFINITY;
    let currMax = Number.NEGATIVE_INFINITY;
    let minListIdx = 0;
    for (let i = 0; i < k; i++) {
      let currElIdx = indices[i];
      const currEl = nums[i][currElIdx];
      if (currEl < currMin) {
        currMin = currEl;
        minListIdx = i;
      }
      if (currEl > currMax) {
        currMax = currEl;
      }
    }
    if (currMax - currMin < range[1] - range[0]) {
      range[0] = currMin;
      range[1] = currMax;
    }
    indices[minListIdx] += 1;
    if (indices[minListIdx] == nums[minListIdx].length) {
      break;
    }
  }

  return range;
}

function test() {
  const nums = [
    [-1, 1],
    [-2, 2],
    [-3, 3],
    [-4, 4],
    [-5, 5],
    [-6, 6],
    [-7, 7],
    [-8, 8],
    [-9, 9],
    [-10, 10],
    [-11, 11],
    [-12, 12],
    [-13, 13],
    [-14, 14],
    [-15, 15],
    [-16, 16],
    [-17, 17],
    [-18, 18],
    [-19, 19],
    [-20, 20],
    [-21, 21],
    [-22, 22],
    [-23, 23],
    [-24, 24],
    [-25, 25],
    [-26, 26],
    [-27, 27],
    [-28, 28],
    [-29, 29],
    [-30, 30],
    [-31, 31],
    [-32, 32],
    [-33, 33],
    [-34, 34],
    [-35, 35],
    [-36, 36],
    [-37, 37],
    [-38, 38],
    [-39, 39],
    [-40, 40],
    [-41, 41],
    [-42, 42],
    [-43, 43],
    [-44, 44],
    [-45, 45],
    [-46, 46],
    [-47, 47],
    [-48, 48],
    [-49, 49],
    [-50, 50],
    [-51, 51],
    [-52, 52],
    [-53, 53],
    [-54, 54],
    [-55, 55],
  ];

  console.log(smallestRange(nums));
}

test();
