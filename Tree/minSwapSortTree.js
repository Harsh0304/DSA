const minSwaps = (arr) => {
    let sorted = arr.map((item, i) => [item, i])
    sorted.sort((a, b) => a[0] - b[0])
    swaps = 0
    let i = 0
    while (i < sorted.length) {
        let curr = sorted[i]
        let value = curr[0]
        let index = curr[1]
        if (i !== index) {
            [sorted[i], sorted[index]] = [sorted[index], sorted[i]]
            swaps++
        } else {
            i++
        }
    }
    return swaps
}
var minimumOperations = function (root) {
    if (!root) return 0
    let q = [root]
    let minSwap = 0
    while (q.length) {
        let n = q.length
        let levelArr = []
        for (let i = 0; i < n; i++) {
            let temp = q.shift()
            levelArr.push(temp.val)
            temp.left && q.push(temp.left)
            temp.right && q.push(temp.right)
        }
        minSwap += minSwaps(levelArr)
    }
    return minSwap
};