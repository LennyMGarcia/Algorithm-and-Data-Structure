
class Queue {
    constructor() {
         this.collection = [];

    }

  print() {
   console.log(this.collection);
  }

  enqueue(element) {
    if (this.isEmpty()) {
      this.collection.push(element);
    }
     else {
      var added = false;
      for (var i = 0; i < this.collection.length; i++) {
        if (element < this.collection[i]) {
          this.collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        this.collection.push(element);
      }
    }
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


    queue2.enqueue(3);
    queue2.enqueue(1);
    queue2.enqueue(2);
    queue2.enqueue(4);
    queue2.print();
    queue2.print();
    console.log(queue2.size());
    console.log(queue2.dequeue());
    console.log(queue2.front());
    console.log(queue2.size());
    queue2.print();
    