class MedianFinder {
    constructor() {
      this.data = [];
    }
  
    addValue(val) {
      let left = 0;
      let right = this.data.length - 1;
  
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (this.data[mid] === val) {
          this.data.splice(mid, 0, val);
          return;
        } else if (this.data[mid] < val) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
  
      this.data.splice(left, 0, val);
    }
  
    findMedian() {
      const length = this.data.length;
      const mid = Math.floor(length / 2);
  
      if (length % 2 === 0) {
        return (this.data[mid - 1] + this.data[mid]) / 2;
      } else {
        return this.data[mid];
      }
    }
  }