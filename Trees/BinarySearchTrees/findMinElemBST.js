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

// recursive solution, Time Complexity O(n), space complexity O(n) 
function findMin(root){
    let currNode = root;
    if(currNode.left == null){
        console.log(currNode.data);
        return currNode
    } else {
        return findMin(currNode.left);
    }
}
findMin(bstTree.root);

// iterative solution, space complexity O(1)
function iterativeFindMin(root){
    let currNode = root;
    if(currNode == null){
        return null;
    }
    while(currNode.left !== null){
        currNode = currNode.left;
    }
    console.log(currNode);
    return currNode;
}

iterativeFindMin(bstTree.root)