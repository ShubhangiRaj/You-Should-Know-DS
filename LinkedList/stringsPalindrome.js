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
list.insertLast("a");
list.insertLast("bc");
list.insertLast("d");
list.insertLast("dcb");
list.insertLast("c");

// Given a linked list handling string data, check to see whether data is palindrome or not?

function checkPalindrome(listHead){
    let str = "";
    let curr = listHead;
    while(curr !== null){
        str += curr.data;
        curr = curr.next;
    }
    return isPalindrome(str);
}

function isPalindrome(str){
    let revStr = str.split("").reverse().join("");
    console.log(str);
    console.log(revStr);
    if(str == revStr){
        return 1;
    } else {
        return 0;
    }
}

checkPalindrome(list.head);