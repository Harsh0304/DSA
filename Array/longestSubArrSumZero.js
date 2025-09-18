const longestSubArrSumZero = (arr) => {
  // code here
  let maxLen = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    let s = 0;
    for (let j = i; j < arr.length; j++) {
      s += arr[j];
      if (s === 0) {
        maxLen = Math.max(maxLen, j - i + 1);
      }
    }
  }
  return maxLen === -Infinity ? 0 : maxLen;
};
const optimalSolution = (arr) => {
  let maxi = 0;
  let sum = 0;
  let mpp = {};

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum === 0) {
      maxi = i + 1;
    } else {
      if (mpp[sum] !== undefined) {
        maxi = Math.max(maxi, i - mpp[sum]);
      } else {
        mpp[sum] = i;
      }
    }
  }

  return maxi;
};
