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
const findLength=(head)=>{
    let c=0
    let temp=head
    while(temp!==null){
        c++
        temp=temp.next
    }
    return c
}
const twoPass=(head)=>{
    const len=findLength(head)
    let mid=len%2===0?Math.floor((len/2)+1):Math.ceil(len/2)
    let temp=head
    let c=1
    while(temp!==null && c<mid){
        c++
        temp=temp.next
    }
    return temp.val
}
const findMiddle=(head)=>{
    let slow=head,fast=head
        while(fast!==null && fast.next!==null){
            slow=slow.next
            fast=fast.next.next
        }
        return slow.val
}

const head=createLL([2,2,3,4])
console.log(findMiddle(head));
