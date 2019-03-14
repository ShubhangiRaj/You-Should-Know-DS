class Node{
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
    getData(){
        return this.data;
    }
    getLeft(){
        return this.left;
    }
    getRight(){
        return this.right;
    }
}
class BinarySearchTree{
    constructor() {  
        this.root = null;
    }
}

BinarySearchTree.prototype.insert = function(data){
    let newNode = new Node(data);

    if(this.root === null){
        this.root = newNode;
        return;
    }
    else {
        this.internalInsert(this.root, newNode);
    }
}

BinarySearchTree.prototype.internalInsert = function(rootNode, newNode){
    if(newNode.data <= rootNode.data){
        if(rootNode.left === null){
            rootNode.left = newNode;
            return;
        } else {
            this.internalInsert(rootNode.left, newNode);
        }
    } else {
        if(rootNode.right === null){
            rootNode.right = newNode;
            return;
        } else {
            this.internalInsert(rootNode.right, newNode);
        }
    }
}

let bstTree = new BinarySearchTree();
bstTree.insert(7);
bstTree.insert(4);
bstTree.insert(9);
bstTree.insert(2);
bstTree.insert(5);
console.log(bstTree);

function findElem(root, data){
    let currentNode = root;
    while(currentNode !== null && data !== currentNode.getData()){
        if(data > currentNode.getData()){
            currentNode = currentNode.getRight();
        } else {
            currentNode = currentNode.getLeft();
        }
    }
    return currentNode;
}   

// findElem(bstTree.root, 2);

// In BST, the leftmost node with no left child is the minimum elem
function findMinElem(root){
    let currentNode = root;
    if(currentNode == null){
        return currentNode.data;
    }
    while(currentNode.getLeft() !== null){
        currentNode = currentNode.getLeft();
    }
    return currentNode;
}

// findMinElem(bstTree.root);

function findMaxElem(root){
    let currentNode = root;
    if(currentNode == null){
        return currentNode.data;
    }
    while(currentNode.getRight() !== null){
        currentNode = currentNode.getRight();
    }
    return currentNode;
}

// findMaxElem(bstTree.root);

// find second largest elem in BST
function findSecondMax(root){
    // reverse-inorder traversal
    let tempArr = revInorderTraversal(root);
    let count = 0;
    console.log(tempArr);
}

function revInorderTraversal(root){
    if(root == null){
        return 
    }
    let revSortArr = [];
    revInorderTraversal(root.right);
    console.log(root.data);
    revSortArr.push(root.data);
    revInorderTraversal(root.left);
}

findSecondMax(bstTree.root);