var flatten = function (root) {
    let res = []
    let temp = root
    while (temp) {
        if (!temp.left) {
            temp = temp.right
        }
        else {
            let curr = temp.left
            while (curr.right) {
                curr = curr.right
            }
            curr.right = temp.right
            temp.right = temp.left
            temp.left = null
            temp = temp.right
        }
    }
};