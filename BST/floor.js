function floor(root, x) {
    // code here
    let ans = -1
    function helper(root, x) {
        if (!root) return null
        if (root.data <= x) {
            ans = root.data
            helper(root.right, x)
        } else {
            helper(root.left, x)
        }
    }
    helper(root, x)
    return ans
}