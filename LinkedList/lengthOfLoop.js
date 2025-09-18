const lengthOfLoop=(head)=>{
    let visited=new Map()
    let temp=head
    let c=1
    while(temp){
        if(visited.has(temp)){
            return c-visited.get(temp)
        }
        visited.set(temp,c)
        temp=temp.next
        c++
    }
    return 0
}
const lengthOfLoop2=(head)=>{
    let slow=head,fast=head
    while(fast && fast.next){
        slow=slow.next
        fast=fast.next.next
        if(slow===fast) {
            slow=slow.next
            let c=1
            while(slow!==fast){
                slow=slow.next
                c++
            }
            return c
        }
    }
    return 0   
}