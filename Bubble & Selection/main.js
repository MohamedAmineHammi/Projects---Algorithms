//Bubble Sort for an Array:
function bubbleSortArray(arr) {
    var len = arr.length;
    var swapped;
    
    do {
      swapped = false;
      
      for (var i = 0; i < len - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          var temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
      
      len--;
    } while (swapped);
    
    return arr;
  }
  
  // Example usage:
  var unsortedArray = [5, 3, 8, 2, 1, 4];
  var sortedArray = bubbleSortArray(unsortedArray);
  console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 8]

  //Bubble Sort for a Singly Linked List:
  function bubbleSortLinkedList(head) {
    if (!head || !head.next) {
      return head;
    }
    
    var sorted = false;
    while (!sorted) {
      sorted = true;
      var prev = null;
      var current = head;
      var next = head.next;
      
      while (next) {
        if (current.val > next.val) {
          if (prev) {
            prev.next = next;
          } else {
            head = next;
          }
          
          current.next = next.next;
          next.next = current;
          prev = next;
          next = current.next;
          sorted = false;
        } else {
          prev = current;
          current = next;
          next = next.next;
        }
      }
    }
    
    return head;
  }

  //Selection Sort for an Array:
  function selectionSortArray(arr) {
    var len = arr.length;
    
    for (var i = 0; i < len - 1; i++) {
      var minIndex = i;
      
      for (var j = i + 1; j < len; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      
      if (minIndex !== i) {
        var temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
    }
    
    return arr;
  }