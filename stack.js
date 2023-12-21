class Stack {
  constructor() {
    this.items = [];
  }
  push(data) {
    this.items.push(data);
  }
  pop() {
    return this.items.pop();
  }
}

let s = new Stack();

s.push(6);
s.push(5);
s.push(9);

console.log(s);
