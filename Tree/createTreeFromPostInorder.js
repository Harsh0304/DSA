var buildTree = function (inorder, postorder) {
    let inorderMap = new Map()
    for (let i = 0; i < inorder.length; i++) {
        inorderMap.set(inorder[i], i)
    }
    let i = postorder.length - 1
    function dfs(s, e) {
        if (s > e) return null
        let rootVal = postorder[i--]
        let root = new TreeNode(rootVal)
        let inorderIndex = inorderMap.get(rootVal)
        root.right = dfs(inorderIndex + 1, e)
        root.left = dfs(s, inorderIndex - 1)
        return root
    }
    return dfs(0, inorder.length - 1)
};