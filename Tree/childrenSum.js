const hashChildSum=(root)=>{
    if(root===null) return true
    if(root.left===null && root.right===null) return true
    let leftVal=root.left?root.left.val:0
    let rightVal=root.right?root.right.val:0
     
    return root.val===(leftVal+rightVal) && isSumProperty(root.left) && isSumProperty(root.right)
}