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
list.insertLast(5);
list.insertLast(2);
list.insertLast(10);
list.insertLast(2);
list.insertLast(5);
list.print();

function deleteLastOccurence(listHead, data){
    let prev = null;
    let curr = listHead;
    let lastSeen;

    while(curr.next !== null){
        if(curr.data == data){
            lastSeen = curr;
            prev = curr;
            curr = curr.next;
        } else {
            prev = curr;
            curr = curr.next;
        }
    }
    // the lastOccurence of the data is also the last element in the list
    if(curr.data == data){
        prev.next = null;
    }else {
        lastSeen.data = lastSeen.next.data;
        lastSeen.next = lastSeen.next.next;
    }
    return listHead;
}

deleteLastOccurence(list.head, 2);
list.print()