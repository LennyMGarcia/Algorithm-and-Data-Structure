class LinkedList {

    constructor() {
        this.length = 0;
        this.head = null;
    }

    Node(element)  {
        return {
            element,
            next: null
        };
    }

    size() {
        return this.length;
    }

    Head() {
        return this.head;
    }

    add(element) {
        let node = this.Node(element);
        let currentNode;

        if (this.head === null) {
           this.head = node;
        }

        else {
            currentNode = this.head;

            while (currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = node;
        }
        this.length++;
    }

    remove(element) {
        let currentNode = this.head;
        let previousNode;

        if (currentNode.element === element) {
            return this.head = currentNode.next;
        }

        else {
            while (currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            previousNode.next = currentNode.next;
        }

        this.length--
    }

    isEmpty() {
        return this.length === 0
    }

    indexOf(element) {
        let index = -1;
        let currentNode = this.head;

        while (currentNode) {
            index++;

            if (currentNode.element === element) {
                return index;
            }

            currentNode = currentNode.next;
        }
        return -1
    }

    elementAt(index) {
        let count = 0;
        let currentNode = this.head;

        while (count < index) {
            count++;
            currentNode = currentNode.next;
        }

        return currentNode.element;
    }

    addAt(index, element) {
        let node = this.Node(element);
        let currentNode = this.head;
        let previousNode;
        let currentIndex = 0;

        if (currentIndex > this.length) {
            return false;
        }
        else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            node.next = currentNode;
            previousNode.next = node;
        }
        this.length++;
    }

    removeAt(index) {

        let currentNode = this.head;
        let previousNode;
        let currentIndex = 0;

        if(index < 0 || index> this.length) {
            return null;
        }

        else  if(index == 0) {
            this.head = currentNode.next;
        }

        else{

            while(currentIndex < index) {

                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        this.length--;
        return currentNode.element;
    }

    print()
    {
        let currentNode = this.head;
        let string = '';
        let index = 0;

        while(currentNode)
        {
            string += `[${index}]${currentNode.element}${currentNode.next ? '=>' : ''}`;

            currentNode = currentNode.next;
            index++;
        }

       return string;
    }

}

const linked = new LinkedList();

linked.isEmpty();

linked.add(1);
linked.add(2);
linked.add(3);
linked.add(4);
linked.add(5);
linked.add(6);

console.log('lista');
console.log(linked.print());

linked.remove(1);
linked.remove(4);

 console.log('lista')
 console.log(linked.print());

 linked.removeAt(2);
 linked.removeAt(22);

 console.log('lista')
 console.log(linked.print());

 linked.addAt(1, 8);
 linked.addAt(3, 38);

 console.log('lista')
 console.log(linked.print());

 linked.isEmpty();

 console.log(linked.indexOf(8));

 console.log(linked.elementAt(1));

 module.exports = {LinkedList: LinkedList};





 

