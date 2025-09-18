const singleNumber = function (nums) {
  let map = {};
  for (let num of nums) {
    if (num in map) {
      map[num] += 1;
    } else {
      map[num] = 1;
    }
  }
  for (let val in map) {
    if (map[val] === 1) {
      return Number(val);
    }
  }
};
const usingXOR = (nums) => {
  let result = 0;
  for (let num of nums) {
    result = result ^ num;
  }
  return result;
};

let nums = [2, 3, 2, 1, 3];
// console.log(singleNumber(nums));
console.log(usingXOR(nums));
