const getLeafs = (root, res) => {
    if (!root) return
    if (!root.left && !root.right) {
        res.push(root.val)
        return
    }
    getLeafs(root.left, res)
    getLeafs(root.right, res)
    return res
}
var leafSimilar = function (root1, root2) {
    let temp1 = [], temp2 = []
    getLeafs(root1, temp1)
    getLeafs(root2, temp2)
    let i = 0
    for (i = 0; i < temp1.length; i++) {
        if (temp1[i] !== temp2[i]) {
            return false
        }
    }
    if (i < temp2.length || i < temp1.length) return false
    return true
};