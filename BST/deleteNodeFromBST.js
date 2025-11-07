let findMax = (root) => {
    let curr = root
    while (curr.right) {
        curr = curr.right
    }
    return curr
}
var deleteNode = function (root, key) {
    if (!root) return null
    if (root.val > key) {
        root.left = deleteNode(root.left, key)
    } else if (root.val < key) {
        root.right = deleteNode(root.right, key)
    } else {
        if (!root.left) return root.right
        if (!root.right) return root.left
        let maxNode = findMax(root.left)
        root.val = maxNode.val
        root.left = deleteNode(root.left, maxNode.val)
    }

    return root
};