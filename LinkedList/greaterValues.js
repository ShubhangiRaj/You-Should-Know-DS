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
list.insertLast(12);
list.insertLast(15);
list.insertLast(10);
list.insertLast(11);
list.insertLast(5);
list.insertLast(6);
list.insertLast(2);
list.insertLast(3);

// Given a singly linked list, remove all the nodes which have a greater value on right side.
// The list 12->15->10->11->5->6->2->3->NULL should be changed to 15->11->6->3->NULL. 
// Note that 12, 10, 5 and 2 have been deleted because there is a greater value on the right side.

function deleteNodes(listHead){
    let curr = listHead;
    if(!curr){
        return 0;
    }
    let temp;
    while(curr !== null && curr.next !== null){
        if(curr.next.data > curr.data){
            temp = curr.next;
            curr.next = null;
            curr = temp;
        } else {
            curr = curr.next;
        }
    }
    return listHead;
}
deleteNodes(list.head);