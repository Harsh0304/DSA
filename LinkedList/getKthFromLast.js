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
const getKthFromLast=(head, k) =>{
    // code here
    const len=findLength(head)
    if(len<k) return -1
    let temp=head
    let c=1
    while(temp!==null && c<=(len-k)){
        temp=temp.next
        c++
    }
    return temp.val
}
const optimal=(head,k)=>{
    let slow=head,fast=head
        let c=0
        while(c<k && fast!==null){
            c++
            fast=fast.next 
        }
       
        if(c<k){
            return -1
        }
        while(fast!==null){
            slow=slow.next
            fast=fast.next
        }
        return slow.data
}

const head=createLL([1,2,3,4,5,6,7,8,9])
console.log(getKthFromLast(head,2));
