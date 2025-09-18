const findKthNode=(head,k)=>{
    let c=1,temp=head
    while(temp && c<k){
        c++
        temp=temp.next
    }
    return temp
 }
 const reverse=(head)=>{
     let temp = head;  
    let prev = null;  
    while (temp !== null) {  
        let front = temp.next;  
        temp.next = prev;  
        prev = temp;
        temp = front;  
    }
    return prev;  
}
var reverseKGroup = function(head, k) {
    if(!head || (!head.next && k===1)) return head
    let temp=head
    let prev=null
    while(temp){
        let kthNode=findKthNode(temp,k)
        if(kthNode===null){
           if(prev){
             prev.next=temp
           }
            break
        }
        else{
          let nextNode=kthNode.next
           kthNode.next=null
           reverse(temp)
           if(temp===head){
             head=kthNode
           }else{
              prev.next=kthNode
           }
           prev=temp
           temp=nextNode
        }
    }
    return head
};