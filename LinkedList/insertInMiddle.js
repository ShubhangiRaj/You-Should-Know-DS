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
list.insertLast(20);


function findMiddle(listHead){
    if(listHead == null){
        return 0;
    }
    let slowPtr = listHead;
    let fastPtr = listHead;
    while(fastPtr !== null && fastPtr.next !== null){
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next.next;
    }
    console.log(slowPtr.data);
    return slowPtr;
}

function findPrevToNode(nodeData, listHead){
    let prev = null;
    let curr = listHead;
    while(curr !== null){
        if(nodeData == curr.data){
            return prev;
        }
        prev = curr; 
        curr = curr.next
    }
    return;
}

function insertInMiddle(listHead, data){
    let newNode = new Node(data);
    let middleNode = findMiddle(listHead);
    let prevNode = findPrevToNode(middleNode.data, listHead);
    if(prevNode !== null){
        prevNode.next = newNode;
        newNode.next = middleNode;
    }
    return listHead;
}

insertInMiddle(list.head, 99);