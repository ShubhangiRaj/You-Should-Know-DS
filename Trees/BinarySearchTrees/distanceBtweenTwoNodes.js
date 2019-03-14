class Node {
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor(){
        this.root = null
    }
}

BST.prototype.insert = function(data){
    let newNode = new Node(data);

    if(this.root === null){
        this.root = newNode;
        return;
    }
    else {
        this.internalInsert(this.root, newNode);
    }
}

BST.prototype.internalInsert = function(rootNode, newNode){
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

let bstTree = new BST();
bstTree.insert(7);
bstTree.insert(4);
bstTree.insert(9);
bstTree.insert(2);
bstTree.insert(5);
console.log(bstTree);

function distBtwnTwoNodes(node1, node2, rootNode){

    // find distance of first node from root
    let dist1 = findDistanceFromRoot(rootNode, node1);
    // find distance of second node from root
    let dist2 = findDistanceFromRoot(rootNode, node2);

    console.log(dist1, dist2);

    // compare teh two distances
}
function findDistanceFromRoot(root, node){
    // if(root == null){
    //     return -1
    // }
    // let dist = -1;
    // if(root.data === node){
    //     return dist+1;
    // } else if(node < root.data){
    //     dist = findDistanceFromRoot(root.left, node);
    // } else if(node > root.data){
    //     dist = findDistanceFromRoot(root.right, node);
    // }
    // if(root === null){
    //     return -1
    // } 
    // let dist = -1;
    // if(node === root.data || (dist = findDistanceFromRoot(root.left, node)) >= 0 || 
    // (dist = findDistanceFromRoot(root.right, node)) >= 0){
    //     return dist + 1
    // }
    // return dist
}

distBtwnTwoNodes(2, 9, bstTree.root);