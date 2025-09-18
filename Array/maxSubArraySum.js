const usingBrute = (nums) => {
  let maxSum = -2223333;
  if (nums.length === 1) return nums[0];

  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];
      maxSum = Math.max(maxSum, sum);
      console.log(maxSum, sum);
    }
    maxSum = Math.max(nums[i], maxSum);
  }
  return maxSum;
};
var maxSubArray = function (nums) {
  let sum = 0;
  let maxSum = -8383848484;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    maxSum = Math.max(maxSum, sum);
    if (sum < 0) {
      sum = 0;
    }
  }
  return maxSum;
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
