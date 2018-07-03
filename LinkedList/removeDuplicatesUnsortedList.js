// remove duplicates from an unsorted linked list

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
list.insertLast(5);
list.insertLast(4);
list.insertLast(5);
list.insertLast(3);
list.insertLast(3);
list.insertLast(2);
list.insertLast(7);


// Method 1: 
// Using two loops. Complexity O(n^2)
// Method 2:
// Sorting. Use merge sort and then remove duplicates. Complexity O(nlogn)
// Method 3:
// Hashing.  O(n)

// Input 5,4,5,3,3,2,7
function removeDuplicates(listHead){
    let prev = null;
    let curr = listHead;
    let hashMap = {};

    while(curr !== null){
        if(!hashMap[curr.data]){
            hashMap[curr.data] = 1;
            prev = curr;
            curr = curr.next;
        } else {
            curr = curr.next;
            prev.next = curr.next;
        }
    }
    console.log(hashMap);
    for(let i in hashMap){
        console.log(i);
    }
}

removeDuplicates(list.head);