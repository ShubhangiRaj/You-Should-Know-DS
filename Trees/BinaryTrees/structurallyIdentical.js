class Node{
	constructor(data, left = null, right = null){
		this.data = data;
		this.left = left;
		this.right = right;
	}
	getData(){
		return this.data
	}
	getLeft(){
		return this.left;
	}
	getRight(){
		return this.right;
	}
}

class BinaryTree{
	constructor(){
		this.root = null;
	}
}

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
let bTree = new BinaryTree();
bTree.insertElem(bTree.root, 1);
bTree.insertElem(bTree.root, 2);
bTree.insertElem(bTree.root, 3);
bTree.insertElem(bTree.root, 4);
bTree.insertElem(bTree.root, 5);
bTree.insertElem(bTree.root, 6);
bTree.insertElem(bTree.root, 7);
bTree.insertElem(bTree.root, 8);

let bTree2 = new BinaryTree();
bTree2.insertElem(bTree2.root, 1);
bTree2.insertElem(bTree2.root, 2);
bTree2.insertElem(bTree2.root, 3);
bTree2.insertElem(bTree2.root, 4);
bTree2.insertElem(bTree2.root, 5);
bTree2.insertElem(bTree2.root, 6);
bTree2.insertElem(bTree2.root, 7);

function isIdentical(root1, root2){
    if(root1 == null && root2 == null){
        return 1
    }
    if(root1 !== null && root2 !== null){
        if(isIdentical(root1.left, root2.left) && isIdentical(root1.right, root2.right)){
            return 1
        }
    }
    return 0
}
isIdentical(bTree.root, bTree2.root);