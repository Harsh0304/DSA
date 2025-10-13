const mirror = (root) => {
    if (!root) return root
    let temp = root.left
    root.left = root.right
    root.right = temp
    mirror(root.left)
    mirror(root.right)
}