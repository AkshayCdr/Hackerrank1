class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(x) {
    this.stack1.push(x);
  }

  dequeue() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }

  peek() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2[this.stack2.length - 1];
  }
  //   printQueue() {
  //     var array = [];
  //     while (this.stack2.length > 0) {
  //       array.push(this.stack2.pop());
  //     }
  //     while (this.stack1.length > 0) {
  //       this.stack2.push(this.stack1.pop());
  //       array.push(this.stack2[this.stack2.length - 1]);
  //     }
  //     for (let i = 0; i < array.length; i++) {
  //       console.log(array[i]);
  //     }
  //   }

  printQueue() {
    const array = [];

    // Create a copy of stack2 preserving its original order
    const stack2Copy = [...this.stack2];

    // Pop elements from stack2Copy and push them into the array
    while (stack2Copy.length > 0) {
      array.push(stack2Copy.pop());
    }

    // Push elements from stack1 into stack2Copy preserving their order
    for (let i = this.stack1.length - 1; i >= 0; i--) {
      stack2Copy.push(this.stack1[i]);
    }

    // Push elements from stack2Copy into array (now containing the elements in queue order)
    while (stack2Copy.length > 0) {
      array.push(stack2Copy.pop());
    }

    // Print the elements in the array (representing the queue)
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
    console.log("\n");
  }
}

let x = new Queue();
x.enqueue(4);
x.enqueue(5);
x.enqueue(6);

// console.log(x.peek());
x.printQueue();

x.dequeue();
x.printQueue();
x.enqueue(9);
x.printQueue();
x.dequeue();
x.printQueue();
