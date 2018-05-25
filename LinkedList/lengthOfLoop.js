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
// create a loop
list.head.next.next.next.next = list.head.next.next;

function detectLoop(listHead){
    if(listHead == null){
        return 0;
    }
    let slowPtr = listHead;
    let fastPtr = listHead;
    while(slowPtr && fastPtr && fastPtr.next){
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next.next;
        if(slowPtr == fastPtr){
            console.log("loop found");
            countLoop(slowPtr, listHead);
        }
    }
    return 0;
}   

function countLoop(loopNode, listHead){
    let ptr1 = loopNode;
    let ptr2 = loopNode;
    let nodeCount = 1;
    while(ptr2.next !== ptr1){
        ptr2 = ptr2.next;
        nodeCount++;
    }
    console.log(nodeCount);
}



detectLoop(list.head);