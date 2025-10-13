var widthOfBinaryTree = function(root) {
    if(!root) return 0
    let q=[[root,0]]
    let ans=0
    while(q.length>0){
        let n=q.length
        let startIdx=q[0][1]
        let endIdx=q[n-1][1]
        ans=Math.max(ans,(endIdx-startIdx)+1)
        for(let i=0;i<n;i++){
            let [temp,idx]=q[i]
            idx-=startIdx
            if(temp.left){
                q.push([temp.left,idx*2+1])
            } 
            if(temp.right){
               q.push([temp.right,idx*2+2])
            }
        }
        q=q.slice(n)
    }
    return ans
};