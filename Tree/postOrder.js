const postOrderUsingStack = (root) => {
    let res = []
    if (!root) return res
    let st = [root]
    while (st.length > 0) {
        let temp = st.pop()
        res.push(temp.data)
        if (temp.left) st.push(temp.left)
        if (temp.right) st.push(temp.right)

    }
    return res.reverse()
}
const postOrder = (root) => {
    if (root === null) return
    postOrder(root.left)
    postOrder(root.right)
    console.log(root.val);
}
const postOrderUsingTwoStack = (root) => {
    let res = []
    if (!root) return res
    let st = [root]
    let st2 = []
    while (st.length > 0) {
        let temp = st.pop()
        st2.push(temp)
        if (temp.left) st.push(temp.left)
        if (temp.right) st.push(temp.right)
    }
    while (st2.length > 0) {
        res.push(st2.pop().data)
    }
    return res
}