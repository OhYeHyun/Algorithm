class minHeap {
  constructor() {
    this.heap = [];
  }
  peek() {
    return this.heap[0];
  }
  size() {
    return this.heap.length;
  }
  add(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    let parentIdx = Math.floor((index - 1) / 2);

    while (index > 0 && this.heap[index] < this.heap[parentIdx]) {
      [this.heap[index], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[index]];
      index = parentIdx;
      parentIdx = Math.floor((index - 1) / 2);
    }
  }

  poll() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
      
    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
      
    return value;
  }

  bubbleDown() {
    let index = 0;
    let leftIdx = index * 2 + 1;
    let rightIdx = index * 2 + 2;
      
    while (leftIdx < this.heap.length) {
        let smallerIdx = 
            (rightIdx < this.heap.length && this.heap[rightIdx] < this.heap[leftIdx]) 
        ? rightIdx : leftIdx;
        
        if (this.heap[index] < this.heap[smallerIdx]) break;
      [this.heap[index], this.heap[smallerIdx]] = [this.heap[smallerIdx], this.heap[index]];
        
      index = smallerIdx;
      leftIdx = index * 2 + 1;
      rightIdx = index * 2 + 2;
    }
  }
}

function solution(scoville, K) {
  const heap = new minHeap();
  scoville.forEach((e) => {
    heap.add(e);
  });
    
  let answer = 0;

  while (heap.peek() < K) {
    if (heap.size() < 2) return answer = -1;
    let firstMin = heap.poll();      
    let secondMin = heap.poll();
    let newMin = firstMin + secondMin * 2;
      
    heap.add(newMin);
    answer++;
  }
  return answer;
}