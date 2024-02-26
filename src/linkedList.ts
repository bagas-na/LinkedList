type defined = boolean | number | string | null | object;

class LinkedNode {
  value: defined;
  nextNode: LinkedNode | null;

  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  head: LinkedNode;

  constructor(value: defined = null) {
    const newNode = new LinkedNode(value);
    this.head = newNode;
  }

  get size(): number {
    let counter = 0;
    let currHead = this.head;
    while (currHead) {
      counter += 1;
      currHead = currHead.nextNode;
    }
    return counter;
  }

  get tail(): LinkedNode {
    let currHead = this.head;
    while (currHead?.nextNode) {
      currHead = currHead.nextNode;
    }
    return currHead;
  }

  at(index: number): LinkedNode {
    let currIndex = 0;
    let currHead = this.head;
    while (currHead && currIndex <= index) {
      currHead = currHead.nextNode;
      currIndex += 1;
    }
    return currHead;
  }

  pop(): void {
    let leftHead = this.head;
    let rightHead = leftHead?.nextNode;

    if (leftHead === null || rightHead === null) {
      this.head = null;
      return;
    }

    while (rightHead.nextNode) {
      leftHead = leftHead.nextNode;
      rightHead = rightHead.nextNode;
    }
    leftHead.nextNode = null;
    return;
  }

  removeAt(index: number): void {
    if (index >= this.size) {
      console.error("Cannot remove node at index beyond current size");
      return;
    }

    if (index === 0) {
      this.head = this.head.nextNode;
    }

    let currHead = this.head;
    let currIndex = 0;


    while (currIndex < index - 1) {
      currHead = currHead.nextNode;
      currIndex += 1;
    }
    currHead.nextNode = currHead.nextNode.nextNode;
    return;
  }

  append(value: defined = null): void {
    const newNode = new LinkedNode(value);
    let currHead = this.head;
    while (currHead?.nextNode) {
      currHead = currHead.nextNode;
    }
    currHead.nextNode = newNode;
  }

  prepend(value: defined = null): void {
    const newNode = new LinkedNode(value);
    newNode.nextNode = this.head;
    this.head = newNode;
  }

  insertAt(value: defined, index: number): void {
    if (index >= this.size) {
      console.error("Cannot insert node at index beyond current size");
      return;
    }

    if (index === 0) {
      this.prepend(value);
      return;
    }

    const newNode = new LinkedNode(value);
    let leftHead = this.head;
    let rightHead = leftHead.nextNode;
    let currIndex = 0;

    while (currIndex < index - 1) {
      leftHead = leftHead.nextNode;
      currIndex += 1;
    }
    rightHead = leftHead.nextNode;
    leftHead.nextNode = newNode;
    newNode.nextNode = rightHead;
    return;
  }

  contains(value: defined): boolean {
    let currHead = this.head;
    while (currHead) {
      if (currHead?.value === value) return true;
      currHead = currHead.nextNode;
    }
    return false;
  }

  find(value: defined): number | null {
    let currHead = this.head;
    let currIndex = 0;
    while (currHead) {
      if (currHead?.value === value) return currIndex;
      currHead = currHead.nextNode;
      currIndex += 1;
    }
    return null;
  }

  toString(): void {
    let currHead = this.head;
    console.log(`( ${currHead.value} )`);
    while (currHead?.nextNode) {
      currHead = currHead.nextNode;
      console.log(` -> ( ${currHead.value} )`);
    }
    currHead = currHead?.nextNode;
    console.log(` ${currHead} `);
  }
}


// Test Suite
// 
// let list = new LinkedList("10");
// list.append("17");
// list.append("37");
// list.append("world!");
// list.prepend("7");
// list.prepend("9");
// list.prepend("hello!");
// list.toString();
// console.log(`Head: ${list.head}`);
// console.log(`Head: ${JSON.stringify(list.head)}`);
// console.log(`Length: ${list.size}`);
// console.log(`Contains "world!"?: ${list.contains("world!")}`);
// list.pop();
// console.log(`Contains "world!"?: ${list.contains("world!")}`);
// console.log(`Index of "37"?: ${list.find("37")}`);
// console.log(`Index of "73"?: ${list.find("73")}`);
// list.append("index 6");
// list.toString();
// list.removeAt(10);
// list.removeAt(0);
// list.toString();
// list.insertAt("Insert at index 2", 2);
// list.toString();
