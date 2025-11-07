class Solution {
    minValue(root) {
        // code here
        let min = Infinity
        function helper() {
            let curr = root
            while (curr) {
                min = Math.min(min, curr.data)
                curr = curr.left
            }
        }
        helper()
        return min === Infinity ? 0 : min
    }
}