const mergeTwoLists = (list1, list2)=> {
    let dummy=new ListNode(-1)
    let curr=dummy
    while(list1!==null && list2!==null){
        if(list1.val<=list2.val){
            curr.next=list1
            list1=list1.next
        }else{
            curr.next=list2
            list2=list2.next
        }
        curr=curr.next
    }
   
    curr.next=list1 || list2
    return dummy.next
};
// const usingBrute=(lists)=>{
//     let curr=null
//     for(let i=0;i<lists.length;i++){
//         let head1=lists[i]
//         curr=mergeTwoLists(curr,head1)
//     }
//     return curr
// }
const mergedSort=(lists,left,right)=>{
    
    if(left===right){
      return lists[left]
    } 
    let mid=Math.floor((left+right)/2)
    let l1=mergedSort(lists,left,mid)
    let l2=mergedSort(lists,mid+1,right)

    return mergeTwoLists(l1,l2)
}
var mergeKLists = function(lists) {
    if(!lists || lists.length===0) return null

    return mergedSort(lists,0,lists.length-1)
};