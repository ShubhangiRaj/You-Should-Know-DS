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