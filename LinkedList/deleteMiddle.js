const deleteMiddle = function(head) {
    if(!head || !head.next) return null
     let slow=head,fast=head,prev=slow
        while(fast!==null && fast.next!==null){
            prev=slow
            slow=slow.next
            fast=fast.next.next
        }
        prev.next=slow?slow.next:null
        return head
};