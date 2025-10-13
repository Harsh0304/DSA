const leftView=(root)=>{
    if(!root) return []
    let q=[],ans=[]
    q.push(root)
    while(q.length>0){
        let n=q.length
        for(let i=0;i<n;i++){
            let temp=q[i]
            if(i===0){
                ans.push(temp.data)
            }
            if(temp.left) q.push(temp.left)
            if(temp.right) q.push(temp.right)
        }
        q=q.slice(n)
    }
    return ans
}