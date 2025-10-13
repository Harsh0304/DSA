const merge=(list1,list2)=>{
    let dummy=new Node(-1)
    let curr=dummy
    while(list1!==null && list2!==null){
        if(list1.data<list2.data){
            curr.bottom=list1
            curr=list1
            list1=list1.bottom
        }else{
            curr.bottom=list2
            curr=list2
            list2=list2.bottom
        }
    }
   if(list1){
       curr.bottom=list1
   }else{
       curr.bottom=list2
   }
   
  
    return dummy.bottom
}

const flatten=(head)=> {
    // code here
    if(!head || !head.next) return head
    
    let mergedHead=this.flatten(head.next)
    
    head=this.merge(head,mergedHead)
    return head
}