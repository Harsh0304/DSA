const mergeTwoLists = function(list1, list2) {
    let temp1=list1,temp2=list2
    let dummy=new ListNode(-1)
    let curr=dummy
    while(temp1!==null && temp2!==null){
        if(temp1.val<=temp2.val){
            curr.next=temp1
            curr=temp1
            temp1=temp1.next
        }else{
            curr.next=temp2
            curr=temp2
            temp2=temp2.next
        }
    }
    while(temp1!==null){
        curr.next=temp1
        curr=temp1
        temp1=temp1.next
    }
    while(temp2!==null){
        curr.next=temp2
        curr=temp2
        temp2=temp2.next
    }
    return dummy.next
};