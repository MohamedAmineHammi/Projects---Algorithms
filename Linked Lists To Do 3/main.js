function SLNode(value) {
    this.val = value;
    this.next = null;
    this.front = function() { ... };
    // more functions here
  }
  
  function getSecondLargestValue(head) {
    if (!head || !head.next) {
      return null; // Invalid input or list has less than 2 nodes
    }
  
    let largest = head.val;
    let secondLargest = null;
    let current = head.next;
  
    while (current) {
      if (current.val > largest) {
        secondLargest = largest;
        largest = current.val;
      } else if (current.val < largest && (!secondLargest || current.val > secondLargest)) {
        secondLargest = current.val;
      }
      current = current.next;
    }
  
    return secondLargest;
  }
  
  function zipSLists(list1, list2) {
    if (!list1) {
      return list2;
    }
    if (!list2) {
      return list1;
    }
  
    let current1 = list1;
    let current2 = list2;
    let newHead = current1;
  
    while (current1 && current2) {
      let temp1 = current1.next;
      let temp2 = current2.next;
  
      current1.next = current2;
      current2.next = temp1;
  
      current1 = temp1;
      current2 = temp2;
    }
  
    return newHead;
  }
  
  function dedupeSList(head) {
    if (!head) {
      return null;
    }
  
    let current = head;
    let values = new Set();
    values.add(current.val);
  
    while (current.next) {
      if (values.has(current.next.val)) {
        current.next = current.next.next;
      } else {
        values.add(current.next.val);
        current = current.next;
      }
    }
  
    return head;
  }
  
  function dedupeSListWithoutBuffer(head) {
    if (!head) {
      return null;
    }
  
    let current = head;
  
    while (current) {
      let runner = current;
      while (runner.next) {
        if (runner.next.val === current.val) {
          runner.next = runner.next.next;
        } else {
          runner = runner.next;
        }
      }
      current = current.next;
    }
  
    return head;
  }
  
  // Example usage:
  const node1 = new SLNode(1);
  const node2 = new SLNode(2);
  const node3 = new SLNode(3);
  const node4 = new SLNode(2);
  const node5 = new SLNode(4);
  
  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;
  
  console.log(getSecondLargestValue(node1)); // Output: 3
  
  const list1Node1 = new SLNode(1);
  const list1Node2 = new SLNode(3);
  const list1Node3 = new SLNode(5);
  
  list1Node1.next = list1Node2;
  list1Node2.next = list1Node3;
  
  const list2Node1 = new SLNode(2);
  const list2Node2 = new SLNode(4);
  const list2Node3 = new SLNode(6);
  
  list2Node1.next = list2Node2;
  list2Node2.next = list2Node3;
  
  const zippedList = zipSLists(list1Node1, list2Node1);
  console.log(zippedList); // Output: 1 -> 2 -> 3 -> 4 -> 5 -> 6
  
  const dedupedList = dedupeSList(zippedList);
  console.log(dedupedList); // Output: 1 -> 2 -> 3 -> 4 -> 5 -> 6 (no duplicates)
  
  const dedupedListWithoutBuffer = dedupeSListWithoutBuffer(zippedList);
  console.log(dedupedListWithoutBuffer); // Output: 1 -> 2 -> 3 -> 4 -> 5 -> 6 (no duplicates)