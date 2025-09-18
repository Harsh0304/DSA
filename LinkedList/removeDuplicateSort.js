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
const removeDuplicateSorted=(head)=>{
     if(head===null || head.next===null) return head
     let temp=head
     let sec=head.next
     while(sec!==null){
         if(temp.val===sec.val){
             sec=sec.next
             temp.next=sec
         }else{
             temp=sec
             sec=sec.next
         }
     }
     return head
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

const head=createLL([2,2,2,2,3,4])
printLL(head)
const head2=removeDuplicateSorted(head)
printLL(head2)
