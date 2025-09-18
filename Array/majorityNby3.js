/**
 * @param {number[]} nums
 * @return {number[]}
 */
//  const countMethod=()=>{
//     let map={}
//     for(let i=0;i<nums.length;i++){
//         if(map[nums[i]]){
//             map[nums[i]]+=1
//         }else{
//             map[nums[i]]=1
//         }
//     }
//     let ans=[]
//     let n=Math.floor(nums.length/3)
//     for(let key in map){
//         if(map[key]>n){
//             ans.push(+key)
//         }
//     }
//     return ans
//  }
var majorityElement = function (nums) {
  let majority1 = null,
    majority2 = null;
  let c1 = 0,
    c2 = 0;
  for (let num of nums) {
    if (c1 === 0 && num !== majority2) {
      majority1 = num;
      c1 = 1;
    } else if (c2 === 0 && num !== majority1) {
      majority2 = num;
      c2 = 1;
    } else if (majority1 === num) {
      c1++;
    } else if (majority2 === num) {
      c2++;
    } else {
      c1--;
      c2--;
    }
  }
  c1 = 0;
  c2 = 0;
  for (let num of nums) {
    if (num === majority1) {
      c1++;
    } else if (num === majority2) {
      c2++;
    }
  }
  let ans = [];
  if (c1 > Math.floor(nums.length / 3)) ans.push(majority1);
  if (c2 > Math.floor(nums.length / 3)) ans.push(majority2);
  return ans;
};
console.log(majorityElement([3, 2, 3]));
