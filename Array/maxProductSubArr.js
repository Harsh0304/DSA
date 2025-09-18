const bruteForce = (nums) => {
  let maxProd = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    let currProd = nums[i];
    maxProd = Math.max(maxProd, currProd);
    for (let j = i + 1; j < nums.length; j++) {
      currProd = currProd * nums[j];
      if (currProd > maxProd) {
        maxProd = currProd;
      }
    }
  }
  return maxProd;
};
var maxProduct = function (nums) {
  let prevProd = 1;
  let suffProd = 1;
  let maxProd = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (prevProd === 0) prevProd = 1;
    if (suffProd === 0) suffProd = 1;
    suffProd = suffProd * nums[nums.length - i - 1];
    prevProd = prevProd * nums[i];
    maxProd = Math.max(maxProd, Math.max(prevProd, suffProd));
  }
  return maxProd;
};
