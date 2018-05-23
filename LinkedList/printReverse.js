// Given a linked list, print reverse of it using a recursive function. 
// For example, if the given linked list is 1->2->3->4, then output should be 4->3->2->1.
// Note that the question is only about printing the reverse.

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
}

function printReverse(listHead){
    let node = listHead;
    if(node == null){
        return;
    }
    printReverse(node.next);
    console.log(node.data);
}

let list = new LinkedList();
list.insertLast(10);
list.insertLast(15);
list.insertLast(12);
list.insertLast(13);
list.insertLast(20);
list.insertLast(14);
list.print();
console.log("/n");
printReverse(list.head);