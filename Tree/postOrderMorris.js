var postorderTraversal = function (root) {
    if (!root) return []
    let res = []
    let temp = root
    while (temp) {
        if (!temp.right) {
            res.push(temp.val)
            temp = temp.left
        }
        else {
            let curr = temp.right
            while (curr.left && curr.left !== temp) {
                curr = curr.left
            }
            if (curr.left === null) {
                curr.left = temp
                res.push(temp.val)
                temp = temp.right
            } else {
                curr.left = null
                temp = temp.left
            }

        }
    }
    return res.reverse()
};