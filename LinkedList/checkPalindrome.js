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
    size(){
        let node = this.head;
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
}
let list = new LinkedList();
list.insertLast("M");
list.insertLast("A");
list.insertLast("D");
list.insertLast("A");
list.insertLast("M");
list.size();
// list.middleNode(list.head);
// list.reverse(list.head);
// list.print();

function reverse(list){
    if(!listHead){
        return
    }
    let prev = null;
    let curr = listHead;
    let next;

    while(curr !== null){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    listHead = prev;
    return listHead;
}

// function middleNode(listHead){
//     if(listHead == null){
//         return
//     }
//     let slowPtr = listHead;
//     let fastPtr = listHead;
//     while(fastPtr !== null && fastPtr.next !== null){
//         slowPtr = slowPtr.next;
//         fastPtr = fastPtr.next.next;
//     }
//     console.log(slowPtr.data);
//     return slowPtr.next;
// }

function compareLists(listHeadA, listHeadB){
    if(listHeadA == null || listHeadB == null){
        return 0
    }
    let tempA = listHeadA;
    let tempB = listHeadB;
    while(tempA !== null && tempB !== null){
        if(tempA.data == tempB.data){
            tempA = tempA.next;
            tempB = tempB.next;
        } else {
            return 0;
        }
    }
    return 1;
}

function checkPalindrome(listHead){
    if(listHead == null){
        return
    }
    let prevOfSlowPtr;
    let slowPtr = listHead;
    let fastPtr = listHead;
    let secondHalf;
    let midNode;
    let result;
    while(fastPtr !== null && fastPtr.next !== null){
        prevOfSlowPtr = slowPtr;
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next.next;
    }

    // if list is even fastPtr will be null. In case of odd numbers it wont be null
    if(fastPtr !== null){
        midNode = slowPtr;
        slowPtr = slowPtr.next;
    }
    prevOfSlowPtr.next = null;
    secondHalf = slowPtr;
    // reverse second half list
    reverse(secondHalf);
    result = compareLists(listHead, secondHalf);

    // construct the original list back
    reverse(secondHalf);
    // If there was a mid node (odd size case) which                                                         
    // was not part of either first half or second half.
    if (midNode !== null) {
        prevOfSlowPtr.next = midNode;
        midNode.next = secondHalf;
    } else  {
        prevOfSlowPtr.next = secondHalf;
    }
    console.log(result);
    return result;
}

checkPalindrome(list.head);

// TODO