var inorderTraversal = function (root) {
    if (!root) return []
    let res = []
    let temp = root
    let seen = new Set()
    while (temp) {
        if (!temp.left || seen.has(temp.left)) {
            res.push(temp.val)
            seen.add(temp)
            temp = temp.right
        }
        else {
            let curr = temp.left
            while (curr.right) {
                curr = curr.right
            }
            curr.right = temp
            temp = temp.left
        }
    }
    return res
};
var inorderTraversal2 = function (root) {
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
                temp = temp.left
            } else {
                curr.right = null
                res.push(temp.val)
                temp = temp.right
            }

        }
    }
    return res
};