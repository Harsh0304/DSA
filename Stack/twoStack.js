class TwoStacks {
  // constructor for twoStacks()
  constructor(capacity = 100) {
    this.arr = new Array(capacity);
    this.top1 = -1;
    this.top2 = capacity;
    this.size = capacity;
  }

  // Function to push an integer into the stack1.
  push1(x) {
    // code here
    if (this.top2 - this.top1 === 1) {
      return;
    }
    this.top1++;
    this.arr[this.top1] = x;
  }

  // Function to push an integer into the stack2.
  push2(x) {
    // code here
    if (this.top2 - this.top1 === 1) {
      return;
    }
    this.top2--;
    this.arr[this.top2] = x;
  }

  // Function to remove an element from top of the stack1.

  pop1() {
    // code here
    if (this.top1 >= 0) {
      let x = this.arr[this.top1];
      this.top1--;
      return x;
    } else {
      return -1;
    }
  }

  // Function to remove an element from top of the stack2.
  pop2() {
    // code here
    if (this.top2 < this.size) {
      let x = this.arr[this.top2];
      this.top2++;
      return x;
    } else {
      return -1;
    }
  }
}
