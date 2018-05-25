class Node{
    constructor(data, next = null){
        this.data = data,
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.head = null;
    }
    insertLast(data){
        if(this.head == null){
            this.head = new Node(data);
            return this.head;
        }
        let node = this.head;
        while(node.next !== null){
            node = node.next;
        }
        node.next = new Node(data);

        return this.head;
    }
    print(){
        let node = this.head;
        if(node == null){
            return 0;
        } else {
            while(node !== null){
                console.log(node.data);
                node = node.next;
            }
        }
    }
    getNth(index){
        if(this.head == null){
            return 0;
        }
        if(index == 1){
            return this.head;
        }
        let count = 0;
        let node = this.head;
        while (node.next !== null && count !== index){
            node = node.next;
            count++;
        }
        console.log(node.data);
        return node;
    }
    insertNthFromEnd(index, data){
        if(!this.head){
            return 0;
        }
        let slowPtr = this.head;
        let fastPtr = this.head;
        let count = 0;
        while(count < index){
            if(fastPtr == null){
                return 0;
            }
            fastPtr = fastPtr.next;
            count++;
        }

        while(fastPtr !== null){
            slowPtr = slowPtr.next;
            fastPtr = fastPtr.next;
        }

        let node = new Node(data);
        let temp = slowPtr.next;
        slowPtr.next = node;
        node.next = temp;
        return this.head;
    }
}
let list = new LinkedList();
list.insertLast(10);
list.insertLast(15);
list.insertLast(12);
list.insertLast(13);

list.insertNthFromEnd(4, 99);
list.print();