var averageOfLevels = function(root) {
    if(!root) return []
    let q=[],ans=[],currSum=0,c=0
    q.push(root)
    q.push(null)
    while(q.length>0){
        let temp=q.shift()
        if(temp===null){
            ans.push(currSum/c)
            currSum=0
            c=0
            if(q.length!==0){
                q.push(null)
            }
        }
        else{
            currSum+=temp.val
            c++
            if(temp.left) q.push(temp.left)
            if(temp.right) q.push(temp.right)
        }
    }
    return ans
};