const usingCount = (nums) => {
  let countZero = 0,
    countOne = 0,
    countTwo = 0;
  for (let num of nums) {
    if (num === 0) countZero++;
    else if (num === 1) countOne++;
    else countTwo++;
  }
  let i = 0;
  while (countZero > 0) {
    nums[i] = 0;
    countZero--;
    i++;
  }
  while (countOne > 0) {
    nums[i] = 1;
    countOne--;
    i++;
  }
  while (countTwo > 0) {
    nums[i] = 2;
    countTwo--;
    i++;
  }
  return nums;
};

const usingTwoPointers = (nums) => {
  let i = 0,
    j = nums.length - 1,
    k = 0;
  while (k <= j) {
    if (nums[k] === 0) {
      [nums[i], nums[k]] = [nums[k], nums[i]];
      i++;
      k++;
    } else if (nums[k] === 2) {
      [nums[k], nums[j]] = [nums[j], nums[k]];
      j--;
    } else {
      k++;
    }
  }
  return nums;
};

console.log(usingCount([2, 0, 2, 1, 1, 0]));
console.log(usingTwoPointers([2, 0, 2, 1, 1, 0]));
