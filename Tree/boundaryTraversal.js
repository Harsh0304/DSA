class Solution {
    leftBoundary(node, res) {
        if (!node) return
        while (node) {
            if (node.left || node.right)
                res.push(node.data)
            node = node.left ? node.left : node.right
        }
    }
    rightBoundary(node, res) {
        if (!node) return
        let temp = []
        while (node) {
            if (node.right || node.left)
                temp.push(node.data)
            node = node.right ? node.right : node.left
        }
        for (let i = temp.length - 1; i >= 0; i--) {
            res.push(temp[i])
        }
    }
    leafBoundary(root, res) {
        if (!root) return
        if (!root.left && !root.right) {
            res.push(root.data)
            return
        }
        this.leafBoundary(root.left, res)
        this.leafBoundary(root.right, res)
    }
    boundaryTraversal(root) {

        // code here
        let res = []
        if (!root) return res
        res.push(root.data)
        this.leftBoundary(root.left, res)
        this.leafBoundary(root.left, res)
        this.leafBoundary(root.right, res)
        this.rightBoundary(root.right, res)
        return res
    }
}
class Solution2 {
    leftBoundary(node, res) {
        if (!node) return
        if (!node.left && !node.right) return
        res.push(node.data)
        if (node.left)
            this.leftBoundary(node.left, res)
        else
            this.leftBoundary(node.right, res)
    }
    rightBoundary(node, res) {
        if (!node) return
        if (!node.right && !node.left) return

        if (node.right)
            this.rightBoundary(node.right, res)
        else
            this.rightBoundary(node.left, res)
        res.push(node.data)
    }
    leafBoundary(root, res) {
        if (!root) return
        if (!root.left && !root.right) {
            res.push(root.data)
            return
        }
        this.leafBoundary(root.left, res)
        this.leafBoundary(root.right, res)
    }
    boundaryTraversal(root) {

        let res = []
        if (!root) return res
        res.push(root.data)
        this.leftBoundary(root.left, res)
        this.leafBoundary(root.left, res)
        this.leafBoundary(root.right, res)
        this.rightBoundary(root.right, res)
        return res
    }
}