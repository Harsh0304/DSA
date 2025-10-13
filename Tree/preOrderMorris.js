var preorderTraversal = function (root) {
    if (!root) return []
    let res = []
    let temp = root
    while (temp) {
        if (!temp.left) {
            res.push(temp.val)
            temp = temp.right
        }
        else {
            let curr = temp.left
            while (curr.right && curr.right !== temp) {
                curr = curr.right
            }
            if (curr.right === null) {
                curr.right = temp
                res.push(temp.val)
                temp = temp.left
            } else {
                curr.right = null
                temp = temp.right
            }

        }
    }
    return res
};