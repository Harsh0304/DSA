var rotateRight = function(head, k) {
    if(!head || (!head.next && k===1)) {
        return head
    }
    let temp1=head,temp2=head
    let kthNode=null,c=0
    while(c<k){
        c++
        temp2=temp2.next
        if(temp2===null){
            temp2=head
        }
    }
    if(temp2===head) return head
    while(temp2 && temp2.next){
        temp1=temp1.next
        temp2=temp2.next
    }
    kthNode=temp1.next
    temp1.next=null
    temp2.next=head
    head=kthNode
    return head
    
};
const rotateRightOptimal = function(head, k) {
    if(!head) return head
   let tail=head,len=1
   while(tail && tail.next){
    len++
    tail=tail.next
   }
   if(len===k) return head
   k=k%len
   let temp=head,c=0
   while(c<(len-k-1)){
    c++
    temp=temp.next
   }
   tail.next=head
   head=temp.next
   temp.next=null
   return head
    
};