var serialize = function (root) {
    if (!root) return "null"
    let q = [root]
    let s = []
    while (q.length) {
        let temp = q.shift()
        if (temp === null) {
            s.push("null")
        } else {
            s.push(temp.val.toString())
            q.push(temp.left)
            q.push(temp.right)
        }
    }
    return s.join(",")
};


var deserialize = function (data) {
    if (data === "null") return null
    let nums = data.split(",")
    let root = new TreeNode(Number(nums[0]))
    let q = [root]
    let i = 1
    while (q.length > 0) {
        let temp = q.shift()
        if (nums[i] !== "null") {
            temp.left = new TreeNode(Number(nums[i]))
            q.push(temp.left)
        }
        i++
        if (nums[i] !== "null") {
            temp.right = new TreeNode(Number(nums[i]))
            q.push(temp.right)
        }
        i++
    }
    return root
};


var serializeDFS = function (root) {
    let res = [];

    const dfs = (node) => {
        if (!node) {
            res.push("N");
            return;
        }
        res.push(node.val.toString());
        dfs(node.left);
        dfs(node.right);
    };

    dfs(root);
    return res.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserializeDFS = function (data) {
    let values = data.split(",");
    let index = 0;

    function build() {
        if (values[index] === "N") {
            index++;
            return null;
        }
        let node = new TreeNode(parseInt(values[index++]));
        node.left = build();
        node.right = build();
        return node;
    }

    return build();

};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */