class Node{
    constructor(val){
        this.val=val
        this.next=null
    }
    
}

const createLL=(nums)=>{
    let head=null
    let temp=null
    for(let num of nums){
        const newNode=new Node(num)
        if(head===null){
            head=newNode
            temp=newNode
        }else{
            temp.next=newNode
            temp=newNode
        }
        
    }
    return head
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

const compute=(head)=> {
    // your code here
    const newHead=reverse(head)
    let greater=newHead.val
    let prev=newHead 
    let temp=newHead.next
    while(temp!==null){
        if(temp.val<greater){
            temp=temp.next
            prev.next=temp
        }else{
            greater=temp.val
            prev=temp
            temp=temp.next
        }
    }
    return reverse(newHead)
}
const printLL=(head)=>{
    if(head===null) return null
    let temp=head
    let res=""
    while(temp!==null){
        res+=temp.val+"->"
        temp=temp.next
    }
    res+=null
    console.log(res);
}
const head=createLL([2,8,4,4,9,6,6])
printLL(compute(head))
