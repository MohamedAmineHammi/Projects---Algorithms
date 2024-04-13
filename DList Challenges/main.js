// DList: Prepend Value
function prependValue(dlist, newVal, existingVal) {
    const newNode = new Node(newVal);
    let current = dlist.head;
    
    while (current) {
      if (current.value === existingVal) {
        newNode.next = current;
        newNode.prev = current.prev;
        current.prev = newNode;
        
        if (current === dlist.head) {
          dlist.head = newNode;
        } else {
          newNode.prev.next = newNode;
        }
        
        return;
      }
      
      current = current.next;
    }
  }

  //DList: Kth-to-Last Value
  function kthToLastValue(dlist, k) {
    let slow = dlist.head;
    let fast = dlist.head;
    
    for (let i = 0; i < k; i++) {
      if (fast === null) {
        return null; // k is larger than the length of the list
      }
      fast = fast.next;
    }
    
    while (fast) {
      slow = slow.next;
      fast = fast.next;
    }
    
    return slow.value;
  }

  //DList: Is Valid
  function isValidDList(dlist) {
    let current = dlist.head;
    let prev = null;
    
    while (current) {
      if (current.prev !== prev || (current.next && current.next.prev !== current)) {
        return false; // Invalid pointers
      }
      
      if (current === dlist.head && current.prev !== null) {
        return false; // Head should have null prev
      }
      
      prev = current;
      current = current.next;
    }
    
    return true;
  }

  //DList: Palindrome
  function isPalindromeDList(dlist) {
    let forward = dlist.head;
    let backward = dlist.tail;
    
    while (forward !== backward && forward.prev !== backward) {
      if (forward.value !== backward.value) {
        return false;
      }
      
      forward = forward.next;
      backward = backward.prev;
    }
    
    return true;
  }

  //DList: Loop Start
  function findLoopStart(dlist) {
    let slow = dlist.head;
    let fast = dlist.head;
    let loopExists = false;
    
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      
      if (slow === fast) {
        loopExists = true;
        break;
      }
    }
    
    if (!loopExists) {
      return null;
    }
    
    slow = dlist.head;
    
    while (slow !== fast) {
      slow = slow.next;
      fast = fast.next;
    }
    
    return slow;
  }

  //DList: Append Value
  function appendValue(dlist, newVal, existingVal) {
    const newNode = new Node(newVal);
    let current = dlist.head;
    
    while (current) {
      if (current.value === existingVal) {
        newNode.prev = current;
        newNode.next = current.next;
        current.next = newNode;
        
        if (current === dlist.tail) {
          dlist.tail = newNode;
        } else {
          newNode.next.prev = newNode;
        }
        
        return;
      }
      
      current = current.next;
    }
  }

  //DList: Delete Middle Node
  function deleteMiddleNode(node) {
    if (node === null || node.prev === null || node.next === null) {
      return; // Invalid node
    }
    
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  //DList: Partition
  function partitionDList(dlist, partitionVal) {
    let current = dlist.head;
    let tail = dlist.head;
    
    while (current) {
      const next = current.next;
      
      if (current.value < partitionVal) {
        current.next = dlist.head;
        current.prev = null;
        
        if (dlist.head !== null) {
          dlist.head.prev = current;
        }
        
        dlist.head = current;
      } else {
        current.prev = tail;
        tail.next = current;
        tail = current;
      }
      
      current = next;
    }
    
    tail.next = null;
    dlist.tail = tail;
  }
