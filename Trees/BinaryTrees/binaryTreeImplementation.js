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

// pre-order traversal
BinaryTree.prototype.preOrder = function(root){
	if(root === null){
		return
	}
	console.log(root.data);
	this.preOrder(root.left);
	this.preOrder(root.right);
}

// in-order traversal
BinaryTree.prototype.inOrder = function(root){
	if(root == null){
		return
	}
	this.inOrder(root.left);
	console.log(root.data);
	this.inOrder(root.right);
}

// post-order traversal
BinaryTree.prototype.postOrder = function(root){
	if(root == null){
		return
	}
	this.postOrder(root.left);
	this.postOrder(root.right);
	console.log(root.data);
}

// level-order traversal
BinaryTree.prototype.levelOrder = function(root){
	if(root === null){
		return
	}
	let temp;
	let queue = [];
	queue.push(root); // inserted root node in the queue
	// while there is at least one discovered node 
	while(queue.length !== null){
		temp = queue.shift();
		console.log(temp.data);
		if(temp.left !== null){
			queue.push(temp.left);
		}
		if(temp.right !== null){
			queue.push(temp.right);
		}
	}
}

let bTree = new BinaryTree();
let node1 = new Node(7);
let node2 = new Node(4);
let node3 = new Node(3);
let node4 = new Node(2);
let node5 = new Node(1);
node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
bTree.root = node1;

// bTree.preOrder(bTree.root);
// bTree.inOrder(bTree.root);
// bTree.postOrder(bTree.root);
bTree.levelOrder(bTree.root);