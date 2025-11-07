let solve = (root, min, max) => {
    if (!root) return true
    let isLeftValid = solve(root.left, min, root.val)
    let isRightValid = solve(root.right, root.val, max)
    return root.val > min && root.val < max && isLeftValid && isRightValid
}
var isValidBST = function (root) {
    return solve(root, -Infinity, Infinity)
};

const inorder = (root, res) => {
    if (!root) return res
    inorder(root.left, res)
    res.push(root.val)
    inorder(root.right, res)
}
var isValidBST2 = function (root) {
    let res = []
    inorder(root, res)
    for (let i = 1; i < res.length; i++) {
        if (res[i] <= res[i - 1]) return false
    }
    return true
};