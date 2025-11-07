function insert(root, nodeVal) {
    if (root === null) {
        return new TreeNode(nodeVal)
    }
    if (root.val > nodeVal)
        root.left = insert(root.left, nodeVal)
    else {
        root.right = insert(root.right, nodeVal)
    }
    return root
}
var bstFromPreorder = function (preorder) {
    let root = null
    for (let i = 0; i < preorder.length; i++) {
        root = insert(root, preorder[i])
    }
    return root
};