// https://leetcode.com/problems/reorder-list/description/?envType=problem-list-v2&envId=linked-list
const findMidle=(head)=>{
    let slow=head,fast=head.next
        while(fast!==null && fast.next!==null){
            slow=slow.next
            fast=fast.next.next
        }
        return slow
 }
 const reverse=(head)=>{
    if(!head || !head.next) return head
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
const reorderList = function(head) {
    let temp=head
    let midNode=findMidle(temp)
    const newHead=reverse(midNode.next)
    midNode.next=null
    let temp1=head,temp2=newHead
    while(temp1 && temp2){
    let s1=temp1.next
    let s2=temp2.next
        temp1.next=temp2
        temp2.next=s1?s1:s2
        temp1=s1
        temp2=s2
    }
    return head
};