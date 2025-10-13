var isCompleteTree = function (root) {
    if (!root) return true
    let q = [root]
    let flag = false
    while (q.length > 0) {
        let temp = q.shift()
        if (temp === null) {
            flag = true
        } else {
            if (flag) return false
            q.push(temp.left)
            q.push(temp.right)
        }
    }
    return true
};