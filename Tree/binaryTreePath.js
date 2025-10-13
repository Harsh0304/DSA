const binaryTreePaths = function(root) {
    let result=[]
    function dfs(root,path){
      if(!root) return 
      path+=root.val
      if(!root.left && !root.right){
         result.push(path)
         return 
      }
      path+="->"
      dfs(root.left,path)
      dfs(root.right,path)
    }
    dfs(root,"")
    return result
};