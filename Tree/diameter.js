 var maxDepth = function(root) {
    if(!root) return 0
    return 1+Math.max(maxDepth(root.left),maxDepth(root.right))
};
const method1=(root)=>{
     if(!root) return 0
    let leftAns=diameterOfBinaryTree(root.left)
    let rigthAns=diameterOfBinaryTree(root.right)
    let height=maxDepth(root.left)+maxDepth(root.right)
    return Math.max(height,leftAns,rigthAns)
}
var diameterOfBinaryTree = function(root) {
    let ans=0
    function heigth(root){
        if(!root) return 0
        let leftHeight=heigth(root.left)
        let rightHeight=heigth(root.right)
        ans=Math.max(ans,leftHeight+rightHeight)
        return Math.max(leftHeight,rightHeight)+1
    }
    heigth(root)
    return ans
};