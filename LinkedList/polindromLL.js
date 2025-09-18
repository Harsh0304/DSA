const usingStack=(head)=>{
    let st=[]
    let temp=head
    while(temp){
        st.push(temp.val)
        temp=temp.next
    }
    temp=head
    while(st.length>0){
        let top=st.pop()
        if(temp.val!==top){
            return false
        }
        temp=temp.next
    }
    return true
 }
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
var isPalindrome = function(head) {
    let slow=head,fast=head
    while(fast!==null && fast.next!==null){
         slow=slow.next
         fast=fast.next.next
    }
    let newHead=reverse(slow)
    let sec=newHead
    let first=head
    while(sec){
        if(sec.val!==first.val) return false
        sec=sec.next
        first=first.next
    }
    return true
};
