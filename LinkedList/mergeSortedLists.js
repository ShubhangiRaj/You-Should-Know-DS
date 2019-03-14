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
list.insertLast(12);
list.insertLast(13);
list.insertLast(15);
list.insertLast(20);
list.print();
// list.getNth(2);

let list2 = new LinkedList();
list2.insertLast(11);
list2.insertLast(14);
list2.insertLast(18);
list2.insertLast(22);
list.print();

function mergeSortedLists(listHeadA, listHeadB){
    if(!listHeadA){
        return listHeadB;
    }
    if(!listHeadB){
        return listHeadA;
    }
    let sorting; // sorting pointer
    if(listHeadA !== null && listHeadB !== null){
        if(listHeadA.data <= listHeadB.data){
            sorting = listHeadA;
            listHeadA = sorting.next;
        } else {
            sorting = listHeadB;
         listHeadB = sorting.next;
        }
    }
    let head = sorting; // The value of sorting from above is assigned to head. Which will the first node of merged LL.
    while(listHeadA !== null && listHeadB !== null){
        if(listHeadA.data <= listHeadB.data){
            sorting.next = listHeadA;
            sorting = listHeadA;
            listHeadA = sorting.next;
        } else {
            sorting.next = listHeadB;
            sorting = listHeadB;
         listHeadB = sorting.next;
        }
    }
    if(listHeadA == null){
        sorting.next = listHeadB;
    }
    if (listHeadB == null){
        sorting.next = headA;
    }
    return head;
}

mergeSortedLists(list.head, list2.head);

// TODO