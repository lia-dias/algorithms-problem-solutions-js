const assert = require("assert");
const LinkedList = require("./linkedList");
const linkedList = new LinkedList();

assert(linkedList.head() === null, "Linked List initiated not null");
assert(linkedList.length() === 0, "Invalid Linked List length");

linkedList.push({data: 0});

assert(linkedList.head().data === 0, "Head value different");
assert(linkedList.tail().data === 0, "Tail value different");
assert(linkedList.length() === 1, "Invalid Linked List length");


linkedList.push({data: 1});

assert(linkedList.head().data === 0, "Head value different");
assert(linkedList.tail().data === 1, "Tail value different");
assert(linkedList.length() === 2, "Invalid Linked List length");

linkedList.push({data: 2});

assert(linkedList.head().data === 0, "Head value different");
assert(linkedList.tail().data === 2, "Tail value different");
assert(linkedList.length() === 3, "Invalid Linked List length");

linkedList.remove({data: 1});

assert(linkedList.head().data === 0, "Head value different");
assert(linkedList.tail().data === 2, "Tail value different");
assert(linkedList.length() === 2, "Invalid Linked List length");

