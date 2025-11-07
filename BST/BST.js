class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

const createBST = (arr) => {
    function helper(root, nodeVal) {
        if (root === null) {
            return new Node(nodeVal)
        }
        if (root.val > nodeVal)
            root.left = helper(root.left, nodeVal)
        else {
            root.right = helper(root.right, nodeVal)
        }
        return root
    }
    let root = null
    for (let i = 0; i < arr.length; i++) {
        root = helper(root, arr[i])
    }
    return root
}

const inOrder = (root) => {
    if (!root) return
    inOrder(root.left)
    console.log(root.val)
    inOrder(root.right)
}

let root = createBST([4, 2, 5, 3, 8, 9])
inOrder(root)