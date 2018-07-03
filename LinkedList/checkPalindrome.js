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
// list.insertLast("D");
list.insertLast("A");
list.insertLast("M");
list.size();

function checkPalindrome(listHead){
    let currentNode = listHead;
    let tempArr = [];

    while(currentNode !== null){
        tempArr.push(currentNode.data);
        currentNode = currentNode.next;
    }
    let firstElemIndex = 0;
    let endElemIndex = tempArr.length - 1;
    if(tempArr.length % 2 !== 0){
        let mid = Math.floor(tempArr.length/2) + 1;
        while(firstElemIndex !== mid){
            if(tempArr[firstElemIndex] === tempArr[endElemIndex]){
                firstElemIndex++;
                endElemIndex--;
            } else {
                console.log("not a palindrome");
                return;
            }
        }
        console.log("is a palindrome");
        return;
    } else if (tempArr.length % 2 == 0){
        while(firstElemIndex !== endElemIndex){
            if(tempArr[firstElemIndex] === tempArr[endElemIndex]){
                firstElemIndex++;
                endElemIndex--;
            } else {
                console.log("not a palindrome");
                return;
            }
        }
        console.log("is a palindrome");
        return;
    }
}
checkPalindrome(list.head);

// function findMiddle(listHead){
//     if(!listHead){
//         return 0;
//     }
//     let slowPtr = listHead;
//     let fastPtr = listHead;
//     while(fastPtr !== null && fastPtr.next !== null){
//         slowPtr = slowPtr.next;
//         fastPtr = fastPtr.next.next;
//     }
//     console.log(slowPtr);
//     return slowPtr;
// }
// // findMiddle(list.head);

// function findPrevToNode(listHead){
//     if(!listHead){
//         return 0;
//     }
//     let node = findMiddle(listHead);
//     let curr = listHead;
//     let prev;
//     while(curr !== null){
//         if(curr.data == node.data){
//             console.log(prev);
//             return prev;
//         }
//         prev = curr;
//         curr = curr.next;
//     }
// }
// // findPrevToNode(list.head);

// LinkedList.prototype.reverse = function(){
//     let prev = null;
//     let curr = this.head;
//     let next;
//     while(curr !== null){
//         next = curr.next;
//         curr.next = prev;
//         prev = curr;
//         curr = next;
//     }
//     this.head = prev;
//     return this.head;
// }
// // list.reverse();
// // list.print();

// function compareLists(listHeadA, listHeadB){
//     let tempA = listHeadA;
//     let tempB = listHeadB;
//     while(!tempA && !tempB){
//         if(tempA.data == tempB.data){
//             tempA = tempA.next;
//             tempB = tempB.next;
//         } else {
//             return 0;
//         }
//     }
//     return 1;
// }

// function checkPalindrome(listHead){
//     // 
// }
