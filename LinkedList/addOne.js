const reverse=(head)=>{
    if(head===null || head.next===null) return head
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
const addOn=(node)=> {
    let head=reverse(node)
    let temp=head,carry=1
    while(temp){
        let sum=temp.val+carry
        if(sum>9){
            temp.val=0
            carry=1
        }else{
            temp.val=sum
            carry=0
            break
        }
        temp=temp.next
    }
    head=reverse(head)
    if(carry){
        const newNode=new Node(carry)
        newNode.next=head
        return newNode
    }
    return head
   
}