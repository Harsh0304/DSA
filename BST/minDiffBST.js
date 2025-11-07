const inorder = (root, res) => {
    if (!root) return res
    inorder(root.left, res)
    res.push(root.val)
    inorder(root.right, res)
}
var minDiffInBST = function (root) {
    let res = []
    inorder(root, res)
    let minVal = Infinity
    for (let i = 1; i < res.length; i++) {
        minVal = Math.min(minVal, (res[i] - res[i - 1]))
    }
    return minVal
};
var minDiffInBSTMethod2 = function (root) {
    let minVal = Infinity
    let prev = null
    function solve(root) {
        if (!root) return
        solve(root.left)
        if (prev !== null) {
            minVal = Math.min(minVal, (root.val - prev))
        }
        prev = root.val
        solve(root.right)
    }

    solve(root)
    return minVal
};