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
list.insertLast(1);
list.insertLast(2);
list.insertLast(3);
list.insertLast(4);
list.insertLast(5);
list.insertLast(6);
list.insertLast(7);
list.insertLast(8);
list.insertLast(9);

function deleteAltNodes(listHead){
    if(!listHead){
        return 0;
    }
    let prev = listHead;
    let node = listHead.next;
    while(prev !== null && node !== null){
        prev.next = node.next;
        prev = prev.next;

        if(prev !== null){
            node = prev.next
        }
    }
    return listHead;
}

deleteAltNodes(list.head);