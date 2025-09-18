class Stack {
  constructor() {
    this.item = [];
  }
  push(val) {
    this.item.push(val);
  }
  pop() {
    if (this.isEmpty()) {
      console.log("stack empty");
      return;
    }
    this.item.pop();
  }
  isEmpty() {
    this.item.length === 0;
  }
  size() {
    console.log(this.item.length);
  }
  print() {
    console.log(this.item);
  }
}
const st = new Stack();
st.push(10);
st.push(2);
st.push(5);
st.push(20);
st.pop();
st.print();
st.size();
