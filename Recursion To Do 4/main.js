//Recursive List Length:
function getListLength(node) {
    if (node === null) {
      return 0;
    }
    return 1 + getListLength(node.next);
  }