const startingPointOfCycle=(head)=>{
    let slow=head,fast=head
    while(fast && fast.next){
        slow=slow.next
        fast=fast.next.next
        if(slow===fast) {
            slow=head
            while(slow!==fast){
                slow=slow.next
                fast=fast.next
            }
            return slow
        }
    }
    return null
}
const usingMap=(head)=>{
    let visited=new Set()
    let temp=head
    while(temp){
        if(visited.has(temp)){
            return temp
        }
        visited.add(temp)
        temp=temp.next
    }
    return null
 }