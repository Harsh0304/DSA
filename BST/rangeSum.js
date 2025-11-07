var rangeSumBST = function (root, low, high) {
    let sum = 0
    function solve(root) {
        if (!root) return 0
        if (root.val >= low && root.val <= high) {
            sum += root.val
        }
        solve(root.left)
        solve(root.right)
    }
    solve(root)
    return sum
};