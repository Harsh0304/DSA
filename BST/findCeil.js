class Solution {
    findCeil(root, x) {
        // code here
        let ans = -1
        function helper(root, x) {
            if (!root) return null
            if (root.data >= x) {
                ans = root.data
                helper(root.left, x)
            } else {
                helper(root.right, x)
            }
        }
        helper(root, x)
        return ans
    }
}