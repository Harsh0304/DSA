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
const isEvenLength=(head)=>{
    let c=0
    let temp=head
    while(temp!==null){
        c++
        temp=temp.next
    }
    return c%2===0
}

let nums=[2,3,5,5,6,8]
const head=createLL(nums)
console.log(isEvenLength(head));
