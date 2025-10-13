var lowestCommonAncestor = function(root, p, q) {
    if(!root) return root
    if(root===p) return root
    if(root===q) return root
    let leftAns=lowestCommonAncestor(root.left,p,q)
    let rightAns=lowestCommonAncestor(root.right,p,q)
    if(leftAns!==null && rightAns!==null){
        return root
    }
    if(leftAns!==null) return leftAns
    else {
        return rightAns
    }   
    
};