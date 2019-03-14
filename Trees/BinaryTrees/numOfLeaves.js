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

function numOfLeaves(root){
    if(root == null){
        return
    }
    let temp, tempArr = [], queue = [];
    queue.push(root);
    while(queue.length){
        temp = queue.shift();
        if(temp.left == null && temp.right == null){
            tempArr.push(temp.data);
        }
        if(temp.left !== null){
            queue.push(temp.left);
        }
        if(temp.right !== null){
            queue.push(temp.right);
        } 
    }
    console.log(tempArr);
    console.log(tempArr.length);
}
numOfLeaves(bTree.root);

// find number of full nodes i.e. nodes with both children
function fullNodes(root){
    if(root == null){
        return
    }
    let temp, count = 0, queue = [];
    queue.push(root);
    while(queue.length){
        temp = queue.shift();
        if(temp.left && temp.right){
            count += 1;
        }
        if(temp.left !== null){
            queue.push(temp.left);
        }
        if(temp.right !== null){
            queue.push(temp.right);
        }
    }
    console.log(count);
}
fullNodes(bTree.root);

// find number of half nodes i.e. nodes with only one children
function halfNodes(root){
    if(root == null){
        return
    }
    let temp, count = 0, queue = [];
    queue.push(root);
    while(queue.length){
        temp = queue.shift();
        if((temp.left && !temp.right) || (!temp.left && temp.right)){
            count += 1;
        }
        if(temp.left !== null){
            queue.push(temp.left);
        }
        if(temp.right !== null){
            queue.push(temp.right);
        }
    }
    console.log(count);
}
halfNodes(bTree.root);
