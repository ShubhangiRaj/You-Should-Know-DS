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

function intersectionOfSortedLists(listHeadA, listHeadB){
    let resList = new LinkedList();
    let tempA = listHeadA;
    let tempB = listHeadB;
    if(!tempA && !tempB){
        return 0
    }
    while(tempA && tempB){
        if(tempA.data == tempB.data){
            resList.insertLast(tempA.data);
            tempA = tempA.next;
            tempB = tempB.next;
        }else if(tempA.data < tempB.data){
            tempA = tempA.next;
        } else {
            tempB = tempB.next;
        }
    }
    resList.print();
}

let list1 = new LinkedList();
list1.insertLast(10);
list1.insertLast(20);
list1.insertLast(40);
list1.insertLast(54);

let list2 = new LinkedList();
list2.insertLast(13);
list2.insertLast(20);
list2.insertLast(40);
list2.insertLast(54);
list1.insertLast(60);

intersectionOfSortedLists(list1.head, list2.head);

