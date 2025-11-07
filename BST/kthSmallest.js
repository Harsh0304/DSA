const inOrder = (root, res) => {
    if (!root) return res
    inOrder(root.left, res)
    res.push(root.val)
    inOrder(root.right, res)
}
var kthSmallest = function (root, k) {
    let res = []
    inOrder(root, res)
    if (res.length === 0) return []
    return res[k - 1]
};
var kthSmallest2 = function (root, k) {
    function helper(root) {
        if (!root) return null
        let left = helper(root.left)
        if (left !== null) return left
        k--
        if (k === 0) {
            return root.val
        }
        return helper(root.right)
    }
    return helper(root)
};