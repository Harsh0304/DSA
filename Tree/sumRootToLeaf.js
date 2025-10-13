// https://leetcode.com/problems/sum-root-to-leaf-numbers/description/

var sumNumbers = function(root) {
    let sum=0
   function dfs(root,currAns){
      if(!root) return
      currAns+=root.val
      if(!root.left && !root.right){
        sum+=(+currAns)
        return
      }
      dfs(root.left,currAns)
      dfs(root.right,currAns)
   } 
  dfs(root,"")  
  return sum
};
