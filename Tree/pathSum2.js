var pathSum = function(root, targetSum) {
    let result=[]
    function dfs(root,sum,ans){
        if(!root) return 
        sum+=root.val
        ans.push(root.val)
        if(!root.left && !root.right){
            if(sum===targetSum){
              result.push([...ans])
            }
        }
       dfs(root.left,sum,ans)
       dfs(root.right,sum,ans)
       ans.pop()
    }
   
   dfs(root,0,[])
   return result
};
var pathSum2 = function(root, targetSum) {
    let result=[]
    function dfs(root,sum,ans){
        if(!root) return 
        sum+=root.val
        ans=[...ans,root.val]
        if(!root.left && !root.right){
            if(sum===targetSum){
              result.push(ans)
            }else{
                return
            }
        }
       dfs(root.left,sum,ans)
       dfs(root.right,sum,ans)
    }
   
   dfs(root,0,[])
   return result
};