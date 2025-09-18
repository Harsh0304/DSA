const LengthLL=(head)=>{
    let c=0
    let temp=head
    while(temp!==null){
        c++
        temp=temp.next
    }
    return c
}
const twoPass=(head,n)=>{
    if(!head || (!head.next && n==1)) return null
    let len=LengthLL(head)
    if(n===len)return head=head.next
    let c=1
    let temp=head
    while(c<(len-n)){
        c++
        temp=temp.next
    }
    temp.next=temp.next?temp.next.next:null
    return head
}
var removeNthFromEnd = function(head, n) {
    if(!head || (!head.next && n==1)) return null
    let slow=head,fast=head
        let c=0
        while(c<n && fast!==null){
            c++
            fast=fast.next 
        }
        if(fast===null) return head.next
        prev=slow
        while(fast!==null){
            prev=slow
            slow=slow.next
            fast=fast.next
        }
        prev.next=slow?slow.next:null
        return head
};