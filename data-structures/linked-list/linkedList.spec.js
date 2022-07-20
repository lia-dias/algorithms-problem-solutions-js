const assert = require("assert");
const LinkedList = require("./linkedList");
const linkedList = new LinkedList();

let removedElement = null;

assert(linkedList.peek() === null, "Linked List initiated not null");
assert(linkedList.length() === 0, "Invalid Linked List length");

linkedList.push('a');

assert(linkedList.peek().data === 'a', "Head value different");
assert(linkedList.peek().next === null, "Should'n have next element");
assert(linkedList.length() === 1, "Invalid Linked List length");


linkedList.push('b');

assert(linkedList.peek().data === 'a', "Head value different");
assert(linkedList.peek().next.data === 'b', "Tail value different");
assert(linkedList.peek().next.next === null, "Should'n have next element");
assert(linkedList.length() === 2, "Invalid Linked List length");

linkedList.push('c');

assert(linkedList.peek().data === 'a', "Head value different");
assert(linkedList.peek().next.data === 'b', "Second value different");
assert(linkedList.peek().next.next.data === 'c', "Tail value different");
assert(linkedList.peek().next.next.next === null, "Should'n have next element");
assert(linkedList.length() === 3, "Invalid Linked List length");

removedElement = linkedList.remove(2);

assert(removedElement === 'b', "Removed element does'nt match");
assert(linkedList.peek().data === 'a', "Head value different");
assert(linkedList.peek().next.data === 'c', "Second value different");
assert(linkedList.peek().next.next === null, "Should'n have next element");
assert(linkedList.length() === 2, "Invalid Linked List length");

removedElement = linkedList.remove(1);

assert(removedElement === 'a', "Removed element does'nt match");
assert(linkedList.peek().data === 'c', "Head value different");
assert(linkedList.peek().next === null, "Should'n have next element");
assert(linkedList.length() === 1, "Invalid Linked List length");

removedElement = linkedList.remove(1);

assert(removedElement === 'c', "Removed element does'nt match");
assert(linkedList.peek() === null, "Head value should be null");
assert(linkedList.length() === 0, "Invalid Linked List length");

linkedList.push('d');

assert(linkedList.peek().data === 'd', "Head value different");
assert(linkedList.peek().next === null, "Should'n have next element");
assert(linkedList.length() === 1, "Invalid Linked List length");
