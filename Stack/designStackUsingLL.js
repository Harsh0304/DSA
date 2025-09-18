class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.topNode = null;
    this.count = 0;
  }
  push(val) {
    const newNode = new Node(val);
    newNode.next = this.topNode;
    this.topNode = newNode;
    this.count++;
  }
  pop() {
    if (this.empty()) {
      console.log("stack empty..");
      return;
    }
    const value = this.topNode.val;
    this.topNode = this.topNode.next;
    this.count--;
    return value;
  }
  empty() {
    return this.count === 0;
  }
  size() {
    return this.count;
  }
  top() {
    return this.topNode.val;
  }
  print() {
    let curr = this.topNode;
    let res = "";
    while (curr !== null) {
      res += curr.val + "=>";
      curr = curr.next;
    }
    console.log(res + "null");
  }
}

const st = new Stack();
st.push(10);
st.push(20);
st.push(14);
st.push(16);
console.log(st.pop());
console.log(st.size());
console.log(st.top());
st.print();
