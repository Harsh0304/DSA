const bruteForce=(head)=>{
    if(!head) return head
    let temp=head
    let odd=[],even=[]
    while(temp && temp.next){
        odd.push(temp.val)
        temp=temp.next.next
    }
    if(temp) odd.push(temp.val)
    temp=head.next
    while(temp && temp.next){
        even.push(temp.val)
        temp=temp.next.next
    }
    if(temp) even.push(temp.val)
    let curr=head
    for(let i=0;i<odd.length;i++){
         curr.val=odd[i]
         curr=curr.next
    }
    for(let i=0;i<even.length;i++){
         curr.val=even[i]
         curr=curr.next
    }
    return head
 }
var oddEvenList = function(head) {
    if(!head) return head
    let odd=head
    let even=head.next
    let evenHead=head.next
    while(even && even.next){
        odd.next=odd.next.next
        even.next=even.next.next
        odd=odd.next
        even=even.next
    }
    odd.next=evenHead
    return head
};