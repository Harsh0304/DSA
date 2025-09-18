var findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let maxCount = -1;
  for (let num of nums) {
    if (num === 1) {
      count++;
    } else {
      maxCount = Math.max(maxCount, count);
      count = 0;
    }
  }
  maxCount = Math.max(maxCount, count);

  return maxCount;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
