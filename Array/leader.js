// usingBrute(a){
//     let result=[]
//     for(let i=0;i<a.length;i++){
//         let isLeader=true
//         for(let j=i+1;j<a.length;j++){
//             if(a[i]<a[j]){
//                 isLeader=false
//                 break
//             }
//         }

//         if(isLeader===true){
//             result.push(a[i])
//         }

//     }
//     return result
// }
// Function to find the leaders in the array.
const leaders = (a) => {
  // code here
  let ans = [];
  let pos = 0;
  let prevLeader = -Infinity;
  for (let i = a.length - 1; i >= 0; i--) {
    if (a[i] >= prevLeader) {
      ans[pos] = a[i];
      pos++;
      prevLeader = a[i];
    }
  }
  return ans.reverse();
};

console.log(leaders([16, 17, 4, 3, 5, 2]));
console.log(Math.floor(1 / 3));
