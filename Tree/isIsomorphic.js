const isIsomorphic = (root1, root2) => {
    if (!root1 && !root2) return true
    if (!root1 || !root2) return false
    if (root1.data !== root2.data) return false
    let noSwap = this.isIsomorphic(root1.left, root2.left) && this.isIsomorphic(root1.right, root2.right)
    let swap = this.isIsomorphic(root1.left, root2.right) && this.isIsomorphic(root1.right, root2.left)
    return noSwap || swap
}