const bottomView=(root)=>{
       if(!root) return []
       let q=[],ans=[]
       let mp={}
       q.push([root,0])
       let min=0,max=0,i=0
       while(i<q.length){
               let [temp,hd]=q[i++]
               mp[hd]=temp.data
               min=Math.min(hd,min)
               max=Math.max(hd,max)
               if(temp.left) q.push([temp.left,hd-1])
               if(temp.right) q.push([temp.right,hd+1])
       }
       for(let i=min;i<=max;i++){
           ans.push(mp[i])
       }
       return ans
}
