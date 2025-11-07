const merge = (nums1, nums2, res) => {
    let n = nums1.length
    let m = nums2.length
    let i = 0, j = 0
    while (i < n && j < m) {
        if (nums1[i] < nums2[j]) {
            res.push(nums1[i])
            i++
        } else {
            res.push(nums2[j])
            j++
        }
    }
    while (i < n) {
        res.push(nums1[i])
        i++
    }
    while (j < m) {
        res.push(nums2[j])
        j++
    }
}
var getAllElements = function (root1, root2) {
    function inorder(node, res) {
        if (!node) return
        inorder(node.left, res)
        res.push(node.val)
        inorder(node.right, res)
    }
    let arr1 = [], arr2 = [], ans = []
    inorder(root1, arr1)
    inorder(root2, arr2)
    merge(arr1, arr2, ans)
    return ans
};