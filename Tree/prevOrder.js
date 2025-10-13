const prevOrderUsingStack = (root) => {
    // code here
    let res = []
    if (!root) return res
    let st = [root]
    while (st.length > 0) {
        let temp = st.pop()
        res.push(temp.data)
        if (temp.right) st.push(temp.right)
        if (temp.left) st.push(temp.left)
    }
    return res

}
const preOrder = (root) => {
    if (root === null) return
    console.log(root.val);
    preOrder(root.left)
    preOrder(root.right)
}