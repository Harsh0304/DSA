
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
const findMax=(root)=> {
    // code here
    if(!root) return -Infinity
    return Math.max(root.val,findMax(root.left),findMax(root.right))
}

const findMin=(root)=> {
    // code here
    if(!root) return Infinity
    return Math.min(root.val,findMin(root.left),findMin(root.right))
}
const root=buildTree([1,2,4,null,null,5,null,null,3,9,null,null,7,null,null])
console.log(findMax(root));
console.log(findMin(root));

