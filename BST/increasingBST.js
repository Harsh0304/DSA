// https://leetcode.com/problems/increasing-order-search-tree/description/
const inorder = (root, res) => {
    if (!root) return res
    inorder(root.left, res)
    res.push(root.val)
    inorder(root.right, res)
}
var increasingBST = function (root) {
    let res = []
    inorder(root, res)
    let newRoot = new TreeNode(res[0])
    let curr = newRoot
    for (let i = 1; i < res.length; i++) {
        let node = new TreeNode(res[i])
        curr.right = node
        curr = node
    }
    return newRoot
};
var increasingBST2 = function (root) {
    let dummy = new TreeNode(-1)
    let curr = dummy
    function solve(root) {
        if (!root) return
        solve(root.left)
        curr.right = root
        root.left = null
        curr = root
        solve(root.right)
    }
    solve(root)
    return dummy.right
};