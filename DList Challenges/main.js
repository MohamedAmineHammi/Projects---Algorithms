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