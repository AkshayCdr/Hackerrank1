// const SinglyLinkedListNode = class {
//   constructor(nodeData) {
//     this.data = nodeData;
//     this.next = null;
//   }
// };

// function insertNodeAtTail(head, data) {
//   let newNode = new SinglyLinkedListNode(data);
//   if (head === null) {
//     head = newNode;
//   } else {
//     let current = head;
//     while (current.next) {
//       current = current.next;
//     }
//     current.next = newNode;
//   }
//   return head;
// }

// function insertNodeAtHead(head, data) {
//   const newNode = new SinglyLinkedListNode(data);
//   if (head === null) {
//     head = newNode;
//   } else {
//     newNode.next = head;
//     head = newNode;
//   }
//   return head;
// }

// function insertNodeAtPosition(llist, data, position) {
//   // Write your code here
//   const newNode = new SinglyLinkedListNode(data);
//   // if(llist === null)
//   let temp = llist;
//   for (let i = 0; i < position - 1; i++) {
//     temp = temp.next;
//   }
//   newNode.next = temp.next;
//   temp.next = newNode;
//   return llist;
// }

// function deleteNode(llist, position) {
//   // Write your code here
//   if (position === 0) {
//     return llist.next;
//   }
//   let current = llist;
//   for (let i = 0; i < position - 1; i++) {
//     current = current.next;
//   }
//   current.next = current.next.next;
//   return llist;
// }

// console.group(insertNodeAtTail(null, 6));
