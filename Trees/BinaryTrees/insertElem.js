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

BinaryTree.prototype.levelOrder = function(root){
	if(root === null){
		return
	}
	let temp;
	let queue = [];
    queue.push(root); // inserted root node in the queue
    console.log(queue);
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
bTree.insertElem(bTree.root, 7);
bTree.insertElem(bTree.root, 4);
bTree.insertElem(bTree.root, 3);
bTree.insertElem(bTree.root, 2);
bTree.insertElem(bTree.root, 1);

bTree.levelOrder(bTree.root);

// Time complexity O(n)
