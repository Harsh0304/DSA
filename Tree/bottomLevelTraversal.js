var levelOrderBottom = function(root) {
    if(!root) return []
    let q=[],ans=[],currVal=[]
    q.push(root)
    q.push(null)
    while(q.length>0){
        let temp=q.shift()
        if(temp===null){
            ans.push(currVal)
            currVal=[]
            if(q.length!==0){
                q.push(null)
            }
        }
        else{
            currVal.push(temp.val)
            if(temp.left) q.push(temp.left)
            if(temp.right) q.push(temp.right)
        }
    }
    return ans.reverse()
};