class ArrStack:
    def __init__(self):
        self._stack = []
    
    def push(self, val):
        self._stack.append(val)
    
    def top(self):
        if not self.is_empty():
            return self._stack[-1]
        return None
    
    def is_empty(self):
        return len(self._stack) == 0
    
    def pop(self):
        if not self.is_empty():
            return self._stack.pop()
        return None
    
    def contains(self, val):
        return val in self._stack
    
    def size(self):
        return len(self._stack)

        stack = ArrStack()
print(stack.is_empty())  # True

stack.push(5)
stack.push(10)
stack.push(15)
print(stack.top())  # 15
print(stack.pop())  # 15
print(stack.contains(10))  # True
print(stack.contains(20))  # False
print(stack.size())  # 2

class ArrStack {
    constructor() {
      this._stack = [];
    }
  
    push(val) {
      this._stack.push(val);
    }
  
    top() {
      if (!this.is_empty()) {
        return this._stack[this._stack.length - 1];
      }
      return null;
    }
  
    is_empty() {
      return this._stack.length === 0;
    }
  
    pop() {
      if (!this.is_empty()) {
        return this._stack.pop();
      }
      return null;
    }
  
    contains(val) {
      return this._stack.includes(val);
    }
  
    size() {
      return this._stack.length;
    }
  }

  const stack = new ArrStack();
console.log(stack.is_empty()); // true

stack.push(5);
stack.push(10);
stack.push(15);
console.log(stack.top()); // 15
console.log(stack.pop()); // 15
console.log(stack.contains(10)); // true
console.log(stack.contains(20)); // false
console.log(stack.size()); // 2