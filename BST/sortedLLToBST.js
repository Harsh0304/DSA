var sortedListToBST = function (head) {
    if (!head) return null
    if (!head.next) return new TreeNode(head.val)
    let slow = head, fast = head, prev = null
    while (fast && fast.next) {
        prev = slow
        slow = slow.next
        fast = fast.next.next
    }
    let node = new TreeNode(slow.val)
    prev.next = null

    node.left = sortedListToBST(head)
    node.right = sortedListToBST(slow.next)
    return node
};