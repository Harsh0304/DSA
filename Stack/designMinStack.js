class MinStack {
  constructor() {
    this.stack = [];
  }
  push(val) {
    if (this.stack.length === 0) {
      this.stack.push([val, val]);
    } else {
      let currMin = this.stack[this.stack.length - 1][1];
      this.stack.push([val, Math.min(val, currMin)]);
    }
  }
  pop() {
    if (this.stack.length > 0) {
      this.stack.pop();
    }
  }
  top() {
    if (this.stack.length === 0) return null;
    return this.stack[this.stack.length - 1][0];
  }
  getMin() {
    return this.stack[this.stack.length - 1][1];
  }
  print() {
    console.log(this.stack);
  }
}

let st = new MinStack();
st.push(-2);
st.push(0);
st.push(-3);
st.pop();
console.log(st.getMin());

st.print();
