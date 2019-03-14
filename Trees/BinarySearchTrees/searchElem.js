class Node{
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
}

BinarySearchTree.prototype.insert = function(elem){
    let newNode = new Node(elem);
    if(this.root == null){
        this.root = newNode;
        return;
    } else {
        this.internalInsert(this.root, newNode);
    }
}

BinarySearchTree.prototype.internalInsert = function(root, node){
    if(node.data <= root.data){
        if(root.left == null){
            root.left = node;
            return;
        } else {
            this.internalInsert(root.left, node);
        }
    } else {
        if(root.right == null){
            root.right = node;
            return;
        } else {
            this.internalInsert(root.right, node);
        }
    }
}

let bstTree = new BinarySearchTree();
bstTree.insert(7);
bstTree.insert(4);
bstTree.insert(9);
bstTree.insert(2);
bstTree.insert(5);

function searchElem(root, elem){
    let currNode = root;
    while(currNode){
        if(elem == currNode.data){
            console.log(`elem found ${elem}`)
            return currNode;
        } else if(elem < currNode.data){
            currNode = currNode.left;
        } else {
            currNode = currNode.right;
        }
    }
    return null;
}

searchElem(bstTree.root, 7)

// Time complexity O(n), Space Complexity O(1);