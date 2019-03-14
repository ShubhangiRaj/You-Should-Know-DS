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

function findMax(root){
    let currNode = root;
    if(currNode.right == null){
        console.log(currNode.data);
        return currNode;
    } else {
        return findMax(currNode.right);
    }
}
findMax(bstTree.root);

function iterativeFindMax(root){
    let currNode = root;
    if(currNode == null){
        return;
    }
    while(currNode.right !== null){
        currNode = currNode.right;
    }
    console.log(currNode);
    return currNode;
}
iterativeFindMax(bstTree.root)