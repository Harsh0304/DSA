const parantMapping = (root) => {
    let q = [root]
    let mp = new Map()
    while (q.length > 0) {
        let temp = q.shift()
        if (temp.left) {
            mp.set(temp.left, temp)
            q.push(temp.left)
        }
        if (temp.right) {
            mp.set(temp.right, temp)
            q.push(temp.right)
        }
    }
    return mp
}

var distanceK = function (root, target, k) {
    if (!root) return root
    const parantMap = parantMapping(root)
    let q = [target]
    let visited = new Set()
    visited.add(target)
    let c = 0
    while (q.length > 0) {
        let size = q.length
        if (c === k) {
            break
        }
        for (let i = 0; i < size; i++) {
            let temp = q.shift()
            for (let item of [temp.left, temp.right, parantMap.get(temp)]) {
                if (item && !visited.has(item)) {
                    visited.add(item)
                    q.push(item)
                }
            }
        }
        c++
    }
    let res = []
    for (let i of q) {
        res.push(i.val)
    }
    return res
};