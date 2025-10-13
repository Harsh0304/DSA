const solve=(root,p,level)=>{
    if(!root) return 0
     if(root.val===p) return level
     return solve(root.left,p,level+1) || solve(root.right,p,level+1)
}
const findLevel=(root,p)=>{
    if(!root) return 0
    return solve(root,p,1)
}
const checkSiblings=(root,p,q)=>{
    if(!root) return false
    if(root.left && root.right){
        if((root.left.val===p && root.right.val===q) || (root.left.val===q && root.right.val===p)){
            return true
        }
    }
    return checkSiblings(root.left,p,q) || checkSiblings(root.right,p,q)
}
var isCousins = function(root, x, y) {
    if(!root) return false
    return (findLevel(root,x)===findLevel(root,y)) && !checkSiblings(root,x,y)
};