const inOrderUsingStack = (root) => {
    let res = []
    if (!root) return res
    let st = []
    let curr = root
    while (curr || st.length > 0) {
        while (curr) {
            st.push(curr)
            curr = curr.left
        }
        let temp = st.pop()
        res.push(temp.data)
        curr = temp.right
    }
    return res
}
const inOrder = (root) => {
    if (root === null) return
    inOrder(root.left)
    console.log(root.val);
    inOrder(root.right)
}