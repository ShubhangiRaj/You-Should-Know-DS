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
list.print();

function countOccurence(listHead, num){
    let node = listHead;
    if(node == null){
        return
    }
    let count = 0;
    while(node !== null){
        if(node.data == num){
            count++;
            node = node.next;
        } else {
            node = node.next;
        }
    }
    console.log(count);
}

countOccurence(list.head, 12);