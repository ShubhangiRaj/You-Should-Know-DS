class Node{
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}
class BinaryTree{
    constructor(){
        this.root = null;
    }
}

let bTree = new BinaryTree();

BinaryTree.prototype.insertElem = function(root, elem){
    let newNode = new Node(elem);
    console.log(newNode);
    if(root == null){
        this.root = newNode;
        return;
    }
    let temp, queue = [];
    queue.push(root);
    console.log(queue);
    while(queue.length){
        temp = queue.shift();
        if(temp.left !== null){
            queue.push(temp.left);
        } else {
            temp.left = newNode;
            return;
        } 
        if(temp.right !== null){
            queue.push(temp.right);
        } else {
            temp.right = newNode
            return;
        }
    }
}

bTree.insertElem(bTree.root, 1);
bTree.insertElem(bTree.root, 2);
bTree.insertElem(bTree.root, 3);
bTree.insertElem(bTree.root, 4);
bTree.insertElem(bTree.root, 5);
bTree.insertElem(bTree.root, 6);
bTree.insertElem(bTree.root, 7);

function reverseLevelOrder(root){
    if(root == null){
        return;
    }
    let temp, stack = [], queue = [];
    queue.push(root);
    while(queue.length){
        temp = queue.shift();
        stack.push(temp);

        if(temp.right !== null){
            queue.push(temp.right);
        } 
        if(temp.left !== null){
            queue.push(temp.left);
        }
    }
    console.log(stack);
    while(stack.length){
        console.log(stack.pop());
    }
}
reverseLevelOrder(bTree.root);

// Time complexity O(n)
