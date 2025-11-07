var sortedArrayToBST = function (nums) {
    let n = nums.length
    function createTree(nums, s, e) {
        if (s > e) return null
        let mid = Math.floor((s + e) / 2)
        let root = new TreeNode(nums[mid])
        root.left = createTree(nums, s, mid - 1)
        root.right = createTree(nums, mid + 1, e)
        return root
    }
    return createTree(nums, 0, n - 1)
};