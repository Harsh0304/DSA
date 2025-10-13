var buildTree = function (preorder, inorder) {
    let i = 0
    function dfs(s, e) {
        if (s > e) return null
        let rootVal = preorder[i++]
        let root = new TreeNode(rootVal)
        let inorderIndex = inorder.indexOf(rootVal)
        root.left = dfs(s, inorderIndex - 1)
        root.right = dfs(inorderIndex + 1, e)
        return root
    }
    return dfs(0, inorder.length - 1)
};

var buildTree2 = function (preorder, inorder) {
    let inorderMap = new Map()
    for (let i = 0; i < inorder.length; i++) {
        inorderMap.set(inorder[i], i)
    }
    let i = 0
    function dfs(s, e) {
        if (s > e) return null
        let rootVal = preorder[i++]
        let root = new TreeNode(rootVal)
        let inorderIndex = inorderMap.get(rootVal)
        root.left = dfs(s, inorderIndex - 1)
        root.right = dfs(inorderIndex + 1, e)
        return root
    }
    return dfs(0, inorder.length - 1)
};