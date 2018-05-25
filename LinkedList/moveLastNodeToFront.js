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

function moveLast(listHead){
    if(!listHead){
        return 0;
    }
    let node = listHead;
    let prev;
    while(node.next !== null){
        prev = node;
        node = node.next;
    }
    let temp = node;
    temp.next = listHead;
    listHead = temp;
    prev.next = null;

    let curr = listHead;
    while(curr !== null){
        console.log(curr.data);
        curr = curr.next;
    }
    return listHead;
}

moveLast(list.head);