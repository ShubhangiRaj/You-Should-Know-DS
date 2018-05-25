// Given a linked list and two keys in it, swap nodes for two given keys. Nodes should be swapped by changing links. 
// Swapping data of nodes may be expensive in many situations when data contains many fields.

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
list.insertLast(14);
// list.print();

function findPrevNode(listHead, data){
    if(!listHead){
        return 0;
    }
    let node = listHead;
    let prevNode = null;
    while(node !== null){
        if(node.data == data){
            return prevNode;
        }
        else {
            prevNode = node;
            node = node.next;
        }
    }
    console.log(prevNode);
    return prevNode;
}

function findNode(listHead, data){
    if(!listHead){
        return 0;
    }
    let node = listHead;
    // let prevNode = null;
    while(node !== null){
        if(node.data == data){
            return node;
        }
        else {
            // prevNode = node;
            node = node.next;
        }
    }
    console.log(node);
    return node;
}

function swapNodes(listHead, nodeDataA, nodeDataB){
    let prevNodeA = findPrevNode(listHead, nodeDataA);
    let prevNodeB = findPrevNode(listHead, nodeDataB);
    let nodeA = findNode(listHead, nodeDataA);
    let nodeB = findNode(listHead, nodeDataB);

    // if either nodes not present
    if(nodeA == null || nodeB == null){
        return;
    }
    // if prevNode == null, it means node is head node.
    if(!prevNodeA || !prevNodeB){
        if(!prevNodeA){
            let temp = nodeA.next;
            nodeA.next = nodeB.next;
            nodeB.next = temp;
            prevNodeB.next = nodeA;
            listHead = nodeB;
        } else {
            let temp = nodeB.next;
            nodeB.next = nodeA.next;
            nodeA.next = temp;
            prevNodeA.next = nodeB;
            listHead = nodeA;
        }
    }

    // if nodes are not head;
    

    return listHead;
}

swapNodes(list.head, 20 , 10);