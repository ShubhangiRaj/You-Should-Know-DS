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
            return
        } else {
            while(node !== null){
                console.log(node.data);
                node = node.next;
            }
        }
    }
    middleNode(){
        if(this.head == null){
            return
        }
        let slowPtr = this.head;
        let fastPtr = this.head;
        while(fastPtr !== null && fastPtr.next !== null){
            slowPtr = slowPtr.next;
            fastPtr = fastPtr.next.next;
        }
        console.log(slowPtr.data);
        return slowPtr.next;
    }
}
let list = new LinkedList();
list.insertLast(10);
list.insertLast(15);
list.insertLast(12);
list.insertLast(13);
list.insertLast(20);
list.insertLast(20);
list.print();
list.middleNode();