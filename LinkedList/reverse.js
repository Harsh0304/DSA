const reverse=(head)=>{
    let curr=null,prev=null
        let sec=head
        while(sec!==null){
            curr=sec
            sec=sec.next
            curr.next=prev
            prev=curr
        }
        return prev
}
const reverseRec=(head)=>{
    if(head===null || head.next===null) return head
    const newHead=reverseRec(head.next)
    let sec=head.next
    sec.next=head
    head.next=null
    return newHead
}