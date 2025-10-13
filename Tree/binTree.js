class TreeNode {
    constructor(val, left, right) {
        this.val = val
        this.left = null
        this.right = null
    }
}

const lengthOfTree = (root) => {
    if (!root) return 0
    return 1 + lengthOfTree(root.left) + lengthOfTree(root.right)
}
const sumOfTree = (root) => {
    if (!root) return 0
    return root.val + sumOfTree(root.left) + sumOfTree(root.right)
}

const buildTree = (arr) => {
    let index = 0;

    function build() {
        if (values[index] === null) {
            index++;
            return null;
        }
        let node = new TreeNode(arr[index++]);
        node.left = build();
        node.right = build();
        return node;
    }

    return build();
}
const preOrder = (root) => {
    if (root === null) return
    console.log(root.val);
    preOrder(root.left)
    preOrder(root.right)
}
const inOrder = (root) => {
    if (root === null) return
    inOrder(root.left)
    console.log(root.val);
    inOrder(root.right)
}
const postOrder = (root) => {
    if (root === null) return
    postOrder(root.left)
    postOrder(root.right)
    console.log(root.val);
}

const root = buildTree([1, 2, 4, null, null, 5, null, null, 3, null, null])
console.log("printing preOrder:");
preOrder(root)
console.log("printing inOrder:");
inOrder(root)
console.log("printing postOrder:");
postOrder(root)
console.log("length of tree:");
console.log(lengthOfTree(root));
console.log("sum of tree:");
console.log(sumOfTree(root));




