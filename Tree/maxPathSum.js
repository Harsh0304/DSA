var maxPathSum = function(root) {
    let maxSum=-Infinity
   function dfs(root){
        if(!root) return 0 
        let leftSum=Math.max(0,dfs(root.left))
        let rightSum=Math.max(0,dfs(root.right))
        maxSum=Math.max(maxSum,root.val+leftSum+rightSum)
        return root.val+Math.max(leftSum,rightSum)
   }
   dfs(root)
   return maxSum
};

const maxPathSumSecondAproach = function(root) {
    let maxSum=-Infinity
   function dfs(root){
        if(!root) return 0 
        let leftSum=dfs(root.left)
        let rightSum=dfs(root.right)
        if(leftSum<0) leftSum=0
        if(rightSum<0) rightSum=0
        maxSum=Math.max(maxSum,root.val+leftSum+rightSum)
        return root.val+Math.max(leftSum,rightSum)
   }
   dfs(root)
   return maxSum
};