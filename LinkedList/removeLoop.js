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
    getNth(index){
        if(this.head == null){
            return;
        }
        if(index == 1){
            return this.head;
        }
        let count = 0;
        let node = this.head;
        while (node.next !== null && count !== index){
            node = node.next;
            count++;
        }
        console.log(node.data);
        return node;
    }
}
let list = new LinkedList();
list.insertLast(10);
list.insertLast(15);
list.insertLast(12);
list.insertLast(13);

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
            removeLoop(slowPtr, listHead);
            return 1;
        }
    }
    return 0;
}   

// create a loop
list.head.next.next.next.next = list.head.next.next;
detectLoop(list.head);

function removeLoop(loopNode, listHead){
    let ptr1 = loopNode;
    let ptr2 = loopNode;

    // find number of nodes in the loop
    let nodeCount = 1;
    while(ptr1.next !== ptr2){
        ptr1 = ptr1.next;
        nodeCount++;
    }
    // point one pointer to head
    ptr1 = listHead;
    // point another to k nodes from head;
    ptr2 = listHead;
    while(nodeCount > 0){
        ptr2 = ptr2.next;
        nodeCount--;
    }

    // move both pointers at same pace they will meet at loop starting node
    while(ptr1 !== ptr2){
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
    }

    // find the end loop
    ptr2 = ptr2.next;
    while(ptr2.next !== ptr1){
        ptr2 = ptr2.next;
    }

    ptr2.next = null;
}

