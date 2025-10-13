const RemoveHalfNodes = (root) => {
    // code here
    if (!root) return null
    root.left = this.RemoveHalfNodes(root.left)
    root.right = this.RemoveHalfNodes(root.right)
    if (!root.left && root.right) return root.right
    if (root.left && !root.right) return root.left

    return root
}