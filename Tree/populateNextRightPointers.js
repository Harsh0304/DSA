const dfs=(root)=>{
    if(!root || !root.left || !root.right) return root

   root.left.next=root.right
   if(root.next){
       root.right.next=root.next.left
   }
   connect(root.left)
   connect(root.right)
   return root
}
const bfs=(root)=>{
   if(!root) return null
  let q=[]
  q.push(root)
  while(q.length>0){
   let size=q.length
      for(let i=0;i<size;i++){
           let temp=q.shift()
           if(i<size-1)
               temp.next=q[0]
           temp.left && q.push(temp.left)
           temp.right && q.push(temp.right)
       } 
  }
  return root
}
var connect = function(root) {
   if(!root) return null
   let curr=root
   while(curr.left){
       let temp=curr
       while(temp){
           temp.left.next=temp.right
           if(temp.next)
             temp.right.next=temp.next.left
           temp=temp.next  
       }
       curr=curr.left
   }
   return root
};