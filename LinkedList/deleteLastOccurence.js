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
list.insertLast(13);

function deleteLastOccurence(listHead, num){
    if(!listHead){
        return 0;
    }
    let curr = listHead;
    let prev = null;
    let lastSeen;
    while(curr !== null){
        if(curr.data == num){
            lastSeen = curr;
        }
        prev = curr;
        curr = curr.next;
    }
    if(lastSeen.next !== null){
        prev.next = lastSeen.next;
    } else {
        prev.next = null;
    }
    return listHead;
}

deleteLastOccurence(list.head, 12);
 
// TODO