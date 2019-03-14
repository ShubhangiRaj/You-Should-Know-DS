// Given a linked list with a loop, 
// the task is to find whether it is palindrome or not. You are not allowed to remove the loop.

// TODO
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
list.print();

// create a loop
list.head.next.next.next.next = list.head.next.next;
list.print();
// function detectLoop(listHead){
//     if(listHead == null){
//         return 0;
//     }
//     let slowPtr = listHead;
//     let fastPtr = listHead;
//     while(slowPtr && fastPtr && fastPtr.next){
//         slowPtr = slowPtr.next;
//         fastPtr = fastPtr.next.next;
//         if(slowPtr == fastPtr){
//             console.log("loop found");
//             let loopCount = lengthOfloop(slowPtr);
//             return loopCount
//         }
//     }
// }   

// // first find start node of the loop
// // to find start node of the loop, find length of loop

// function lengthOfloop(loopNode, listHead){
//     ptr1 = loopNode;
//     ptr2 = loopNode;
//     let loopNodes = 1;
//     while(ptr2.next !== ptr1){
//         ptr2 = ptr2.next;
//         loopNodes++;
//     }
//     return loopNodes;
// }

// function loopListPalindrome(listHead){
//     let loopCount = detectLoop(listHead);
//     let ptr1 = listHead;
//     let ptr2 = listHead;
//     while(loopCount > 0){
//         ptr2 = ptr2.next;
//         loopCount--;
//     }

//     // move both pointers at same speed to find the start node
//     while(ptr1 !== ptr2){
//         ptr1 = ptr1.next;
//         ptr2 = ptr2.next;
//     }

//     // find the end node of the loop
//     while(ptr2.next !== ptr1){
//         ptr2 = ptr2.next;
//     }

//     // ptr2 points to end node of the loop
//     // point ptr1 back to the listhead

//     ptr1 = listHead;
//     let tempArr = [];

//     while(ptr1 !== ptr2){
//         tempArr.push(ptr1.data);
//         ptr1 = ptr1.next;
//     }
//     console.log(tempArr);
// }

// loopListPalindrome(list.head);

// TODO