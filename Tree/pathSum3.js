// https://leetcode.com/problems/path-sum-iii/description/
var pathSum = function(root, targetSum) {
    let countPath=0
    function dfs(root,arr,sum){
        if(!root) return
        arr.push(root.val)
        for(let i=arr.length-1;i>=0;i--){
            sum+=arr[i]
            if(sum===targetSum){
                countPath++
            }
        }
        dfs(root.left,arr,0)
        dfs(root.right,arr,0)
        arr.pop()
    }

    dfs(root,[],0)
    return countPath
};