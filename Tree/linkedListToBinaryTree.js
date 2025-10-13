const linkedListToBinaryTree = (head) => {
    // code here
    if (!head) return null
    let root = new Node(head.data)
    let curr = head.next
    let q = [root]
    let i = 1
    while (q.length > 0) {
        let temp = q.shift()
        if (curr !== null) {
            temp.left = new Node(curr.data)
            q.push(temp.left)
        }
        curr = curr && curr.next
        if (curr !== null) {
            temp.right = new Node(curr.data)
            q.push(temp.right)
        }
        curr = curr && curr.next
    }
    return root
}