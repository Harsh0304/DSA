class Solution {
    // Function to find the nodes that are common in both BST.
    solve(root, mp, res) {
        function inorder(root) {
            if (!root) return
            inorder(root.left)
            if (mp.has(root.data)) {
                res.push(root.data)
            }
            inorder(root.right)
        }
        inorder(root)
    }
    findCommon(r1, r2) {
        // your code here
        let mp = new Set()
        function inorder(node) {
            if (!node) return
            inorder(node.left)
            mp.add(node.data)
            inorder(node.right)
        }
        inorder(r1)
        let res = []
        this.solve(r2, mp, res)
        return res
    }
}