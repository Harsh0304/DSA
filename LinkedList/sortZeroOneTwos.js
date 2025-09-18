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
const bruteForce=(head)=>{
    let c0=0,c1=0,c2=0
    let temp=head
    while(temp){
        if(temp.data===0){
            c0++
        }else if(temp.data===1){
            c1++
        }else{
            c2++
        }
        temp=temp.next
    }
    temp=head
    while(c0>0){
        temp.data=0
        c0--
        temp=temp.next
    }
    while(c1>0){
        temp.data=1
        c1--
        temp=temp.next
    }
    while(c2>0){
        temp.data=2
        c2--
        temp=temp.next
    }
    return head
}
const sortZeroOneTwo=(head)=>{
    let d1=new Node(-1)
    let d0=new Node(-1)
    let d2=new Node(-1)
    let c0=d0,c1=d1,c2=d2
    let temp=head
    while(temp){
        if(temp.val===0){
            c0.next=temp
            c0=temp
            temp=temp.next
        }else if(temp.val===1){
             c1.next=temp
            c1=temp
            temp=temp.next
        }else if(temp.val===2){
            c2.next=temp
            c2=temp
            temp=temp.next
        }
    }
    c0.next=d1.next?d1.next:d2.next
    c1.next=d2.next
    c2.next=null
    return d0.next
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
const head=createLL([1,2,2,1,2,0,2,2,0])
printLL(sortZeroOneTwo(head));
