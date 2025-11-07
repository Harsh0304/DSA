const findPreSuc = (root, key) => {
    // code here
    let pre = null
    let suc = null
    let node = root
    while (node) {
        if (key > node.data) {
            pre = node
            node = node.right
        } else {
            node = node.left
        }
    }
    node = root
    while (node) {
        if (key < node.data) {
            suc = node
            node = node.left
        } else {
            node = node.right
        }
    }
    return [pre, suc]
}
// Solution2
class Solution {
    findPred(root, key) {
        let pred = null
        function solve(node, key) {
            if (!node) return
            if (key > node.data) {
                pred = node
                solve(node.right, key)
            } else {
                solve(node.left, key)
            }
        }
        solve(root, key)
        return pred
    }
    findSuc(root, key) {
        let suc = null
        function solve(node, key) {
            if (!node) return
            if (key < node.data) {
                suc = node
                solve(node.left, key)
            } else {
                solve(node.right, key)
            }
        }
        solve(root, key)
        return suc
    }
    findPreSuc(root, key) {
        // code here
        let pre = this.findPred(root, key)
        let suc = this.findSuc(root, key)
        return [pre, suc]
    }
}