class Sorter {
  constructor() {
    // your implementation
    this.comparator = (a, b) => a - b;
    this.arr = [];
  }

  add(element) {
    // your implementation
    this.arr.push(element);
  }

  at(index) {
    // your implementation
    return this.arr[index];
  }

  get length() {
    // your implementation
    return this.arr.length;
  }

  toArray() {
    // your implementation
    return this.arr;
  }

  sort(indices) {
    // your implementation
    var sortedArr = [];
    indices = indices.sort((a, b) => a - b);
    for (var i = 0, length = indices.length; i<length; i++) {
      sortedArr.push(this.arr[indices[i]]);
      } 
    sortedArr.sort(this.comparator);
    for (var i = 0, length = indices.length; i<length; i++) {
      this.arr[indices[i]] = sortedArr.shift();
      }
     
  }

  setComparator(compareFunction) {
    // your implementation
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;