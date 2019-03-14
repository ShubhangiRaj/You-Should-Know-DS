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
    if(root == null){
        this.root = newNode;
        return;
    }
    let temp, queue = [];
    queue.push(root);
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
bTree.insertElem(bTree.root, 7);
bTree.insertElem(bTree.root, 4);
bTree.insertElem(bTree.root, 5);
bTree.insertElem(bTree.root, 2);
bTree.insertElem(bTree.root, 1);

// zigzag or spiral order traversal
function zigzag(root){
    if(root == null){
        return
    }
    let temp;
    let stack1 = [];
    let stack2 = [];
    stack1.push(root);
    while(stack1.length || stack2.length){
        while(stack1.length){
            temp = stack1.pop();
            console.log(temp.data);
            if(temp.left !== null){
                stack2.push(temp.left);
            }
            if(temp.right !== null){
                stack2.push(temp.right);
            }
        }
        while(stack2.length){
            temp = stack2.pop();
            console.log(temp.data);
            if(temp.right !== null){
                stack1.push(temp.right);
            }
            if(temp.left !== null){
                stack1.push(temp.left);
            }
        }
    }
}

zigzag(bTree.root);