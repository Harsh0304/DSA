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
const solve=(root,p,level)=>{
    if(!root) return 0
     if(root.val===p) return level
     return solve(root.left,p,level+1) || solve(root.right,p,level+1)
}
const findLevel=(root,p)=>{
    if(!root) return 0
    return solve(root,p,1)
}
const root=buildTree([1,2,4,null,null,5,null,null,3,9,null,null,7,null,null])
console.log(findLevel(root,2));
