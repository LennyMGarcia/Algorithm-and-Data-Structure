
class Queue {
    constructor() {
        this.collection = [];
    }
  print() {
   console.log(this.collection);
  }

  enqueue(element) {
    return this.collection.push(element);
  }

  dequeue() {
    return this.collection.shift();
  }

  front  () {
    return this.collection[0];
  }

 isEmpty() {
    return this.collection.length === 0;
  }

  size() {
    return this.collection.length;
  }
}


let queue2 = new Queue ();

    
    queue2.print();
    console.log(queue2.size());
    console.log(queue2.dequeue());
    console.log(queue2.front());
    console.log(queue2.size());
    queue2.print();

    module.exports = {Queue:Queue}
    