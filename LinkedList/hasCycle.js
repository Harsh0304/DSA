const hasCycle = function(head) {
    let slow=head,fast=head
    while(fast && fast.next){
        slow=slow.next
        fast=fast.next.next
        if(slow===fast) return true
    }
    return false
};

const usingSet=(head)=>{
    let visited=new Set()
    let temp=head
    while(temp){
        if(visited.has(temp)){
            return true
        }
        visited.add(temp)
        temp=temp.next
    }
    return false
}