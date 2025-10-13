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

const checkSiblings=(root,p,q)=>{
    if(!root) return false
    if(root.left && root.right){
        if((root.left.val===p && root.right.val===q) || (root.left.val===q && root.right.val===p)){
            return true
        }
    }
    return checkSiblings(root.left,p,q) || checkSiblings(root.right,p,q)
}
const root=buildTree([1,2,4,null,null,5,null,null,3,9,null,null,7,null,null])
console.log(checkSiblings(root,5,4));
