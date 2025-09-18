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

const insertHead=(head,x)=>{
    const newNode =new Node(x)
    if(head===null){
      head.next=newNode
      head=newNode
    }else{
        newNode.next=head
        head=newNode
    }
   return head
}

const LengthLL=(head)=>{
    let c=0
    let temp=head
    while(temp!==null){
        c++
        temp=temp.next
    }
    return c
}
const search=(head,key)=>{
    let temp=head
    while(temp!==null){
        if(temp.data===key){
            return true
        }
        temp=temp.next
    }
    return false
}

const insertAtPos=(head,pos,val)=>{

    if(pos===1){
        return insertHead(head,val)
    }
    let temp=head
    while(temp!==null){
        pos--
        if((pos-1)===0){
            const newNode=new Node(val)
            newNode.next=temp.next
            temp.next=newNode
            break
        }
        temp=temp.next
    }
    return head
}
const deleteNode=(head,x)=>{
    if(x===1){
        head=head.next
        return head
    }
    let temp=head
    while(temp!==null){
        x--
        if((x-1)===0){
            temp.next=temp.next.next
            break
        }
        temp=temp.next
    }
    return head
}

const nums=[2,1,5,3,6]
const head=createLL(nums)
// const head1=insertAtPos(head,6,10)
printLL(deleteNode(head,3))
console.log(LengthLL(head));

// printLL(insertHead(head,9))