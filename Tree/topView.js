const topView=(root)=>{
    if(!root) return []
    let q=[],ans=[],mp={}
    let min=0,max=0,i=0
    q.push([root,0])
    while(i<q.length){
        let [temp,hd]=q[i++]
        if(!mp.hasOwnProperty(hd)){
            mp[hd]=temp.val
        }
        min=Math.min(min,hd)
        max=Math.max(max,hd)
        if(temp.left) q.push([root.left,hd-1])
        if(temp.right) q.push([root.right,hd+1])
    }
   for(let i=min; i<=max;i++){
     ans.push(mp[i])
   }
   return ans
}