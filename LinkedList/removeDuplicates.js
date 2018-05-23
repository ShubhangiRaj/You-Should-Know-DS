// remove duplicates from a sorted linked list
// The list should only be traversed once.

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
let list = new LinkedList();
list.insertLast(10);
list.insertLast(15);
list.insertLast(12);
list.insertLast(12);
list.insertLast(12);
list.insertLast(13);
list.insertLast(20);
list.insertLast(20);
list.insertLast(22);
// list.print();

LinkedList.prototype.removeDuplicates = function(){
    if(!this.head || !this.head.next){
        return this.head;
    }
    let node = this.head;
    while(node.next !== null){
        if(node.data == node.next.data){
            node.next = node.next.next;
        }
        else{
            node = node.next;
        }
    }
    return this.head;
}

list.removeDuplicates();