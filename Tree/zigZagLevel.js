var zigzagLevelOrder = function(root) {
    if(!root) return []
    let q=[],ans=[],currVal=[],leftToRight=true
    q.push(root)
    q.push(null)
    while(q.length>0){
        let temp=q.shift()
        if(temp===null){
            ans.push(currVal)
            currVal=[]
            q.reverse()
            leftToRight=!leftToRight
            if(q.length!==0){
                q.push(null)
            }
        }
        else{
            currVal.push(temp.val)
           if(leftToRight===true){
             if(temp.left) q.push(temp.left)
             if(temp.right) q.push(temp.right)
           }else{
            if(temp.right) q.push(temp.right)
            if(temp.left) q.push(temp.left)
           }
        }
    }
    return ans
};