var isSubtree = function(root, subRoot) {
    if(!root) return false
    if(isSameTree(root,subRoot)){
        return true
    }
    return isSubtree(root.left,subRoot) || isSubtree(root.right,subRoot)
};

var isSameTree = function(p, q) {
    if(!p && !q) return true
    if(!p || !q) return false
    return (p.val===q.val) && isSameTree(p.left,q.left) && isSameTree(p.right,q.right)
};