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

function size(listHead){
    let node = listHead;
    let count = 0;
    if(node == null){
        return
    }
    if(node.next == null){
        count = 1;
        return count;
    }
    while(node !== null){
        node = node.next;
        count++;
    }
    return count;
}

function findIntersection(listHeadA, listHeadB){
    let lenA = size(listHeadA);
    let lenB = size(listHeadB);
    let tempA = listHeadA;
    let tempB = listHeadB;
    let diff = 0;
    if(lenA > lenB){
        diff = lenA - lenB;
        while(diff > 0){
            tempA = tempA.next;
            diff--;
        }
    } else if(lenB > lenA){
        diff = lenB - lenA;
        while(diff > 0){
            tempB = tempB.next;
            diff--;
        }
    }

    if(diff == 0){
        while(tempA && tempB){
            if(tempA == tempB){
                console.log(tempA.data);
                return 1;
            }
            tempA = tempA.next;
            tempB = tempB.next;
        }
    }
    return 0;
}

let list1 = new LinkedList();
list1.insertLast(1);
list1.insertLast(2);
list1.insertLast(3);
list1.insertLast(4);
let list2 = new LinkedList();
list2.insertLast(10);
list2.insertLast(11);
list2.head.next.next = list1.head.next;

list1.print();
console.log("\n");
list2.print();
console.log("\n");
findIntersection(list1.head, list2.head);