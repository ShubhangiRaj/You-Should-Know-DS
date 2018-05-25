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
list.insertLast(13);

function deleteNodeAtGivenPos(listHead, index){
    if(index == 0){
        listHead = listHead.next;
    }
    let curr = listHead;
    let prev = null;
    let count = 0;
    while(curr !== null && count !== index){
        prev = curr;
        curr = curr.next;
        count++;
    }
    // delete last node
    if(curr.next == null){
        prev.next = null;
    } else {
        prev.next = curr.next;
    }
    return listHead;
}
deleteNodeAtGivenPos(list.head, 2);