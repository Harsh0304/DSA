const findInorder = (root, res) => {
    if (!root) return res
    findInorder(root.left, res)
    res.push(root.val)
    findInorder(root.right, res)
}
var findTarget = function (root, k) {
    res = []
    findInorder(root, res)
    let i = 0, j = res.length - 1
    while (i < j) {
        if ((res[i] + res[j]) === k) {
            return true
        }
        else if ((res[i] + res[j]) > k) {
            j--
        }
        else if ((res[i] + res[j]) < k) {
            i++
        }
    }
    return false
};