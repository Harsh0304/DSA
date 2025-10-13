class TreeNode{
    constructor(val,left,right){
         this.val=val
         this.left=null
         this.right=null
    }
}
const createTree=(arr,idxObj)=>{
    if(idxObj.i>=arr.length || arr[idxObj.i]===null){
        idxObj.i++
        return null
    }
    let root=new TreeNode(arr[idxObj.i++])
    root.left=createTree(arr,idxObj)
    root.right=createTree(arr,idxObj)
    return root
}
const buildTree=(arr)=>{
    let idxObj={i:0}
    return createTree(arr,idxObj)
}
const countLeaves=(root)=>{
    if(!root) return 0
    if(!root.left && !root.right) return 1
    return countLeaves(root.left) + countLeaves(root.right)
}
const root=buildTree([1,2,4,null,null,5,null,null,3,9,null,null,7,null,null])
console.log(countLeaves(root));

