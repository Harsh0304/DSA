var addTwoNumbers = function(l1, l2) {
    let t1=l1,t2=l2
    const dummy=new ListNode(-1)
    let curr=dummy
    let carry=0
    while(t1 && t2){
        let sum=t1.val+t2.val+carry
        carry=Math.floor(sum/10)
        const newNode=new ListNode(sum%10)
        curr.next=newNode
        curr=newNode
        t1=t1.next
        t2=t2.next
    }
    while(t1){
        const newNode=new ListNode((t1.val+carry)%10)
        carry=Math.floor((t1.val+carry)/10)
        curr.next=newNode
        curr=newNode
        t1=t1.next
    }
    while(t2){
        const newNode=new ListNode((t2.val+carry)%10)
        carry=Math.floor((t2.val+carry)/10)
        curr.next=newNode
        curr=newNode
        t2=t2.next
    }
    if(carry){
        const newNode=new ListNode(carry)
        curr.next=newNode
        curr=newNode
    }
    return dummy.next
};
